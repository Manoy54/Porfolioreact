import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-24 px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[32px]">✦</span>
          <h2 className="text-[15px] tracking-wider">ABOUT ME</h2>
        </div>

        <div className="border-t border-white mb-12" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-[20px] leading-relaxed">
            Hi I'm Aimane, a creative web developer based in Belgium. Currently focusing on
            frontend development and digital experiences. Passion for development/design fuels my
            drive to create immersive and visually captivating digital experiences that leave a
            lasting impression.
          </p>

          <p className="text-[20px] leading-relaxed">
            My objective is to maintain a standard of continuous professional improvement. I am
            particularly interested in the challenge of building robust systems that prioritize
            user experience and maintainable codebases. I view every project as an opportunity to
            implement more efficient methodologies and expand my technical horizon within the
            full-stack ecosystem.
          </p>
        </motion.div>

        <div className="border-t border-white mt-12" />
      </div>
    </section>
  );
}
