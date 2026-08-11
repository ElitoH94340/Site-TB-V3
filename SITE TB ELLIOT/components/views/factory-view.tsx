'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Séquence rythmo pour le fond (identique à DubbingView)
const rythmoSequence = [
  { track: 1, cue: '68', timecode: '01:22:38:12', width: 'w-64 sm:w-80' },
  { track: 2, cue: '69', timecode: '01:22:40:00', width: 'w-80 sm:w-96' },
  { track: 3, cue: '70', timecode: '01:22:44:15', width: 'w-72 sm:w-[26rem]' },
  { track: 1, cue: '71', timecode: '01:22:48:02', width: 'w-80 sm:w-[32rem]' },
  { track: 2, cue: '72', timecode: '01:22:52:10', width: 'w-56 sm:w-72' },
  { track: 3, cue: '73', timecode: '01:22:56:18', width: 'w-96 sm:w-[34rem]' },
  { track: 1, cue: '74', timecode: '01:23:01:00', width: 'w-68 sm:w-84' },
  { track: 2, cue: '75', timecode: '01:23:05:14', width: 'w-76 sm:w-[26rem]' },
  { track: 3, cue: '76', timecode: '01:23:10:22', width: 'w-64 sm:w-88' },
]

const TABS = [
  {
    id: 'Primaire',
    label: 'Primaire',
    heading: '',
    text: '',
    additionalContent: {
      public: "Élèves en classe de CM1 et CM2",
      modules: [
        {
          title: "Découverte Immersion",
          desc: "Plusieurs séances de travail en co-organisation avec l'enseignant.",
          subDesc: "Expérience déjà menée en Réseau d'Éducation Prioritaire (REP).",
          objectives: [
            "Découvrir une œuvre cinématographique, Histoire des Arts",
            "Étudier le sens d'un texte",
            "Faciliter l'expression orale",
            "Travailler la lecture à voix haute",
            "Travailler le rythme et la fluence",
            "Participer à une lecture dialoguée",
            "Développer la confiance en soi",
            "Travailler en groupe : Enseignement moral et civique EMC",
            "Créer une œuvre commune"
          ]
        }
      ],
      ctaButton: "Découvrir nos offres"
    },
    videos: ['mf5Myk1WICg', '01iF8VGlwV8'],
  },
  {
    id: 'Collège',
    label: 'Collège',
    heading: '',
    text: '',
    additionalContent: {
      public: "Collégiens",
      modules: [
        {
          title: "Découverte & Adaptation",
          desc: "Plusieurs séances de travail en co-organisation avec les professeurs de Français.",
          subDesc: "",
          objectives: [
            "Découvrir une œuvre cinématographique, Histoire des Arts",
            "S’entraîner à la lecture : rythme, intonation, fluence",
            "S’entraîner à la lecture dialoguée",
            "Faciliter l’expression orale",
            "Développer la confiance en soi",
            "Participer à une lecture dialoguée",
            "Créer une œuvre commune",
            "Travailler à la traduction de dialogues"
          ]
        }
      ],
      ctaButton: "Découvrir nos offres"
    },
    videos: ['CiTiIp-AMB4', '01iF8VGlwV8'],
  },
  {
    id: 'Lycée',
    label: 'Lycée',
    heading: '',
    text: '',
    additionalContent: {
      public: "Lycéens",
      modules: [
        {
          prefix: "Module 1",
          title: "Découverte Immersion/ adaptation",
          desc: "Une préparation ludique pour les lycéens.",
          subDesc: "Plusieurs séances de travail en co-organisation avec l'enseignant.",
          objectives: [
            "Découvrir une œuvre cinématographique, Histoire des Arts",
            "S’entraîner à la lecture : rythme, intonation, fluence",
            "Faciliter l’expression orale",
            "Créer une œuvre commune"
          ]
        },
        {
          prefix: "Module 2",
          title: "Découverte Immersion/ adaptation",
          desc: "Plusieurs séances de travail en co- organisation avec les professeurs d’anglais et de français",
          objectives: [
            "Travailler à la traduction de dialogues et à leur adaptation",
            "Découvrir un métier",
            "Créer une œuvre commune"
          ]
        },
        {
          prefix: "Module 3",
          title: "Préparation au grand oral du bac",
          desc: "Une préparation ludique reservée au classes de Terminale",
          objectives: [
            "Travailler la posture",
            "Gagner en aisance à l’oral",
            "Améliorer la diction et la fluence",
            "Placer sa voix pour parler et se faire entendre"
          ]
        },
        {
          prefix: "Module 4",
          title: "Classes avec option cinéma",
          desc: "Découvrir un métier de la post production : adaptateur dialoguiste",
          subDesc: "Création d'une œuvre commune finale.",
          objectives: [
            "Explorer le jeu d'acteur et l'interprétation face au micro",
            "S'entraîner à la lecture rigoureuse de textes et de scripts",
            "Maîtriser la synchronisation labiale et rythmique (rythmo)",
            "Développer l'expressivité vocale et l'intonation juste",
            "Comprendre les exigences du doublage en conditions professionnelles",
            "Créer et interpréter une œuvre commune finale"
          ]
        }
      ],
      ctaButton: "Découvrir nos offres"
    },
    videos: ['boroSb-TslU', 'VvkDpYYPAI4'],
  },
]

