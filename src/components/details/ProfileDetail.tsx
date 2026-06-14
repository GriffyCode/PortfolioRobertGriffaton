import React from 'react';
import { User, Phone, Mail, MapPin, Award } from 'lucide-react';
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
            {item.details.contact.linkedIn && (
              <div className="flex items-center gap-4 mt-2">
                <a href={item.details.contact.linkedIn} target="_blank" rel="noreferrer" className="text-xs font-bold text-cyan-400 hover:text-white uppercase tracking-widest border-b border-cyan-500/30 pb-1 transition-colors">
                  LinkedIn
                </a>
              </div>
            )}
            {item.details.cvUrl && (
              <div className="pt-4 mt-4 border-t border-white/10">
                <a href={item.details.cvUrl} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all">
                  {lang === 'fr' ? 'Télécharger CV (PDF)' : 'Download CV (PDF)'}
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="lg:col-span-6 flex flex-col gap-8">

          {item.details.objectives && (
            <div className="p-8 bg-purple-500/5 border border-purple-500/20 rounded-[2.5rem]">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-purple-400 mb-4">{lang === 'fr' ? 'Objectifs (Court, Moyen, Long Terme)' : 'Objectives'}</h3>
              <p className="text-sm text-slate-300 leading-relaxed italic whitespace-pre-wrap">{t(item.details.objectives)}</p>
            </div>
          )}
        </div>
        <div className="lg:col-span-3 flex flex-col gap-8">
          <div className="relative group overflow-hidden rounded-2xl border border-white/10 flex-1 min-h-[200px]">
            <img src="/me/photo_musee.png" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" alt="In Situ" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[8px] font-black uppercase tracking-widest text-white/50">{lang === 'fr' ? 'Contexte' : 'Context'}</span>
              <h3 className="text-xs font-black text-white uppercase tracking-tighter">In Situ</h3>
            </div>
          </div>
        </div>
      </div>

      {item.details.proudestAchievement && (
        <div className="p-10 border border-amber-500/30 bg-amber-500/5 rounded-[2.5rem] mt-8 relative overflow-hidden">
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
