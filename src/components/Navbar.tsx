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
      initial={{ y: -100 }}
      animate={{
        y: 0,
        height: scrolled ? '64px' : '96px',
        backgroundColor: scrolled ? 'rgba(32, 32, 32, 0.6)' : 'rgba(32, 32, 32, 0.2)', // More transparent for gloss
        backdropFilter: 'blur(16px)', // Always blurred for glossiness
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)', // Subtle glass border
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      // Increased padding to bring elements closer to middle
      className="fixed top-0 left-0 right-0 z-50 px-12 md:px-20 w-full"
    >
      <div className="h-full w-full max-w-[1920px] mx-auto flex items-center justify-between relative">
        {/* Left: Name */}
        <div className="text-white font-bold text-[17px] tracking-[-0.02em] font-sans">
          Sean Armenta
        </div>

        {/* Center: Star */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex items-center justify-center">
          <span className="text-[22px]">✦</span>
        </div>

        {/* Right: Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-[13px] font-bold tracking-tight text-white uppercase font-sans">
          <button
            onClick={() => scrollToSection('projects')}
            className="hover:text-gray-300 transition-colors"
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="hover:text-gray-300 transition-colors"
          >
            EXPERIENCE
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-gray-300 transition-colors"
          >
            CONTACTS
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
