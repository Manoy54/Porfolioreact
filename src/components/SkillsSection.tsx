import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { SkillCard } from './SkillCard';

const skills = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JAVASCRIPT', icon: 'JS' },
  { name: 'C', icon: 'C' },
  { name: 'C++', icon: 'C++' },
  { name: 'JAVA', icon: '☕' },
  { name: 'TAILWIND', icon: '🌊' },
  { name: 'BOOTSTRAP', icon: '🅱️' },
  { name: 'REACT', icon: '⚛️' },
  { name: 'FIGMA', icon: '🎯' },
  { name: 'FRAMER', icon: '📐' },
  { name: 'NODE JS', icon: '💚' },
  { name: 'PHP', icon: '🐘' },
  { name: 'MYSQL', icon: '🗄️' },
  { name: 'GIT', icon: '🔀' },
];

export function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-24 px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[32px]">✦</span>
          <h2 className="text-[15px] tracking-wider">SKILLS</h2>
        </div>

        <div className="border-t border-white mb-12" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <SkillCard name={skill.name} icon={skill.icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
