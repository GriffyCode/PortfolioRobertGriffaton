import React from 'react';
import { User, Phone, Mail, MapPin, Award, ExternalLink, FileText, Download } from 'lucide-react';
import type { DetailProps, ProfileItem } from '../../types';

const ProfileDetail: React.FC<DetailProps<ProfileItem>> = ({ item, lang, t }) => {
  return (
    <div className="col-span-12 space-y-8">
      {/* Objective & Description Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-9 flex flex-col gap-6">
          <div className="p-10 border border-cyan-500/20 bg-cyan-500/5 rounded-[2.5rem] relative overflow-hidden group h-auto">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <User size={120} className="text-cyan-500" />
            </div>
            <h3 className="text-xs font-black uppercase tracking-widest text-cyan-500 mb-6">{lang === 'fr' ? 'Objectif 2026' : '2026 Objective'}</h3>
            <p className="text-3xl lg:text-4xl font-black text-white leading-tight uppercase tracking-tighter relative z-10">
              {lang === 'fr' ? "Recherche d'une alternance de 3 ans - Cycle Ingénieur ESIEE Paris." : "Seeking a 3-year apprenticeship - ESIEE Paris Engineering School."}
            </p>
            <div className="mt-8 pt-8 border-t border-cyan-500/10 flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-cyan-500 text-white rounded-full text-[11px] font-black uppercase shadow-lg shadow-cyan-500/20">{lang === 'fr' ? 'Septembre 2026' : 'September 2026'}</div>
              <div className="px-6 py-3 bg-white/5 text-slate-400 border border-white/10 rounded-full text-[11px] font-black uppercase">{lang === 'fr' ? '3 Ans' : '3 Years'}</div>
            </div>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem]">
            <p className="text-sm md:text-base text-slate-300 leading-relaxed whitespace-pre-wrap">
              {t(item.content)}
            </p>
          </div>
        </div>

        <div className="lg:col-span-3 relative group overflow-hidden rounded-[2.5rem] border border-white/5 min-h-[300px]">
          <img src="/me/ImageFond.jpg" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" alt="Robert Griffaton" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-6 left-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{lang === 'fr' ? 'Portrait' : 'Portrait'}</span>
            <h3 className="text-sm font-black text-white uppercase tracking-tighter mt-1">Robert Griffaton</h3>
          </div>
        </div>
      </div>

      {/* Contact Row */}
      <div className="p-8 lg:p-10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-[2.5rem] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full mix-blend-screen pointer-events-none" />
        
        <h3 className="text-xs font-black uppercase tracking-widest text-white/50 mb-8 flex items-center gap-3">
            {lang === 'fr' ? 'Contact & Liens' : 'Contact & Links'}
            <div className="h-px bg-white/10 flex-1" />
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <div className="flex flex-col gap-3 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mb-2">
              <Phone size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{lang === 'fr' ? 'Téléphone' : 'Phone'}</span>
            <a href={`tel:${item.details.contact.tel.replace(/\s+/g, '')}`} className="text-lg font-bold text-white hover:text-cyan-400 transition-colors">
              {item.details.contact.tel}
            </a>
          </div>

          <div className="flex flex-col gap-3 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors overflow-hidden">
            <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mb-2 shrink-0">
              <Mail size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email</span>
            <a href={`mailto:${item.details.contact.email}`} className="text-base font-bold text-white hover:text-cyan-400 transition-colors truncate">
              {item.details.contact.email}
            </a>
          </div>

          <div className="flex flex-col gap-3 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mb-2">
              <MapPin size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{lang === 'fr' ? 'Localisation' : 'Location'}</span>
            <span className="text-lg font-bold text-white">
              {t(item.details.contact.location)}
            </span>
          </div>

          {item.details.contact.linkedIn && (
            <a href={item.details.contact.linkedIn} target="_blank" rel="noreferrer" className="flex flex-col gap-3 p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-3xl hover:bg-cyan-500/20 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center mb-2 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                <ExternalLink size={20} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">{lang === 'fr' ? 'Réseau Professionnel' : 'Professional Network'}</span>
              <span className="text-lg font-bold text-white">
                LinkedIn
              </span>
            </a>
          )}
        </div>
        
        {item.details.cvUrl && (
          <div className="mt-8 flex justify-center lg:justify-start relative z-10">
            <a href={item.details.cvUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-white/5 group">
              <FileText size={18} className="group-hover:text-cyan-600 transition-colors" />
              {lang === 'fr' ? 'Consulter mon CV' : 'View my CV'}
              <Download size={16} className="ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        )}
      </div>

      {/* Objectives Row */}
      {item.details.objectives && (
        <div className="p-10 border border-purple-500/30 bg-purple-500/5 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Award size={100} className="text-purple-500" />
          </div>
          <h3 className="text-xs font-black uppercase tracking-widest text-purple-400 mb-6 flex items-center gap-3">
            {lang === 'fr' ? 'Objectifs (Court, Moyen, Long Terme)' : 'Objectives'}
          </h3>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed relative z-10 font-medium whitespace-pre-wrap">
            {t(item.details.objectives)}
          </p>
        </div>
      )}

      {/* Proudest Achievement Row */}
      {item.details.proudestAchievement && (
        <div className="p-10 border border-amber-500/30 bg-amber-500/5 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Award size={100} className="text-amber-500" />
          </div>
          <h3 className="text-xs font-black uppercase tracking-widest text-amber-500 mb-6 flex items-center gap-3">
            {lang === 'fr' ? 'Focus Réussite : Ce dont je suis le plus fier' : 'Proudest Achievement'}
          </h3>
          <p className="text-lg text-slate-200 leading-relaxed italic relative z-10 font-bold border-l-4 border-amber-500/50 pl-6">
            {t(item.details.proudestAchievement)}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileDetail;
