import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-background flex flex-col justify-center items-center"
    >
      <div className="relative">
        {/* Animated Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full border-t-2 border-primary border-r-2 border-transparent"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-24 h-24 rounded-full border-b-2 border-secondary border-l-2 border-transparent"
        />
        
        {/* Center Name */}
        <div className="absolute inset-0 flex items-center justify-center">
           <motion.span 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-white font-bold text-xl"
           >
             RG
           </motion.span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold tracking-[0.2em] text-gradient uppercase">
          Robert Griffaton
        </h2>
        <div className="w-48 h-1 bg-white/5 rounded-full mt-4 overflow-hidden relative">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-primary to-secondary"
          />
        </div>
        <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-4">
          Initialisation du Portfolio...
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
