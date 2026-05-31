import React from 'react';
import { Download, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  lang: 'fr' | 'en';
  setLang: (lang: 'fr' | 'en') => void;
  title?: string;
  color?: string;
  Icon?: any;
  onClose?: () => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, title, color, Icon, onClose }) => {
  return (
    <header className="flex items-center justify-between h-12 mb-4 shrink-0 z-[110] px-2">
      {/* Left: Branding or Back Button */}
      <div className="flex items-center gap-2 lg:gap-3">
        {onClose && (
          <button 
            onClick={onClose} 
            className="p-1 lg:p-1.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all mr-1"
          >
            <ArrowLeft size={16} className="text-white" />
          </button>
        )}
        <h1 className="text-lg md:text-xl lg:text-2xl font-black uppercase tracking-tighter text-white leading-none">Robert Griffaton</h1>
      </div>

      {/* Center: Block Title (Only when in detail view) */}
      {title && (
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 lg:gap-3 animate-in fade-in slide-in-from-top-2 duration-500 hidden sm:flex">
           {Icon && (
             <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg flex items-center justify-center text-white border border-white/10" style={{ backgroundColor: `${color}15` }}>
                <Icon size={14} style={{ color }} />
             </div>
           )}
           <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] lg:tracking-[0.4em] text-white whitespace-nowrap">
             {title}
           </span>
        </div>
      )}

      {/* Right: Actions */}
      <div className="flex items-center gap-2 lg:gap-4">
        <button 
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
          className="px-3 lg:px-4 py-1.5 lg:py-2 bg-white/5 border border-white/10 rounded-full text-[10px] lg:text-[11px] font-black hover:bg-white/10 transition-all flex items-center gap-1 lg:gap-2"
        >
          {lang === 'fr' ? '🇫🇷' : '🇬🇧'} <span className="hidden sm:inline">{lang === 'fr' ? 'FR' : 'EN'}</span>
        </button>

        <a 
          href="/cv/Robert_Griffaton_CV.pdf" 
          download 
          className="flex px-4 lg:px-6 py-1.5 lg:py-2 bg-white text-black rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all items-center gap-1 lg:gap-2 shadow-xl"
        >
          <Download size={14} />
          <span className="hidden md:inline">{lang === 'fr' ? 'CV' : 'CV'}</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
