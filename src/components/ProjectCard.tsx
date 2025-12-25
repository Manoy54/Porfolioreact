import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { FiLink } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
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

  // Stacking effect: Card stays sticky, but scales down as we scroll past it (simulating depth)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]); // Keep opaque to show stack

  const isEven = index % 2 === 0;

  // Theme Config [Light : Dark]
  const bgClass = isEven ? 'bg-[#F9FAFB]' : 'bg-[#18181b] border border-white/10';
  const titleColor = isEven ? 'text-[#111827]' : 'text-white';
  const descColor = isEven ? 'text-[#374151]' : 'text-[#A1A1AA]';
  const pillClass = isEven
    ? 'bg-white border border-gray-200 text-gray-800'
    : 'bg-white text-black border border-transparent';

  // Image Container Theme
  // Image Container Theme - Removed to blend with card
  const imgContainerClass = '';

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        zIndex: index,
        position: 'sticky',
        top: `${90 + index * 40}px`, // Tighter stacking spacing
      }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1.0, delay: index * 0.2 }}
      className={`${bgClass} rounded-[24px] shadow-xl h-auto overflow-hidden flex flex-col`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 p-6 md:p-10 items-center h-full">
        {/* Left Side: Image Container */}
        <div className={`w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative flex items-center justify-center ${imgContainerClass}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain p-4"
          />
          {/* Overlay to darken slightly if needed, or just hover effect */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>

        {/* Right Side: content */}
        <div className="flex flex-col justify-center gap-6">

          {/* Title Area */}
          <div>
            <h3 className={`text-[40px] md:text-[56px] font-bold tracking-tight uppercase leading-none ${titleColor}`}>
              {project.title}
            </h3>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <span className={`text-[13px] font-bold tracking-widest uppercase opacity-60 ${descColor}`}>
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-bold tracking-wide border ${pillClass}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className={`text-[16px] md:text-[18px] leading-relaxed ${descColor}`}>
            {project.description}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 mt-2">
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#202022] hover:bg-[#2a2a2c] text-white transition-all group">
              <FiLink className="text-lg group-hover:scale-110 transition-transform" />
              <span className="font-medium">View Code</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0F1021] hover:bg-[#1a1b35] text-white transition-all group">
              <FiLink className="text-lg group-hover:scale-110 transition-transform" />
              <span className="font-medium">Live Demo</span>
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
