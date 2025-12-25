import { useState, useEffect } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PreContact } from './components/PreContact';
import { ContactSection } from './components/ContactSection';
//comment
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ReactLenis root>
      <div className="bg-[#202020] min-h-screen text-white">
        <Navbar scrolled={scrolled} />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <PreContact />
        <ContactSection />
      </div>
    </ReactLenis>
  );
}
