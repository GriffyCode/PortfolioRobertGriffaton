import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BentoBlockProps {
  id: string;
  className?: string;
  children: ReactNode;
  onClick: () => void;
  variants?: any;
}

const BentoBlock: React.FC<BentoBlockProps> = ({ className, children, onClick, variants }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`relative bg-[#121214]/40 border border-white/5 rounded-3xl cursor-pointer transition-all duration-300 overflow-hidden shadow-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default BentoBlock;
