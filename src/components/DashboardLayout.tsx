import React, { type ReactNode } from 'react';
import Sidebar from './Sidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { useView } from '../context/ViewContext';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { currentView } = useView();

  return (
    <div className="flex h-screen w-screen bg-background text-slate-200 overflow-hidden relative">
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-20" />
      
      <Sidebar />

      <main className="flex-1 relative overflow-hidden flex flex-col">
        {/* Top Header Bar */}
        <header className="h-14 border-b border-white/10 flex items-center justify-between px-12 bg-surface/30 backdrop-blur-sm z-40">
           <div className="flex items-center gap-6">
              <span className="text-mono text-[10px] text-slate-600">VIEW_PORT: {currentView.toUpperCase()}</span>
              <div className="w-px h-4 bg-white/10" />
              <span className="text-mono text-[10px] text-slate-600">REF: S6_PORTFOLIO_V2</span>
           </div>
           <div className="flex items-center gap-4">
              <div className="flex gap-1">
                 {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/5" />)}
              </div>
              <span className="text-mono text-[10px] text-slate-600">© 2026</span>
           </div>
        </header>

        {/* Content Area with Transitions */}
        <div className="flex-1 relative">
           <AnimatePresence mode="wait">
              <motion.div
                key={currentView}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 overflow-hidden"
              >
                {children}
              </motion.div>
           </AnimatePresence>
        </div>

        {/* Bottom Status Bar */}
        <footer className="h-8 border-t border-white/10 bg-surface/50 flex items-center px-12 justify-between z-40">
           <div className="flex gap-8">
              <span className="text-mono text-[8px] text-primary font-black tracking-widest animate-pulse">LINK_STABLE</span>
              <span className="text-mono text-[8px] text-slate-600">BUFF_0.4ms</span>
           </div>
           <div className="flex gap-4 items-center">
              <span className="text-mono text-[8px] text-slate-600 uppercase tracking-widest">Engineering_Interface_Active</span>
              <div className="w-16 h-1 bg-primary/20 rounded-full" />
           </div>
        </footer>
      </main>
    </div>
  );
};

export default DashboardLayout;
