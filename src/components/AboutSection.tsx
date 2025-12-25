import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-[4.5rem]">
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
            <span className="text-[24px] tracking-wider font-medium text-white uppercase font-['Inter']">ABOUT ME</span>
          </motion.div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full md:w-3/4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-[16px] md:text-[18px] leading-relaxed text-[#9ca3af]">
              Hi I'm Aimane, a creative web developer based in Belgium. Currently focusing on
              frontend development and digital experiences. Passion for development/design fuels my
              drive to create immersive and visually captivating digital experiences that leave a
              lasting impression.
            </p>

            <p className="text-[16px] md:text-[18px] leading-relaxed text-[#9ca3af]">
              My objective is to maintain a standard of continuous professional improvement. I am
              particularly interested in the challenge of building robust systems that prioritize
              user experience and maintainable codebases. I view every project as an opportunity to
              implement more efficient methodologies and expand my technical horizon within the
              full-stack ecosystem.
            </p>
          </motion.div>

          <div className="border-t border-white/20 mt-16" />
        </div>
      </div>
    </section>
  );
}
