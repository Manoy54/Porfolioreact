import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ProjectCard } from './ProjectCard';
import imgImage1 from '../assets/417b38615138b7ded6d978f6786eb7c5158da4eb.png';
import imgImage3 from '../assets/64ca36b5e0d3e7dd75d8d630aa8f238b1024c6bb.png';
import imgImage4 from '../assets/1af2df29fb6761d26130cecc294ecbe96970bd25.png';

const projects = [
  {
    title: 'ARBITEL',
    description:
      'Arbitel | Hotel Management & Reservation System Arbitel is a comprehensive web-based platform engineered to streamline the hotel booking lifecycle. It facilitates real-time room reservations, secure guest management, and dynamic inventory control. This system provides a scalable solution designed to optimize modern hospitality operations.',
    tech: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'MYSQL'],
    image: imgImage1,
  },
  {
    title: 'MATHEMIX',
    description:
      'Mathemix is a high-energy, gamified educational platform designed to make mathematics competitive and engaging. It combines fast-paced solo challenges with real-time multiplayer lobbies where players compete for the top spot on the leaderboard.',
    tech: ['REACT', 'TAILWIND', 'NOSQL', 'MOTION', 'FIREBASE'],
    image: imgImage3,
  },
  {
    title: 'MangKanor InvMan',
    description:
      'Arbitel | Hotel Management & Reservation System Arbitel is a comprehensive web-based platform engineered to streamline the hotel booking lifecycle. It facilitates real-time room reservations, secure guest management, and dynamic inventory control. This system provides a scalable solution designed to optimize modern hospitality operations.',
    tech: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'MYSQL'],
    image: imgImage4,
  },
];

export function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section id="projects" className="py-24 px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-[40px] text-center mb-16"
        >
          PROJECTS
        </motion.h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
