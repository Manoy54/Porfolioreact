import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="about" className="py-10 md:py-24 px-6 md:px-[4.5rem]">
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
            <p className="text-[15px] md:text-[20px] leading-normal md:leading-relaxed text-[#9ca3af] hover:text-white transition-colors duration-300 font-['General_Sans',sans-serif]">
              A student based in Tabaco City, Albay, currently working through the ins and outs of Full Stack Development. Work usually involves building responsive interfaces, handling the logic behind the scenes, and organizing data to create smooth web applications. There’s a constant focus on experimenting with different tools and making sure everything runs efficiently. A big believer in teamwork and clear communication, ensuring that every project reaches its full potential.
            </p>
          </motion.div>

          <div className="border-t border-white/20 mt-16" />
        </div>
      </div>
    </section>
  );
}
