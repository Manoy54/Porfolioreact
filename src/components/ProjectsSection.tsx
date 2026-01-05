import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import imgImage1 from '../assets/arbitel.png';
import imgImage3 from '../assets/mathemix.png';
import imgImage4 from '../assets/mangkanor.png';
import imgStudentGrade from '../assets/student&grade.png';

const projects = [
  {
    title: 'ARBITEL',
    description:
      'A full-stack hotel management system handling real-time reservations, guest records, and room inventory. Built to help hotel staff manage daily operations more efficiently.',
    tech: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'MYSQL'],
    image: imgImage1,
    viewCodeUrl: 'https://github.com/Manoy54/ArbitelHotel',
    liveDemoUrl: 'https://arbitel-hotel.vercel.app/',
  },
  {
    title: 'MATHEMIX',
    description:
      'Competitive math game where learning meets speed. Features real-time multiplayer lobbies and solo modes, letting players race against the clock or each other to climb the leaderboards.',
    tech: ['REACT', 'TAILWIND', 'NOSQL', 'MOTION', 'FIREBASE'],
    image: imgImage3,
    viewCodeUrl: 'https://github.com/Manoy54/MatheMix-repository',
    liveDemoUrl: 'https://mathemix-9c8ba.web.app/welcome',
  },
  {
    title: 'MangKanor Inventory',
    description:
      'A custom inventory tracker for a local Lechon Manok business. It tracks stock in real-time and records daily sales, replacing manual logging with a digital dashboard.',
    tech: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'MYSQL'],
    image: imgImage4,
  },
  {
    title: 'STUDENT GRADING SYSTEM',
    description:
      'Console-based academic management system for educational institutions. Manages student records, grades, attendance, and assignments through a text-based interface, storing all data in local text files for simple and reliable data persistence.',
    tech: ['C'],
    image: imgStudentGrade,
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
