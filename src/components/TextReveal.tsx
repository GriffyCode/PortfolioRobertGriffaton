import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
  delay?: number;
}

const TextReveal: React.FC<Props> = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");
  
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: delay } }
      }}
      className={className}
    >
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <motion.span
            variants={{
              hidden: { opacity: 0, filter: 'blur(8px)', y: 2 },
              visible: { opacity: 1, filter: 'blur(0px)', y: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {word}
          </motion.span>
          {" "}
        </React.Fragment>
      ))}
    </motion.span>
  );
};

export default TextReveal;
