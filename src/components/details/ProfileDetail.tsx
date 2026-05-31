import React from 'react';
import { User, Phone, Mail, MapPin } from 'lucide-react';
import type {  DetailProps, ProfileItem  } from '../../types';

const ProfileDetail: React.FC<DetailProps<ProfileItem>> = ({ item, lang, t }) => {
  return (
    <div className="col-span-12 space-y-8">
      {/* Objective Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-9 p-10 border border-cyan-500/20 bg-cyan-500/5 rounded-[2.5rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <User size={120} className="text-cyan-500" />
          </div>
          <h3 className="text-xs font-black uppercase tracking-widest text-cyan-500 mb-6">{lang === 'fr' ? 'Objectif 2026' : '2026 Objective'}</h3>
          <p className="text-3xl lg:text-4xl font-black text-white leading-tight uppercase tracking-tighter relative z-10">
            {lang === 'fr' ? "Recherche d'une alternance de 3 ans - Cycle Ingénieur ESIEE Paris." : "Seeking a 3-year apprenticeship - ESIEE Paris Engineering School."}
          </p>
          <div className="mt-8 pt-8 border-t border-cyan-500/10 flex gap-4">
            <div className="px-6 py-3 bg-cyan-500 text-white rounded-full text-[11px] font-black uppercase shadow-lg shadow-cyan-500/20">{lang === 'fr' ? 'Septembre 2026' : 'September 2026'}</div>
            <div className="px-6 py-3 bg-white/5 text-slate-400 border border-white/10 rounded-full text-[11px] font-black uppercase">{lang === 'fr' ? '3 Ans' : '3 Years'}</div>
          </div>
        </div>
        <div className="lg:col-span-3 relative group overflow-hidden rounded-2xl border border-white/5 min-h-[200px]">
          <img src="/me/ImageFond.jpg" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" alt="Robert Griffaton" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4">
            <span className="text-[8px] font-black uppercase tracking-widest text-white/50">{lang === 'fr' ? 'Portrait' : 'Portrait'}</span>
            <h3 className="text-xs font-black text-white uppercase tracking-tighter">Robert Griffaton</h3>
          </div>
        </div>
      </div>

      {/* About & Contact Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-3 p-8 bg-white/10 border border-white/10 rounded-3xl space-y-6 flex flex-col justify-center">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">{lang === 'fr' ? 'Contact' : 'Contact Info'}</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone size={16} className="text-cyan-500" />
              <span className="text-sm font-bold text-white">{item.details.contact.tel}</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={16} className="text-cyan-500" />
              <span className="text-sm font-bold text-white truncate">{item.details.contact.email}</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={16} className="text-cyan-500" />
              <span className="text-sm font-bold text-white">{t(item.details.contact.location)}</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 p-10 bg-white/10 border border-white/10 rounded-[2.5rem] flex flex-col justify-center">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">{lang === 'fr' ? 'À propos' : 'About'}</h3>
          <p className="text-base text-slate-200 leading-relaxed">
            {t(item.content)}
          </p>
        </div>
        <div className="lg:col-span-3 relative group overflow-hidden rounded-2xl border border-white/10 min-h-[200px]">
          <img src="/me/photo_musee.png" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" alt="In Situ" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4">
            <span className="text-[8px] font-black uppercase tracking-widest text-white/50">{lang === 'fr' ? 'Contexte' : 'Context'}</span>
            <h3 className="text-xs font-black text-white uppercase tracking-tighter">In Situ</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
