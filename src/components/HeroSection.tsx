import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

const PROFILE_CODE = `/**
 * @file src/profile/data.ts
 * @description User profile data and configuration
 */

export const BIO = {
  name: "Sean Dylan L. Armenta",
  age: 21,
  birthday: "July 16, 2004",
  location: {
    barangay: "Matagbac",
    city: "Tabaco City"
  }
};

export const EDUCATION = {
  elementary: "Tabaco Northwest Central School",
  secondary: [
    "Saint Gregory the Great Seminary",
    "Tabaco National High School"
  ],
  seniorHigh: "Tabaco National High School",
  tertiary: {
    course: "Bachelor of Science in Information Technology",
    university: "Bicol University - College of Science",
    address: "Legazpi, Albay"
  }
};

export const SKILLS = {
  languages: [
    "JavaScript", "TypeScript", 
    "Python", "SQL", "HTML", "CSS"
  ],
  frameworks: [
    "React", "Next.js", 
    "Node.js", "TailwindCSS"
  ],
  tools: [
    "Git", "VS Code", 
    "Figma", "Postman", "Docker"
  ],
  databases: [
    "PostgreSQL", "MongoDB", "MySQL"
  ]
};

export const EXPERIENCE = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    year: "2023 - Present",
    details: "Building responsive web apps."
  },
  {
    role: "Freelance",
    year: "2021 - 2023",
    details: "Delivered custom websites."
  }
];

export const HOBBIES = [
  "Video Games", "Basketball",
  "Running", "Jogging", "Movies"
];
`;

/**
 * Safe syntax highlighting helper
 * Prevents regex collisions by using placeholders for strings/comments AND generated tags.
 */
const highlightCode = (line: string) => {
    const placeholders: { text: string; type: string }[] = [];

    const hide = (text: string, type: 'string' | 'comment' | 'tag') => {
        placeholders.push({ text, type });
        return `__PH${placeholders.length - 1}__`;
    };

    const wrap = (content: string, color: string, bold = false) => {
        return hide(`<span style="color: ${color}${bold ? '; font-weight: bold' : ''}">${content}</span>`, 'tag');
    };

    // 1. Extract Strings (double quoted)
    let processed = line.replace(/"(?:[^"\\]|\\.)*"/g, match => hide(match, 'string'));

    // 2. Extract Comments
    processed = processed.replace(/\/\*[\s\S]*?\*\//g, match => hide(match, 'comment'));
    processed = processed.replace(/\/\/.*/g, match => hide(match, 'comment'));

    // 3. Object Keys (Precede keywords to avoid collision if keywords are used as keys)
    // Lookahead for colon, avoid matching things that shouldn't be keys
    processed = processed.replace(/([a-zA-Z0-9_]+)(?=:)/g, match => wrap(match, '#9cdcfe'));

    // 4. Keywords
    processed = processed.replace(/\b(const|export|import|from|return|function|class|interface|type)\b/g, match => wrap(match, '#569cd6', true));

    // 5. Constants
    processed = processed.replace(/\b(BIO|EDUCATION|HOBBIES|SKILLS|EXPERIENCE)\b/g, match => wrap(match, '#4fc1ff'));

    // 6. Primitives
    processed = processed.replace(/\b(true|false|null|undefined)\b/g, match => wrap(match, '#569cd6'));

    // 7. Numbers
    processed = processed.replace(/\b(\d+)\b/g, match => wrap(match, '#b5cea8'));

    // 8. Restore placeholders
    return processed.replace(/__PH(\d+)__/g, (_, index) => {
        const item = placeholders[parseInt(index)];
        if (!item) return '';
        if (item.type === 'string') {
            return `<span style="color: #ce9178">${item.text}</span>`; // Strings (Orange/Red)
        }
        if (item.type === 'comment') {
            return `<span style="color: #6a9955">${item.text}</span>`; // Comments (Green)
        }
        return item.text; // Tags are already formatted HTML
    });
};

export function HeroSection() {
    const containerRef = useRef<HTMLElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePosition({ x, y });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-[#202020] group"
        >
            {/* Code Background Layer */}
            <div
                className="absolute top-24 inset-x-0 bottom-0 text-left px-4 md:px-8 lg:px-12 overflow-hidden pointer-events-none select-none w-full"
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                }}
            >
                <pre
                    className="text-[#d4d4d4] text-[16px] md:text-[18px] lg:text-[20px] leading-snug transition-opacity duration-300 w-full h-full columns-1 lg:columns-2 gap-16 md:gap-24"
                    style={{
                        maskImage: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
                        WebkitMaskImage: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
                        opacity: isHovering ? 1 : 0,
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word'
                    }}
                >
                    <code className="block">
                        {PROFILE_CODE.split('\n').map((line, i) => (
                            <span key={i} className="block break-inside-avoid relative pl-12">
                                {/* Fixed width line number container */}
                                <span className="absolute left-0 top-0 text-[#858585] w-8 text-right select-none opacity-50">{i + 1}</span>
                                <span dangerouslySetInnerHTML={{ __html: highlightCode(line) || ' ' }} />
                            </span>
                        ))}
                    </code>
                </pre>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-8 pointer-events-none">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[36px] tracking-wider mb-12 text-white"
                    style={{ fontFamily: 'Montserrat Subrayada, sans-serif' }}
                >
                    FULL STACK DEVELOPER
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[24px] text-white leading-relaxed max-w-[680px] mx-auto"
                >
                    Aspiring Full-Stack Developer | Lifelong Learner 3rd-year BSIT student passionate about
                    the endless evolution of web development. I am currently honing my skills in end-to-end
                    development, seeking opportunities to apply my knowledge to real-world projects and learn
                    from the best in the industry.
                </motion.p>
            </div>

            {/* Mobile Fallback */}
            <style>{`
        @media (hover: none) {
          pre {
            mask-image: none !important;
            -webkit-mask-image: none !important;
            opacity: 0.05 !important;
          }
        }
      `}</style>
        </section>
    );
}
