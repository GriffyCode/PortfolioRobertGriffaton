import React from 'react';
import { Music, Award, Globe, Compass } from 'lucide-react';
import type {  DetailProps, CultureItem  } from '../../types';

const CultureDetail: React.FC<DetailProps<CultureItem>> = ({ item, lang, t }) => {
  return (
    <>
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
      <div className="col-span-12 mt-8 p-8 border border-white/5 bg-white/2 rounded-3xl flex flex-col justify-center items-center">
            <span className="text-xs font-black text-cyan-500 uppercase tracking-widest mb-6">{lang === 'fr' ? 'Loisirs' : 'Hobbies'}</span>
            <div className="flex flex-wrap justify-center gap-12">
              {t(item.details.sports).map((s: string) => <span key={s} className="text-white font-black uppercase text-3xl lg:text-5xl tracking-tighter italic opacity-80">{s}</span>)}
            </div>
      </div>
    </>
  );
};

export default CultureDetail;
