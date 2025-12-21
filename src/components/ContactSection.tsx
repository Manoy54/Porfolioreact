import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-32 px-8 min-h-screen flex items-center justify-center" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-[64px] leading-tight">
            Got a vision? Let's
            <br />
            bring it to life!
          </h2>

          <p className="text-[20px] leading-relaxed max-w-[684px] mx-auto">
            I'm always excited to collaborate on new and innovative projects. Whether you're
            starting from scratch or refining an existing idea.
          </p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[64px] pt-8"
          >
            LET GET IN CONTACT
          </motion.h3>
        </motion.div>
      </div>
    </section>
  );
}
