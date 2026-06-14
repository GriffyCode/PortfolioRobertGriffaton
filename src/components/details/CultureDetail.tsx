import React, { useState } from 'react';
import { Music, Award, Globe, Compass } from 'lucide-react';
import type {  DetailProps, CultureItem  } from '../../types';

const CultureDetail: React.FC<DetailProps<CultureItem>> = ({ item, lang, t }) => {
  const [cnamImageIndex, setCnamImageIndex] = useState(0);
  const cnamImages = ['/me/photo_about.jpeg', '/me/photo_musee.png'];
  const cnamTitles = ['Musée du CNAM', "Musée d'Orsay"];

  return (
    <>
      <div className="col-span-12 mb-8">
        <p className="text-base md:text-lg text-slate-300 max-w-4xl leading-relaxed italic border-l-4 border-cyan-500/50 pl-6 py-2">
          {t(item.content)}
        </p>
      </div>

      {/* Langues */}
      <div className="col-span-12 mb-8">
        <div className="p-8 bg-white/2 border border-white/5 rounded-3xl flex flex-col md:flex-row gap-6 items-center">
            <Globe className="text-cyan-500 shrink-0" size={32} />
            <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1 w-full">
              <h3 className="text-lg font-black text-white uppercase whitespace-nowrap">{lang === 'fr' ? 'Langues :' : 'Languages:'}</h3>
              <div className="flex flex-wrap gap-2">
                {t(item.details.langs).map((l: string) => <span key={l} className="text-sm px-3 py-1 bg-white/5 rounded-full text-slate-300 font-bold">{l}</span>)}
              </div>
            </div>
        </div>
      </div>

      {/* Photos & Loisirs Grid */}
      <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Photo 1 : Orchestre / Musique */}
        <div className="relative group overflow-hidden rounded-3xl border border-white/10 aspect-square w-full max-w-sm mx-auto">
          <img src="/culture/orchestre.jpg" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:scale-105" alt="Orchestre" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-transparent opacity-90" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-2 flex items-center gap-2">
              <Music size={14} /> {lang === 'fr' ? 'Conservatoire' : 'Conservatory'}
            </span>
            <h3 className="text-lg font-black text-white uppercase tracking-tight leading-tight">{t(item.details.music)}</h3>
          </div>
        </div>

        {/* Photo 2 : Musée du CNAM (Carousel) */}
        <div 
          className="relative group overflow-hidden rounded-3xl border border-white/10 aspect-square w-full max-w-sm mx-auto cursor-pointer"
          onClick={() => setCnamImageIndex((prev) => (prev + 1) % cnamImages.length)}
        >
          <img src={cnamImages[cnamImageIndex]} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:scale-105" alt="Passeport Culturel" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-transparent opacity-90" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-2 flex items-center justify-between">
              Passeport Culturel
              <span className="text-white/50 text-[8px] tracking-normal bg-black/50 px-2 py-0.5 rounded-full">{cnamImageIndex + 1}/{cnamImages.length}</span>
            </span>
            <h3 className="text-lg font-black text-white uppercase tracking-tight">{cnamTitles[cnamImageIndex]}</h3>
          </div>
        </div>

        {/* Photo 3 : Randonnée / Sports */}
        <div className="relative group overflow-hidden rounded-3xl border border-white/10 aspect-square w-full max-w-sm mx-auto">
          <img src="/culture/randonnee.jpg" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:scale-105" alt="Randonnée" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-transparent opacity-90" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-3 block">{lang === 'fr' ? 'Sports & Loisirs' : 'Sports & Hobbies'}</span>
            <div className="flex flex-col gap-2">
              {t(item.details.sports).map((s: string) => <span key={s} className="text-sm font-bold text-white tracking-tight">{s}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* Ouverture Professionnelle & Événements */}
      <div className="col-span-12 mt-12 pt-12 border-t border-white/5">
        <h3 className="text-xl font-black text-white uppercase tracking-widest mb-8">{lang === 'fr' ? 'Ouverture Professionnelle' : 'Professional Exposure'}</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Award size={16} /> Hackathons & Événements
              </h4>
              <p className="text-sm text-slate-300">{t(item.details.hackathons)}</p>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Compass size={16} /> {lang === 'fr' ? 'Passeport Culturel' : 'Cultural Passport'}
              </h4>
              <ul className="list-none space-y-2 text-sm text-slate-300">
                {t(item.details.passeportCulturel).map((p: string) => (
                  <li key={p} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-cyan-500/50" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            {item.details.techWatch && (
              <div>
                <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-3">{lang === 'fr' ? 'Veille Technologique' : 'Tech Watch'}</h4>
                <ul className="list-none space-y-2 text-sm text-slate-300">
                  {t(item.details.techWatch).map((tw: string) => (
                    <li key={tw} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-cyan-500/50" />
                      {tw}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {item.details.pedagogicalOutings && (
              <div>
                <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-3">{lang === 'fr' ? 'Sorties Pédagogiques' : 'Pedagogical Outings'}</h4>
                <ul className="list-none space-y-2 text-sm text-slate-300">
                  {t(item.details.pedagogicalOutings).map((out: string) => (
                    <li key={out} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-cyan-500/50" />
                      {out}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.details.international && (
              <div>
                <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-3">{lang === 'fr' ? 'Ouverture à l\'International' : 'International Exposure'}</h4>
                <p className="text-sm text-slate-300">{t(item.details.international)}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CultureDetail;
