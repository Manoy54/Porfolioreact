import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';


interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  viewCodeUrl?: string;
  liveDemoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const isEven = index % 2 === 0;

  const bgClass = isEven ? 'bg-[#F9FAFB]' : 'bg-[#18181b] border border-white/10';
  const titleColor = isEven ? 'text-[#111827]' : 'text-white';
  const descColor = isEven ? 'text-black' : 'text-white';
  const pillClass = isEven
    ? 'bg-white border border-gray-200 text-gray-800'
    : 'bg-white text-black border border-transparent';

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        zIndex: index,
        position: 'sticky',
        top: isMobile ? `${70 + index * 20}px` : `${90 + index * 40}px`,
      }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1.0, delay: index * 0.2 }}
      className={`${bgClass} rounded-[24px] shadow-xl h-auto overflow-hidden flex flex-col`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 p-4 md:p-10 items-center h-full">
        <div className={`w-full h-[200px] md:h-[400px] rounded-2xl overflow-hidden relative flex items-center justify-center`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain p-4"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>

        <div className="flex flex-col justify-center gap-5">
          <div>
            <h3 className={`text-2xl sm:text-3xl md:text-[56px] font-bold tracking-tight uppercase leading-none break-words ${titleColor}`}>
              {project.title}
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            <span className={`block text-[13px] font-bold tracking-widest uppercase opacity-60 ${descColor}`}>
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-[13px] font-bold tracking-wide border ${pillClass}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <p className={`text-[14px] md:text-[16px] leading-relaxed font-['General_Sans',sans-serif] ${descColor}`}>
            {project.description}
          </p>

          <div className="flex flex-row gap-3 w-full md:w-auto pt-3 border-t border-white/10 mt-0">
            {project.viewCodeUrl && (
              <a
                href={project.viewCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none flex items-center justify-center md:justify-start gap-2 px-3 py-2 md:px-5 md:py-2 rounded-lg bg-[#dee2e6] hover:bg-[#c1c5c9] text-black transition-all group"
              >
                <span className="font-mono text-sm md:text-base flex items-center">
                  <span className="group-hover:-translate-x-1 transition-transform duration-300">&lt;</span>
                  <span>/</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">&gt;</span>
                </span>
                <span className="font-medium text-xs md:text-[14px] font-['General_Sans',sans-serif] whitespace-nowrap">View Code</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none flex items-center justify-center md:justify-start gap-2 px-3 py-2 md:px-5 md:py-2 rounded-lg bg-[#0F1021] hover:bg-[#1a1b35] text-white transition-all group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5 text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  <line x1="5" y1="19" x2="19" y2="5" />
                  <polyline points="11 5 19 5 19 13" />
                </svg>
                <span className="font-medium text-xs md:text-[14px] font-['General_Sans',sans-serif] whitespace-nowrap">Live Demo</span>
              </a>
            )}
          </div>

        </div>
      </div>
    </motion.div>
  );
}
