import React from 'react';
import { motion } from 'framer-motion';
import { useView, type ViewType } from '../context/ViewContext';

const navItems: { id: ViewType; label: string; icon: string }[] = [
  { id: 'system', label: 'SYSTEM_ID', icon: '01' },
  { id: 'engineering', label: 'ENG_CORE', icon: '02' },
  { id: 'experiences', label: 'LOG_EXP', icon: '03' },
  { id: 'projects', label: 'ASSET_DEV', icon: '04' },
  { id: 'academic', label: 'ACAD_PATH', icon: '05' },
];

const Sidebar: React.FC = () => {
  const { currentView, setCurrentView } = useView();

  return (
    <aside className="w-64 h-full border-r border-white/10 flex flex-col bg-surface/50 backdrop-blur-md z-50">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <span className="text-mono text-xs font-bold tracking-tighter text-slate-400">STATUS: OPERATIONAL</span>
        </div>
        <h1 className="text-lg font-black mt-2 tracking-tight">R.GRIFFATON<span className="text-primary">_</span></h1>
      </div>

      <nav className="flex-1 py-8 px-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all text-left group relative overflow-hidden ${
              currentView === item.id ? 'bg-primary/10 text-primary' : 'text-slate-500 hover:text-slate-200'
            }`}
          >
            {currentView === item.id && (
              <motion.div 
                layoutId="active-pill"
                className="absolute left-0 w-1 h-full bg-primary"
              />
            )}
            <span className="text-mono text-[10px] opacity-50">{item.icon}</span>
            <span className="text-mono text-xs font-bold tracking-widest">{item.label}</span>
            
            <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px]">»</span>
            </div>
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-white/10">
        <div className="flex flex-col gap-1">
          <span className="text-mono text-[8px] text-slate-600 uppercase">Current Subsystem</span>
          <span className="text-mono text-[10px] text-primary uppercase font-bold">{currentView}_V2.0</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