export function FactoryView() {
  const [active, setActive] = useState(TABS[0].id)
  const [videoIndex, setVideoIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [moduleIndex, setModuleIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')

  const current = TABS.find((t) => t.id === active) ?? TABS[0]
  const currentModule = current.additionalContent?.modules[moduleIndex]

  useEffect(() => {
    setVideoIndex(0)
    setIsVideoPlaying(false)
    setModuleIndex(0)
    setSlideDirection('right')
  }, [active])

  const nextVideo = () => setVideoIndex((prev) => (prev + 1) % current.videos.length)
  const prevVideo = () => setVideoIndex((prev) => (prev - 1 + current.videos.length) % current.videos.length)

  const totalModules = current.additionalContent?.modules?.length ?? 0
  const hasMultipleModules = totalModules > 1

  const nextModule = () => {
    setSlideDirection('right')
    setModuleIndex((prev) => (prev + 1) % totalModules)
  }
  const prevModule = () => {
    setSlideDirection('left')
    setModuleIndex((prev) => (prev - 1 + totalModules) % totalModules)
  }

  const isPrimaryOrCollege = active === 'Primaire' || active === 'Collège'
  const moduleHeightClass = isPrimaryOrCollege 
    ? "h-[46.5rem] sm:h-[38.5rem]" 
    : "h-[40.5rem] sm:h-[33.5rem]"

  return (
    <section className="relative min-h-screen w-full bg-neutral-950 text-neutral-50 overflow-hidden pt-32 pb-24 select-none">
      <style jsx>{`
        @keyframes rythmoScroll { 
          0% { transform: translate3d(0, 0, 0); } 
          100% { transform: translate3d(-50%, 0, 0); } 
        }
        .animate-rythmo-scroll { 
          animation: rythmoScroll 28s linear infinite; 
          will-change: transform; 
        }
        @keyframes slideFromRight { 
          0% { opacity: 0; transform: translateX(30px); } 
          100% { opacity: 1; transform: translateX(0); } 
        }
        @keyframes slideFromLeft { 
          0% { opacity: 0; transform: translateX(-30px); } 
          100% { opacity: 1; transform: translateX(0); } 
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-right { animation: slideFromRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-left { animation: slideFromLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex items-center opacity-[0.15] blur-[3px]">
        <div className="absolute inset-x-0 h-[34rem] bg-neutral-900/30 border-y border-neutral-800/40 flex flex-col justify-between py-2">
          <div className="w-full border-t border-dashed border-white/30"></div>
          <div className="w-full border-t border-dashed border-neutral-700/30"></div>
          <div className="w-full border-t border-dashed border-white/30"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-20 space-y-28">
          <div className="h-px w-full bg-neutral-500"></div>
          <div className="h-px w-full bg-neutral-500"></div>
        </div>
        <div className="absolute top-0 bottom-0 left-[25%] w-0.5 bg-red-600/80 z-20 flex flex-col items-center justify-center">
          <span className="text-red-600 font-normal text-[2.5rem] leading-none">×</span>
        </div>
        <div className="flex w-max animate-rythmo-scroll px-[25vw] relative z-10 items-center">
          {[1, 2].map((loopIndex) => (
            <div key={loopIndex} className="flex items-center gap-12 sm:gap-20">
              {rythmoSequence.map((item, index) => {
                let trackTransform = 'translate-y-0'
                if (item.track === 1) trackTransform = '-translate-y-36 sm:-translate-y-48'
                if (item.track === 3) trackTransform = 'translate-y-36 sm:translate-y-48'
                return (
                  <div key={`${loopIndex}-${index}`} className={`flex items-center gap-2.5 shrink-0 transition-transform ${trackTransform}`}>
                    <div className="px-1.5 py-0.5 border border-red-500/70 bg-red-950/60 rounded-[3px] font-mono text-[10px] sm:text-xs text-red-300 tracking-wider shrink-0 text-center">
                      {item.cue}
                    </div>
                    <div className={`h-11 sm:h-14 bg-neutral-800/90 rounded-md ${item.width} border border-neutral-700/70 shadow-md shrink-0`} />
                    <div className="px-1.5 py-0.5 border border-red-500/70 bg-red-950/60 rounded-[3px] font-mono text-[9px] sm:text-[11px] text-red-300 tracking-wider shrink-0">
                      {item.timecode}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8 relative z-10 animate-fade-in-up">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">La fabrique à doublage</p>
          <h1 className="text-balance font-serif italic text-3xl sm:text-5xl tracking-tight">Le doublage : un outil d&apos;enseignement</h1>
        </header>

        <div className="mt-12 flex justify-center gap-3">
          {TABS.map((tab) => {
            const isActive = tab.id === active
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={cn(
                  'rounded-full px-6 py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer',
                  isActive
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-white/10'
                )}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="mt-10 relative w-full p-6 sm:p-10">
          {/* MIRE COMPLÈTE */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-neutral-400/70 pointer-events-none z-20" />
          <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-neutral-400/70 pointer-events-none z-20" />
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-neutral-400/70 pointer-events-none z-20" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-neutral-400/70 pointer-events-none z-20" />
          
          <div className="absolute top-0 left-1/2 w-px h-3 bg-neutral-500/50 -translate-x-1/2 pointer-events-none z-20" />
          <div className="absolute bottom-0 left-1/2 w-px h-3 bg-neutral-500/50 -translate-x-1/2 pointer-events-none z-20" />
          <div className="absolute top-1/2 left-0 w-3 h-px bg-neutral-500/50 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-1/2 right-0 w-3 h-px bg-neutral-500/50 -translate-y-1/2 pointer-events-none z-20" />

          <div className="relative z-10 bg-neutral-900/60 px-6 sm:px-10 pt-12 sm:pt-16 pb-6 sm:pb-8 mx-auto max-w-4xl backdrop-blur-md border border-white/5">
            {/* Vidéo */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-10 sm:w-14 shrink-0 flex justify-center">
                {current.videos.length > 1 && (
                  <button onClick={prevVideo} className="text-white opacity-40 hover:opacity-100 transition-opacity p-1 sm:p-2 cursor-pointer">
                    <ChevronLeft size={48} strokeWidth={1} />
                  </button>
                )}
              </div>
              <div className="flex-1 relative w-full aspect-video rounded-[2rem] border border-white/10 bg-neutral-900/40 p-2 sm:p-3 shadow-2xl backdrop-blur-md">
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 flex items-center justify-center cursor-pointer group/vid" onClick={() => setIsVideoPlaying(true)}>
                  {!isVideoPlaying ? (
                    <>
                      <img src={`https://i.ytimg.com/vi/${current.videos[videoIndex]}/hqdefault.jpg`} alt="Lancer la vidéo" className="absolute inset-0 h-full w-full object-cover opacity-80" />
                      <div className="absolute inset-0 bg-black/20" />
                      <button className="relative z-10 flex h-16 w-24 items-center justify-center rounded-2xl bg-red-600 shadow-xl transition-transform duration-300 group-hover/vid:scale-110">
                        <svg className="h-8 w-8 text-white fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </button>
                    </>
                  ) : (
                    <iframe className="absolute inset-0 h-full w-full bg-black" src={`https://www.youtube.com/embed/${current.videos[videoIndex]}?autoplay=1`} allowFullScreen />
                  )}
                </div>
              </div>
              <div className="w-10 sm:w-14 shrink-0 flex justify-center">
                {current.videos.length > 1 && (
                  <button onClick={nextVideo} className="text-white opacity-40 hover:opacity-100 transition-opacity p-1 sm:p-2 cursor-pointer">
                    <ChevronRight size={48} strokeWidth={1} />
                  </button>
                )}
              </div>
            </div>
            
            <div className="mt-8 w-full mx-auto">
              {current.additionalContent && currentModule && (
                <div className="mt-6 w-full">
                  <div className="text-center pb-6">
                    <h3 className="font-serif italic text-3xl sm:text-5xl tracking-tight text-white mb-2">Public visé</h3>
                    <p className="text-xs sm:text-sm text-neutral-400 italic">{current.additionalContent.public}</p>
                  </div>

                  <div className="border-t border-white/10" />

                  {/* ZONE CARROUSEL MODULES */}
                  <div className="py-8 flex items-center gap-2 sm:gap-4 w-full">
                    <div className="w-10 sm:w-14 shrink-0 flex justify-center">
                      {hasMultipleModules && (
                        <button onClick={prevModule} className="text-white opacity-40 hover:opacity-100 transition-opacity p-1 sm:p-2 cursor-pointer">
                          <ChevronLeft size={48} strokeWidth={1} />
                        </button>
                      )}
                    </div>

                    <div 
                      key={moduleIndex} 
                      className={cn(
                        "flex-1 flex flex-col justify-start pt-2 overflow-hidden", 
                        moduleHeightClass,
                        slideDirection === 'right' ? 'animate-slide-right' : 'animate-slide-left'
                      )}
                    >
                      <div className="text-center mb-6">
                        {currentModule.prefix && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">{currentModule.prefix}</p>}
                        <h3 className="font-serif italic text-3xl sm:text-5xl tracking-tight text-white mb-2">{currentModule.title}</h3>
                        
                        <div className="h-16 sm:h-20 flex flex-col justify-center items-center px-4">
                          {currentModule.desc && <p className="text-sm text-neutral-300 max-w-lg leading-tight">{currentModule.desc}</p>}
                          {currentModule.subDesc && <p className="text-sm text-neutral-300 max-w-lg mt-1 leading-tight">{currentModule.subDesc}</p>}
                        </div>
                      </div>

                      <div className="text-left pt-2">
                        <h3 className="text-xs sm:text-sm text-red-500 italic mb-4 text-center">objectifs</h3>
                        <div className="space-y-4 sm:space-y-5 max-w-xl mx-auto">
                          {currentModule.objectives.map((obj, i) => (
                            <div key={i} className="flex items-center gap-3 sm:gap-4 group cursor-default">
                              <div className="relative flex items-center justify-end shrink-0 w-6 h-6">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white transition-colors duration-300 group-hover:bg-red-500" />
                              </div>
                              <div className="flex items-center shrink-0 w-12 sm:w-20"><div className="w-full h-px bg-neutral-700/80"></div></div>
                              <p className="text-xs sm:text-sm text-neutral-300 leading-snug pt-0.5 group-hover:text-white transition-colors">{obj}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="w-10 sm:w-14 shrink-0 flex justify-center">
                      {hasMultipleModules && (
                        <button onClick={nextModule} className="text-white opacity-40 hover:opacity-100 transition-opacity p-1 sm:p-2 cursor-pointer">
                          <ChevronRight size={48} strokeWidth={1} />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="pt-6 pb-2 border-t border-white/10 flex justify-center">
                    <button className="px-8 py-3 rounded-full border border-white/20 bg-white/[0.08] text-neutral-200 font-medium text-xs sm:text-sm tracking-wide hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 cursor-pointer">
                      {current.additionalContent.ctaButton}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}