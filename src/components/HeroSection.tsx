import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { GlitchText } from './GlitchText';

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
    "JavaScript", "C", "C++", "JAVA",
    "Python", "SQL", "HTML", "CSS"
  ],
  frameworks: [
    "React", 
    "Node.js", "TailwindCSS"
  ],
  tools: [
    "Git", "VS Code", 
    "Figma", 
  ],
  databases: [
    "PostgreSQL", "Firebase", "MySQL"
  ]
};

export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    work: "Mathemix",
    year: "2025",
    details: "Building functional Math Game"
  },
 
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
      className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 bg-[#202020] group"
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
            maskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
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
      <div className="relative z-10 text-center w-full mx-auto px-4 pointer-events-none">


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-widest md:tracking-[0.3rem] mb-8 text-white font-['Clash_Grotesk',sans-serif] font-medium whitespace-normal md:whitespace-nowrap"
        >
          <GlitchText text="SEAN DYLAN ARMENTA" triggerOnMount />
          {/* Custom thinner cursor with hard blink */}
          <div className="animate-blink inline-block ml-3 w-[3px] h-[36px] md:h-[48px] lg:h-[60px] bg-white translate-y-[4px] md:translate-y-[8px]" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[15px] md:text-[20px] text-white leading-relaxed max-w-[700px] mx-auto font-['General_Sans',sans-serif] font-normal"
        >
          <GlitchText triggerOnMount text="Aspiring Full-Stack Developer building responsive web apps with modern architecture. I’m a proactive problem-solver eager to contribute to impactful projects in a team environment." />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="/CV%20-%20Sean%20Dylan%20Armenta.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group/resume pointer-events-auto inline-block px-4 py-2 font-['JetBrains_Mono',monospace] text-[16px] md:text-[18px] text-[#a1a1aa] hover:text-white hover:scale-[1.02] transition-all duration-300"
          >
            &lt;ViewResume <span className="group-hover/resume:hidden">/&gt;</span><span className="hidden group-hover/resume:inline">-&gt;</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#202020] to-transparent pointer-events-none z-20" />

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
