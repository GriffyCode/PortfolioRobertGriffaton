import React from 'react';
import { Music, Award, Globe, Compass } from 'lucide-react';
import type {  DetailProps, CultureItem  } from '../../types';

const CultureDetail: React.FC<DetailProps<CultureItem>> = ({ item, lang, t }) => {
  return (
    <>
      <div className="col-span-12 mb-8">
        <p className="text-xl text-slate-300 max-w-4xl leading-relaxed italic border-l-4 border-cyan-500/50 pl-6 py-2">
          {t(item.content)}
        </p>
      </div>
      <div className="col-span-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="p-8 bg-white/2 border border-white/5 rounded-3xl">
            <Music className="text-cyan-500 mb-4" size={32} />
            <h3 className="text-lg font-black text-white uppercase mb-2">{lang === 'fr' ? 'Musique' : 'Music'}</h3>
            <p className="text-sm text-slate-400">{t(item.details.music)}</p>
        </div>
        <div className="p-8 bg-white/2 border border-white/5 rounded-3xl">
            <Award className="text-cyan-500 mb-4" size={32} />
            <h3 className="text-lg font-black text-white uppercase mb-2">Hackathons</h3>
            <p className="text-sm text-slate-400">{t(item.details.hackathons)}</p>
        </div>
        <div className="p-8 bg-white/2 border border-white/5 rounded-3xl">
            <Globe className="text-cyan-500 mb-4" size={32} />
            <h3 className="text-lg font-black text-white uppercase mb-2">{lang === 'fr' ? 'Langues' : 'Languages'}</h3>
            <div className="space-y-2">
              {t(item.details.langs).map((l: string) => <p key={l} className="text-sm text-slate-400 font-bold">{l}</p>)}
            </div>
        </div>
        <div className="p-8 bg-white/2 border border-white/5 rounded-3xl">
            <Compass className="text-cyan-500 mb-4" size={32} />
            <h3 className="text-lg font-black text-white uppercase mb-2">{lang === 'fr' ? 'Passeport Culturel' : 'Cultural Passport'}</h3>
            <div className="space-y-2">
              {t(item.details.passeportCulturel).map((p: string) => <p key={p} className="text-sm text-slate-400 font-bold">{p}</p>)}
            </div>
        </div>
      </div>
      <div className="col-span-12 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {item.details.techWatch && (
          <div className="p-8 border border-purple-500/20 bg-purple-500/5 rounded-3xl">
            <h3 className="text-[10px] font-black text-purple-400 uppercase mb-4 tracking-widest">{lang === 'fr' ? 'Veille Technologique' : 'Tech Watch'}</h3>
            <div className="space-y-3">
              {t(item.details.techWatch).map((tw: string) => <p key={tw} className="text-sm text-slate-300 leading-relaxed italic border-l-2 border-purple-500/30 pl-3">{tw}</p>)}
            </div>
          </div>
        )}
        {item.details.pedagogicalOutings && (
          <div className="p-8 border border-cyan-500/20 bg-cyan-500/5 rounded-3xl">
            <h3 className="text-[10px] font-black text-cyan-400 uppercase mb-4 tracking-widest">{lang === 'fr' ? 'Sorties Pédagogiques' : 'Pedagogical Outings'}</h3>
            <div className="space-y-3">
              {t(item.details.pedagogicalOutings).map((out: string) => <p key={out} className="text-sm text-slate-300 leading-relaxed italic border-l-2 border-cyan-500/30 pl-3">{out}</p>)}
            </div>
          </div>
        )}
        {item.details.international && (
          <div className="p-8 border border-white/10 bg-white/5 rounded-3xl">
            <h3 className="text-[10px] font-black text-white uppercase mb-4 tracking-widest">{lang === 'fr' ? 'Ouverture à l\'International' : 'International Exposure'}</h3>
            <p className="text-sm text-slate-300 leading-relaxed italic">{t(item.details.international)}</p>
          </div>
        )}
      </div>

      <div className="col-span-12 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="p-8 border border-white/5 bg-white/2 rounded-3xl flex flex-col justify-center items-center">
            <span className="text-xs font-black text-cyan-500 uppercase tracking-widest mb-6">{lang === 'fr' ? 'Loisirs' : 'Hobbies'}</span>
            <div className="flex flex-col gap-4 text-center">
              {t(item.details.sports).map((s: string) => <span key={s} className="text-white font-black uppercase text-xl lg:text-2xl tracking-tighter italic opacity-80">{s}</span>)}
            </div>
        </div>
        <div className="relative group overflow-hidden rounded-3xl border border-white/10 min-h-[250px]">
          <img src="/me/photo_musee.png" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" alt="In Situ" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-6 left-6">
            <span className="text-[8px] font-black uppercase tracking-widest text-cyan-400">{lang === 'fr' ? 'Contexte' : 'Context'}</span>
            <h3 className="text-lg font-black text-white uppercase tracking-tighter">In Situ</h3>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-3xl border border-white/10 min-h-[250px]">
          <img src="/culture/randonnee.jpg" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" alt="Randonnée" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-6 left-6">
            <span className="text-[8px] font-black uppercase tracking-widest text-cyan-400">Immersion</span>
            <h3 className="text-lg font-black text-white uppercase tracking-tighter">{lang === 'fr' ? 'Randonnée' : 'Hiking'}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CultureDetail;
