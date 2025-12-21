import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random code snippets for background
  const codeLines = [
    'const developer = new FullStack();',
    'function buildDreams() { return innovation; }',
    'import { passion } from "learning";',
    'class Developer extends Learner {',
    '  constructor() { super(); }',
    '  async develop() { await this.learn(); }',
    '}',
    'export default creativity;',
    'const skills = ["React", "Node", "TypeScript"];',
    'if (opportunity) { seize(); }',
    'while (learning) { grow++; }',
    'return excellence;',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Code Background with Spotlight Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 gap-8 p-12 opacity-0">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="text-gray-700 text-sm font-mono"
              style={{
                opacity: 0.1,
              }}
            >
              {codeLines[i % codeLines.length]}
            </div>
          ))}
        </div>

        {/* Spotlight effect */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
            transition: 'all 0.1s ease-out',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-1 gap-2 text-gray-400 text-xs font-mono">
              {codeLines.slice(0, 8).map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[36px] tracking-wider mb-12"
          style={{ fontFamily: 'Montserrat Subrayada, sans-serif' }}
        >
          FULL STACK DEVELOPER
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[24px] leading-relaxed max-w-[680px] mx-auto"
        >
          Aspiring Full-Stack Developer | Lifelong Learner 3rd-year BSIT student passionate about
          the endless evolution of web development. I am currently honing my skills in end-to-end
          development, seeking opportunities to apply my knowledge to real-world projects and learn
          from the best in the industry.
        </motion.p>
      </div>

      {/* Bottom Gradient Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-700/20 via-gray-600/10 to-transparent pointer-events-none" />
    </section>
  );
}
