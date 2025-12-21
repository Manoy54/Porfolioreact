import { useState } from 'react';
import { motion } from 'motion/react';

interface SkillCardProps {
  name: string;
  icon: string;
}

export function SkillCard({ name, icon }: SkillCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[36px] cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Side - Name */}
        <div
          className="absolute inset-0 bg-[#202020] border border-[#e7dfdf] rounded-md px-4 py-2 flex items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <span className="text-[15px] text-white whitespace-nowrap">{name}</span>
        </div>

        {/* Back Side - Icon */}
        <div
          className="absolute inset-0 bg-[#202020] border border-[#e7dfdf] rounded-md px-4 py-2 flex items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <span className="text-[20px]">{icon}</span>
        </div>
      </motion.div>
    </div>
  );
}
