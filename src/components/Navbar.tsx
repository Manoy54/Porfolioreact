import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { GlitchText } from './GlitchText';

interface NavbarProps {
  scrolled: boolean;
}

export function Navbar({ scrolled }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        height: scrolled ? '64px' : '96px',
        backgroundColor: scrolled ? 'rgba(32, 32, 32, 0.6)' : 'rgba(32, 32, 32, 0.2)', // More transparent for gloss
        backdropFilter: 'blur(16px)', // Always blurred for glossiness
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'
      }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      // Increased padding to bring elements closer to middle
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-20 w-full"
    >
      <div className="h-full w-full max-w-[1920px] mx-auto flex items-center justify-between relative">
        {/* Left: Name */}
        <div className="text-white font-bold text-[14px] md:text-[17px] tracking-[-0.02em] font-['Inter'] cursor-pointer z-50 mix-blend-difference">
          <GlitchText text="Sean Armenta" />
        </div>

        {/* Center: Star */}
        <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white items-center justify-center">
          <span className="text-[22px]">✦</span>
        </div>

        {/* Right: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-[13px] font-bold tracking-tight text-white uppercase font-['Inter']">
          <button
            onClick={() => scrollToSection('projects')}
            className="hover:text-gray-300 transition-colors"
          >
            <GlitchText text="PROJECTS" />
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="hover:text-gray-300 transition-colors"
          >
            <GlitchText text="SKILLS" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-gray-300 transition-colors"
          >
            <GlitchText text="CONTACTS" />
          </button>
        </div>

        {/* Right: Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden text-white p-2 z-50"
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[75%] max-w-[300px] h-screen bg-[#1a1a1a] border-l border-white/10 z-[70] md:hidden shadow-2xl flex flex-col p-8"
            >
              <div className="flex justify-end mb-12">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-8 text-[15px] font-bold tracking-tight text-white uppercase font-['Inter']">
                <button
                  onClick={() => {
                    scrollToSection('projects');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left py-2 hover:text-gray-300 transition-colors border-b border-white/10 pb-4"
                >
                  <GlitchText text="PROJECTS" />
                </button>
                <button
                  onClick={() => {
                    scrollToSection('skills');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left py-2 hover:text-gray-300 transition-colors border-b border-white/10 pb-4"
                >
                  <GlitchText text="SKILLS" />
                </button>
                <button
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left py-2 hover:text-gray-300 transition-colors border-b border-white/10 pb-4"
                >
                  <GlitchText text="CONTACTS" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav >
  );
}
