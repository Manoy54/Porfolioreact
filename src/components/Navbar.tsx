import { motion } from 'motion/react';

interface NavbarProps {
  scrolled: boolean;
}

export function Navbar({ scrolled }: NavbarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: scrolled ? -10 : 0,
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        backgroundColor: scrolled ? 'rgba(32, 32, 32, 0.8)' : 'rgba(32, 32, 32, 0)',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[32px]">✦</span>
          <span className="text-[20px]">SEAN ARMENTA</span>
        </div>

        <div className="flex items-center gap-12">
          <button
            onClick={() => scrollToSection('skills')}
            className="text-[20px] hover:text-gray-300 transition-colors"
          >
            SKILLS
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-[20px] hover:text-gray-300 transition-colors"
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-[20px] hover:text-gray-300 transition-colors"
          >
            CONTACTS
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
