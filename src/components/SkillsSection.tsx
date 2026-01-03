import { motion } from 'motion/react';
import {
  SiHtml5, SiCss3, SiJavascript, SiC, SiCplusplus,
  SiTailwindcss, SiBootstrap, SiReact, SiFigma, SiFramer,
  SiNodedotjs, SiPhp, SiMysql, SiGit
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  { name: 'JAVASCRIPT', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'C', icon: SiC, color: '#00599C' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'JAVA', icon: FaJava, color: '#007396' },
  { name: 'TAILWIND', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'BOOTSTRAP', icon: SiBootstrap, color: '#7952B3' },
  { name: 'REACT', icon: SiReact, color: '#61DAFB' },
  { name: 'FIGMA', icon: SiFigma, color: '#F24E1E' },
  { name: 'MOTION', icon: SiFramer, color: '#0055FF' }, // Assuming Framer Motion
  { name: 'NODE JS', icon: SiNodedotjs, color: '#339933' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'MYSQL', icon: SiMysql, color: '#4479A1' },
  { name: 'GIT', icon: SiGit, color: '#F05032' },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-[4.5rem]">
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left Column - Label */}
        <div className="w-full md:w-1/4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="text-[16px] text-white">✦</span>
            <span className="text-[24px] tracking-wider font-medium text-white uppercase font-['Inter']">MY SKILLS</span>
          </motion.div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full md:w-3/4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            {skills.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </motion.div>

          <div className="border-t border-white/20 mt-16" />
        </div>
      </div>
    </section>
  );
}

import { useState, useRef, useEffect } from 'react';

function SkillItem({ skill }: { skill: typeof skills[0] }) {
  const [view, setView] = useState<'text' | 'glitch' | 'icon'>('text');
  const [glitchText, setGlitchText] = useState('');

  // Timer refs to clear timeouts on unmount/change
  const glitchTimerRef = useRef<NodeJS.Timeout | null>(null);
  const frameTimerRef = useRef<number | null>(null);

  const startGlitch = (target: 'text' | 'icon') => {
    setView('glitch');

    // Alphanumeric + Symbols + Underscore (from GlitchText)
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_____________!@#$^&*-=+";
    let frame = 0;
    const maxFrames = 4; // Very fast transition

    const animate = () => {
      if (frame >= maxFrames) {
        setView(target);
        return;
      }

      // Generate random char string of same length as name
      const len = skill.name.length;
      let str = '';
      for (let i = 0; i < len; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
      }
      setGlitchText(str);

      frame++;
      frameTimerRef.current = requestAnimationFrame(() => {
        setTimeout(animate, 30); // 30ms per frame
      });
    };

    if (frameTimerRef.current) cancelAnimationFrame(frameTimerRef.current);
    animate();
  };

  const handleMouseEnter = () => {
    startGlitch('icon');
  };

  const handleMouseLeave = () => {
    startGlitch('text');
  };

  useEffect(() => {
    return () => {
      if (frameTimerRef.current) cancelAnimationFrame(frameTimerRef.current);
      if (glitchTimerRef.current) clearTimeout(glitchTimerRef.current);
    };
  }, []);

  // Container styling - Remove bg/border when showing icon
  const isIcon = view === 'icon';
  const containerClasses = `relative rounded-md flex items-center justify-center py-[5px] px-[8px] transition-all duration-200 overflow-hidden ${isIcon ? 'bg-transparent border border-transparent' : 'bg-[#202020] border border-white'
    }`;

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={containerClasses}>
        {/* Invisible Spacer using Text to maintain Width */}
        <span className="opacity-0 text-[16px] tracking-wide font-normal font-['General_Sans',sans-serif]">
          {skill.name}
        </span>

        {/* Visible Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          {view === 'text' && (
            <span className="text-[16px] tracking-wide font-normal text-white whitespace-nowrap font-['General_Sans',sans-serif]">
              {skill.name}
            </span>
          )}

          {view === 'glitch' && (
            <span className="text-[16px] tracking-wide font-medium text-white/90 whitespace-nowrap font-mono">
              {glitchText}
            </span>
          )}

          {view === 'icon' && (
            <div className="flex items-center justify-center animate-in fade-in zoom-in duration-200">
              {skill.name === 'C' ? (
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                  style={{ backgroundColor: skill.color }}
                >
                  <skill.icon className="text-[18px] text-white" />
                </div>
              ) : (
                <skill.icon className="text-[32px]" style={{ color: skill.color }} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
