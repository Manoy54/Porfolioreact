import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import imgImage1 from '../assets/arbitel.png';
import imgImage3 from '../assets/mathemix.png';
import imgImage4 from '../assets/mangkanor.png';

const projects = [
  {
    title: 'ARBITEL',
    description:
      'Arbitel | Hotel Management & Reservation System Arbitel is a comprehensive web-based platform engineered to streamline the hotel booking lifecycle. It facilitates real-time room reservations, secure guest management, and dynamic inventory control. This system provides a scalable solution designed to optimize modern hospitality operations.',
    tech: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'MYSQL'],
    image: imgImage1,
    viewCodeUrl: 'https://github.com/Manoy54/ArbitelHotel',
    liveDemoUrl: 'https://arbitel-hotel.vercel.app/',
  },
  {
    title: 'MATHEMIX',
    description:
      'Mathemix is a high-energy, gamified educational platform designed to make mathematics competitive and engaging. It combines fast-paced solo challenges with real-time multiplayer lobbies where players compete for the top spot on the leaderboard.',
    tech: ['REACT', 'TAILWIND', 'NOSQL', 'MOTION', 'FIREBASE'],
    image: imgImage3,
    viewCodeUrl: 'https://github.com/Manoy54/MatheMix-repository',
    liveDemoUrl: 'https://mathemix-9c8ba.web.app/welcome',
  },
  {
    title: 'MangKanor Inventory',
    description:
      'Inventory System for Mang Kanor`s Lechon Manok is a specialized system designed to manage stock levels, track sales, and optimize supply chain operations for a poultry business.',
    tech: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'MYSQL'],
    image: imgImage4,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="pt-24 pb-52 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.0 }}
          className="text-center mb-12"
        >
          <h2 className="text-[80px] md:text-[100px] font-['Open_Sans',sans-serif] font-medium tracking-[0.5rem] text-white mb-6 uppercase">
            PROJECTS
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#9ca3af] max-w-2xl mx-auto leading-relaxed font-['General_Sans',sans-serif]">
            Building from the ground up. Exploring what's possible with code, one project at a time
          </p>
        </motion.div>

        <div className="space-y-[100px]">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
