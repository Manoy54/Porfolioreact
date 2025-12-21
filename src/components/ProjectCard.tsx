import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

export function ProjectCard({ project, index, inView }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Create stacking effect - cards move up and scale as you scroll
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        scale,
        opacity,
        position: 'sticky',
        top: `${120 + index * 40}px`,
      }}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-[#343a40] rounded-[22px] p-8 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Project Image */}
        <div className="w-full md:w-1/2 rounded-[22px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[259px] object-cover rounded-[22px]"
          />
        </div>

        {/* Project Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-[40px] text-center md:text-left">{project.title}</h3>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="bg-[#f8f9fa] text-[#212529] px-3 py-1 rounded-md text-[13px]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-[16px] leading-relaxed">{project.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
