import React, { useState, useRef } from 'react';
import { MapPin, Car, FileText, Download } from 'lucide-react';
import TextReveal from '../TextReveal';
import type {  DetailProps, ProfileItem  } from '../../types';

const ProfilePreview: React.FC<DetailProps<ProfileItem>> = ({ item, lang, t }) => {
  const text = t(item.content) as string;

  // Spotlight State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const imgContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imgContainerRef.current) {
      const rect = imgContainerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row items-stretch gap-4 lg:gap-6 text-center md:text-left h-full">
      {/* Content Side */}
      <div className="flex-1 flex flex-col justify-between py-2">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black uppercase leading-none tracking-tighter mb-4">
              Robert<br />Griffaton
            </h1>
            <div className="h-[1px] w-12 bg-cyan-500/50 mx-auto md:mx-0" />
          </div>
          
          <p className="text-sm text-slate-400 font-mono leading-relaxed pr-2">
            <TextReveal text={text} />
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-auto pt-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-[10px] font-bold text-slate-300">
              <MapPin size={12} className="text-cyan-500" /> {t(item.details.contact.location)}
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-[10px] font-bold text-slate-300">
              <Car size={12} className="text-cyan-500" /> {t(item.details.contact.mobility)}
            </div>
          </div>
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg self-center md:self-start mt-1">
            <p className="text-cyan-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {lang === 'fr' ? 'Disponible : Septembre 2026' : 'Available: September 2026'}
            </p>
          </div>
        </div>
      </div>

      {/* Image & CV Container */}
      <div className="flex flex-col gap-3 shrink-0 mt-4 md:mt-0 items-center">
        {/* Spotlight Image Container */}
        <div 
          ref={imgContainerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-40 h-56 md:w-56 md:h-72 lg:w-64 lg:h-80 rounded-2xl overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-all cursor-crosshair"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="/me/ImageFond.jpg" 
              alt="Robert Griffaton Background"
              className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Shadcn Spotlight Glow Effect */}
          <div 
            className="absolute inset-0 z-30 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(100px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.4), transparent 100%)`,
              mixBlendMode: 'screen'
            }}
          />

          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-500 z-20" />
          <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyan-500 z-20" />
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-cyan-500 z-20" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyan-500 z-20" />
        </div>

        {/* CV Link */}
        {item.details.cvUrl && (
          <a 
            href={item.details.cvUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/30 text-white hover:text-cyan-400 rounded-xl transition-all group z-50 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <FileText size={14} className="group-hover:text-cyan-400 transition-colors" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">{lang === 'fr' ? 'Mon CV' : 'My CV'}</span>
            <Download size={14} className="ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfilePreview;
