'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FormulaFrame } from '@/components/formula-frame'
import { FORMULAS } from '@/lib/formulas'
import { withBasePath } from '@/lib/paths'

const HEADER_PHOTOS = [
  '/adultes-souriants.png',
  '/Mardeuil 2018.png',
  '/sourires-enfants.jpg',
]

export function DubbingView() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isVideo1Playing, setIsVideo1Playing] = useState(false)
  const [isHowItWorksVideoPlaying, setIsHowItWorksVideoPlaying] = useState(false)

  return (
    <section className="relative min-h-screen w-full bg-neutral-950 text-neutral-50 overflow-hidden pt-20 pb-24 select-none">
      
      {/* Animations CSS & Stabilisation rendu GPU */}
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-text-sweep {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; box-shadow: 0 0 10px rgba(220, 38, 38, 0.4); }
          50% { opacity: 1; box-shadow: 0 0 20px rgba(220, 38, 38, 0.8); }
        }
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .gpu-layer {
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
          transform: translateZ(0);
        }
      `}</style>

      {/* CONTENEUR PRINCIPAL HAUT */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 pt-12 sm:px-8 w-full">
        
        {/* HEADER */}
        <header className="text-center animate-text-sweep">
          <p className="mb-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
            Doublage pour tous
          </p>
          <h1 className="text-balance font-serif italic text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight drop-shadow-md">
            Une offre ludique
          </h1>
        </header>

        {/* 3 PHOTOS */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 animate-text-sweep" style={{ animationDelay: '200ms' }}>
          {HEADER_PHOTOS.map((photo, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full aspect-video rounded-2xl border border-white/10 bg-neutral-900/40 p-2 shadow-xl backdrop-blur-md overflow-hidden">
                <img 
                  src={withBasePath(photo)} 
                  alt={`Animation ${index + 1}`} 
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>

        {/* TEXTE EXPLICATIF */}
        <div className="mx-auto mt-12 max-w-2xl text-center animate-text-sweep" style={{ animationDelay: '400ms' }}>
          <p className="text-pretty text-base leading-relaxed text-neutral-300">
            Plongez dans l&apos;univers étonnant du doublage et vivez cette expérience unique dans les conditions d&apos;un véritable studio.
            <br /><br />
            Mairies, institutions, entreprises publiques et privées, nous vous proposons différentes animations tous publics, adaptées à vos événements, dans des lieux dédiés ou sous un barnum.
          </p>
        </div>

        {/* VIDÉO PRINCIPALE + OBJECTIFS */}
        <div className="mt-14 animate-text-sweep" style={{ animationDelay: '600ms' }}>
          <div className="relative w-full rounded-[2rem] border border-white/10 bg-neutral-900/40 p-2 sm:p-3 shadow-2xl backdrop-blur-md">
            <div 
              className="relative w-full aspect-video overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 flex items-center justify-center cursor-pointer group"
              onClick={() => setIsVideoPlaying(true)}
            >
              {!isVideoPlaying ? (
                <>
                  <img 
                    src="https://i.ytimg.com/vi/ejoMCZcqU_s/hqdefault.jpg" 
                    alt="Présentation Vidéo" 
                    className="absolute inset-0 h-full w-full object-cover opacity-80 md:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-transparent" />
                  <button 
                    className="relative z-10 flex h-14 w-20 sm:h-16 sm:w-24 items-center justify-center rounded-xl sm:rounded-2xl bg-red-600 shadow-xl transition-transform duration-300 group-hover:scale-110"
                    aria-label="Lancer la vidéo"
                  >
                    <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </>
              ) : (
                <iframe
                  className="absolute top-0 left-0 h-full w-full bg-black md:scale-105"
                  src="https://www.youtube.com/embed/ejoMCZcqU_s?autoplay=1&rel=0"
                  title="Lecteur vidéo YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            
            <div className="py-6 px-4 sm:px-6 text-center">
              <h3 className="font-serif italic text-2xl sm:text-3xl tracking-tight text-neutral-100 drop-shadow-sm mb-4">
                Objectifs
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto">
                <p className="text-center leading-relaxed">
                  <span className="text-white/50 mr-2">•</span>Donner une dimension festive et cinématographique à un événement
                </p>
                <p className="text-center leading-relaxed">
                  <span className="text-white/50 mr-2">•</span>Fédérer un groupe de collaborateurs
                </p>
              </div>
            </div>
          </div>

          {/* TITRE INTERMÉDIAIRE */}
          <h3 className="mt-12 text-center font-serif italic text-2xl sm:text-3xl tracking-tight text-neutral-100 drop-shadow-sm">
            S&apos;amuser à doubler
          </h3>

          {/* VIDÉO S'AMUSER À DOUBLER */}
          <div className="mt-8 relative w-full rounded-[2rem] border border-white/10 bg-neutral-900/40 p-2 sm:p-3 shadow-2xl backdrop-blur-md">
            <div 
              className="relative w-full aspect-video overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 flex items-center justify-center cursor-pointer group"
              onClick={() => setIsVideo1Playing(true)}
            >
              {!isVideo1Playing ? (
                <>
                  <img 
                    src="https://i.ytimg.com/vi/573IoaBcqlU/hqdefault.jpg" 
                    alt="S'amuser à doubler" 
                    className="absolute inset-0 h-full w-full object-cover opacity-80 md:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-transparent" />
                  <button 
                    className="relative z-10 flex h-12 w-16 items-center justify-center rounded-xl bg-red-600 shadow-xl transition-transform duration-300 group-hover:scale-110"
                    aria-label="Lancer la vidéo"
                  >
                    <svg className="h-6 w-6 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </>
              ) : (
                <iframe
                  className="absolute top-0 left-0 h-full w-full bg-black md:scale-105"
                  src="https://www.youtube.com/embed/573IoaBcqlU?autoplay=1&rel=0"
                  title="S'amuser à doubler"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

          {/* COMMENT ÇA MARCHE */}
          <div className="mt-16 relative w-full p-8 sm:p-12 overflow-hidden bg-neutral-950/30 backdrop-blur-[2px]">
            {/* 4 Coins de visée */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-neutral-400/70 pointer-events-none" />
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-neutral-400/70 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-neutral-400/70 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-neutral-400/70 pointer-events-none" />

            {/* Réticules et repères de centrage sur les bords */}
            <div className="absolute top-1/2 left-0 w-3 h-px bg-neutral-500/50 -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-3 h-px bg-neutral-500/50 -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-0 left-1/2 w-px h-3 bg-neutral-500/50 -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 w-px h-3 bg-neutral-500/50 -translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto pt-6 pb-2">
              <div className="text-center mb-10 relative">
                <h3 className="font-serif italic text-3xl sm:text-5xl tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] mb-3">
                  Comment ça marche ?
                </h3>
                <p className="text-xs sm:text-sm text-red-500 italic">
                  Le déroulé est identique pour l&apos;immersion, l&apos;immersion filmée ou la captation
                </p>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {[
                  { num: '1', text: 'Prérequis : être lecteur.' },
                  { num: '2', text: 'Plus de 200 extraits de films cultes sont à votre disposition, avec différents degrés de difficulté.' },
                  { num: '3', text: 'Vous choisissez le film, l\'extrait et le personnage.' },
                  { num: '4', text: 'Vous vous entraînez.' },
                  { num: '5', text: 'Quand vous êtes prêts, vous jouez la scène, que vous soyez seul(e) ou à plusieurs.' }
                ].map((step) => (
                  <div key={step.num} className="flex items-center gap-3 sm:gap-4 group cursor-default">
                    <div className="relative flex items-center justify-end shrink-0 w-6 h-6">
                      <span className="absolute font-serif italic text-lg sm:text-xl text-white transition-all duration-300 group-hover:opacity-0 group-hover:scale-50">
                        {step.num}
                      </span>
                      <div className="absolute flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-50">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse-glow" />
                      </div>
                    </div>
                    
                    <div className="flex items-center shrink-0 w-12 sm:w-20">
                      <div className="w-full h-px bg-neutral-700/80"></div>
                    </div>

                    <p className="text-base text-neutral-300 leading-snug pt-0.5 transition-colors duration-300 group-hover:text-white">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MATÉRIEL */}
          <div className="mt-8 relative w-full rounded-[2rem] border border-white/10 bg-neutral-900/40 p-2 sm:p-3 shadow-2xl backdrop-blur-md">
            <div 
              className="relative w-full aspect-video overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 flex items-center justify-center cursor-pointer group"
              onClick={() => setIsHowItWorksVideoPlaying(true)}
            >
              {!isHowItWorksVideoPlaying ? (
                <>
                  <img 
                    src="https://i.ytimg.com/vi/gl0dyMWsEo0/hqdefault.jpg"
                    alt="Comment ça marche"
                    className="absolute inset-0 h-full w-full object-cover opacity-80 md:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-transparent" />
                  <button 
                    className="relative z-10 flex h-14 w-20 sm:h-16 sm:w-24 items-center justify-center rounded-xl sm:rounded-2xl bg-red-600 shadow-xl transition-transform duration-300 group-hover:scale-110"
                    aria-label="Lancer la vidéo"
                  >
                    <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </>
              ) : (
                <iframe
                  className="absolute top-0 left-0 h-full w-full bg-black md:scale-105"
                  src="https://www.youtube.com/embed/gl0dyMWsEo0?autoplay=1&rel=0"
                  title="Comment ça marche"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            <div className="py-6 px-4 sm:px-6 text-center">
              <h3 className="font-serif italic text-2xl sm:text-3xl tracking-tight text-neutral-100 drop-shadow-sm mb-4">
                Notre matériel
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
                Ordinateur, logiciel de doublage professionnel, vidéoprojecteur, écran de projection, écran plasma, caméras, micros, barre de doublage.
              </p>
            </div>
          </div>

        </div>

      </div>

      <div className="relative z-10 mx-auto mt-20 w-full max-w-7xl px-4 py-12 sm:px-8" id="formulas">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-2xl tracking-tight text-neutral-100 italic drop-shadow-sm sm:text-3xl">
            Nos formules
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-400">
            Trois expériences, un même déroulé. Cliquez pour découvrir le détail de chaque formule.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3 lg:gap-12">
          {FORMULAS.map((formula) => (
            <Link
              key={formula.id}
              href={`/formules#${formula.id}`}
              className="block h-full cursor-pointer no-underline"
            >
              <FormulaFrame>
                <div className="flex h-full flex-col">
                  <div className="mb-4 flex min-h-[3.2rem] items-center justify-center border-b border-white/10 pb-3 text-center transition-colors duration-300 group-hover:border-transparent">
                    <h3 className="font-serif text-2xl tracking-tight text-neutral-100 italic drop-shadow-sm sm:text-3xl">
                      {formula.title}
                    </h3>
                  </div>
                  <p className="flex-1 text-center text-sm leading-relaxed text-neutral-300">
                    {formula.summary}
                  </p>
                  <p className="mt-6 text-center text-xs font-medium tracking-[0.2em] text-red-500 uppercase">
                    Découvrir
                  </p>
                </div>
              </FormulaFrame>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}