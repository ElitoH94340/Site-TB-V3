'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const TABS = [
  {
    id: 'Primaire',
    label: 'Primaire',
    additionalContent: {
      public: '<strong class="text-white font-semibold">Public visé :</strong> Élèves en classe de CM1 et CM2',
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
    videos: ['h9PUPFVQnCw'],
  },
  {
    id: 'Collège',
    label: 'Collège',
    additionalContent: {
      public: '<strong class="text-white font-semibold">Public visé :</strong> Collégiens',
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
    videos: ['gHUpG7URmts'],
  },
  {
    id: 'Lycée',
    label: 'Lycéens',
    additionalContent: {
      public: '<strong class="text-white font-semibold">Public visé :</strong> Lycéens',
      modules: [
        {
          prefix: "Module 1",
          title: "Découverte Immersion/ adaptation",
          desc: "Une préparation ludique pour les lycéens.",
          subDesc: "Plusieurs séances de travail en co-organisation avec l'enseignant.",
          videoId: 'FnSRfW1HKck',
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
          videoId: 'FnSRfW1HKck',
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
          videoId: '-tBG28oNqAU',
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
    videos: ['bChA-kDtfhA'],
  },
]

const SharpLeftArrow = ({ className }: { className?: string }) => (
  <svg className={cn('w-8 h-8 sm:w-12 sm:h-12 text-red-500 opacity-80 hover:opacity-100 transition-opacity', className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const SharpRightArrow = ({ className }: { className?: string }) => (
  <svg className={cn('w-8 h-8 sm:w-12 sm:h-12 text-red-500 opacity-80 hover:opacity-100 transition-opacity', className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

export function FactoryView() {
  const [active, setActive] = useState(TABS[0].id)
  const [videoIndex, setVideoIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isModuleVideoPlaying, setIsModuleVideoPlaying] = useState(false)
  const [moduleIndex, setModuleIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')

  const current = TABS.find((t) => t.id === active) ?? TABS[0]
  const currentModule = current.additionalContent?.modules[moduleIndex]
  const moduleVideoId =
    currentModule && 'videoId' in currentModule ? currentModule.videoId : undefined

  useEffect(() => {
    setVideoIndex(0)
    setIsVideoPlaying(false)
    setIsModuleVideoPlaying(false)
    setModuleIndex(0)
    setSlideDirection('right')
  }, [active])

  useEffect(() => {
    setIsModuleVideoPlaying(false)
  }, [moduleIndex])

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

  return (
    <section className="relative min-h-screen w-full bg-neutral-950 text-neutral-50 overflow-x-hidden pt-28 sm:pt-32 pb-24 select-none">
      <style jsx>{`
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

        .diagonal-stripes {
          background-image: repeating-linear-gradient(
            135deg,
            rgba(220, 38, 38, 0.25),
            rgba(220, 38, 38, 0.25) 1px,
            transparent 1px,
            transparent 12px
          );
        }
      `}</style>

      <div className="mx-auto max-w-5xl px-5 sm:px-8 relative z-10 animate-fade-in-up">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">La fabrique à doublage</p>
          <h1 className="text-balance font-serif italic text-3xl sm:text-5xl tracking-tight">Le doublage : un outil d&apos;enseignement</h1>
        </header>

        {/* SÉLECTEURS D'ONGLETS */}
        <div className="mt-12 grid grid-cols-3 w-full max-w-lg mx-auto h-12 items-center">
          {TABS.map((tab, idx) => {
            const isActive = tab.id === active
            const labelText = tab.label.toUpperCase()
            return (
              <div 
                key={tab.id} 
                className={cn(
                  "flex items-center h-full",
                  idx === 0 ? "justify-start" : idx === 2 ? "justify-end" : "justify-center"
                )}
              >
                <button
                  type="button"
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setActive(tab.id)}
                  className={cn(
                    'group relative h-full flex items-center text-[14px] sm:text-[16px] uppercase tracking-[0.2em] transition-colors cursor-pointer bg-transparent',
                    isActive ? 'text-red-500 font-medium' : 'text-neutral-400 hover:text-white'
                  )}
                >
                  <span>{labelText}</span>
                </button>
              </div>
            )
          })}
        </div>

        {/* MIRE DE CADRAGE */}
        <div className="mt-8 sm:mt-10 relative w-full p-3 sm:p-10 flex flex-col">
          <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 border-t-2 border-l-2 border-neutral-400/70 pointer-events-none z-20" />
          <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 border-t-2 border-r-2 border-neutral-400/70 pointer-events-none z-20" />
          <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-10 sm:h-10 border-b-2 border-l-2 border-neutral-400/70 pointer-events-none z-20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 border-b-2 border-r-2 border-neutral-400/70 pointer-events-none z-20" />
          
          <div className="absolute top-0 left-1/2 w-px h-3 bg-neutral-500/50 -translate-x-1/2 pointer-events-none z-20" />
          <div className="absolute bottom-0 left-1/2 w-px h-3 bg-neutral-500/50 -translate-x-1/2 pointer-events-none z-20" />
          <div className="absolute top-1/2 left-0 w-3 h-px bg-neutral-500/50 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-1/2 right-0 w-3 h-px bg-neutral-500/50 -translate-y-1/2 pointer-events-none z-20" />

          {/* CONTENEUR GLOBAL CENTRÉ */}
          <div className="relative z-10 pt-2 pb-4 mx-auto max-w-4xl w-full flex flex-col gap-6 sm:gap-8">
            
            {/* SECTION VIDÉO — pleine largeur, flèches en overlay */}
            <div className="relative w-full">
              {current.videos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevVideo}
                    className="absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-1 p-1 sm:p-2 cursor-pointer"
                    aria-label="Vidéo précédente"
                  >
                    <SharpLeftArrow />
                  </button>
                  <button
                    type="button"
                    onClick={nextVideo}
                    className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-1 p-1 sm:p-2 cursor-pointer"
                    aria-label="Vidéo suivante"
                  >
                    <SharpRightArrow />
                  </button>
                </>
              )}
              <div className="relative w-full aspect-video rounded-xl sm:rounded-[2rem] border border-white/10 bg-neutral-900/40 p-1.5 sm:p-3 shadow-2xl backdrop-blur-md">
                <div className="absolute inset-1.5 sm:inset-3 rounded-lg sm:rounded-2xl diagonal-stripes z-0 pointer-events-none" />
                <div
                  className="relative h-full w-full overflow-hidden rounded-lg sm:rounded-2xl border border-white/10 bg-neutral-950 flex items-center justify-center cursor-pointer group/vid z-10"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  {!isVideoPlaying ? (
                    <>
                      <img
                        src={`https://i.ytimg.com/vi/${current.videos[videoIndex]}/hqdefault.jpg`}
                        alt="Lancer la vidéo"
                        className="absolute inset-0 h-full w-full object-cover opacity-90 md:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/15" />
                      <button
                        type="button"
                        className="relative z-10 flex h-9 w-12 sm:h-14 sm:w-20 items-center justify-center rounded-lg sm:rounded-2xl bg-red-600/90 shadow-lg transition-transform duration-300 group-hover/vid:scale-110"
                        aria-label="Lancer la vidéo"
                      >
                        <svg className="h-4 w-4 sm:h-7 sm:w-7 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </>
                  ) : (
                    <iframe
                      className="absolute inset-0 h-full w-full bg-black md:scale-105"
                      src={`https://www.youtube.com/embed/${current.videos[videoIndex]}?autoplay=1`}
                      allowFullScreen
                    />
                  )}
                </div>
              </div>
            </div>
            
            {/* SECTION CONTENU & MODULES */}
            {current.additionalContent && currentModule && (
              <div className="w-full flex flex-col gap-5 sm:gap-6">
                <div className="border-t border-white/10" />

                <div className="text-center px-1">
                  <p 
                    className="text-xs sm:text-sm text-neutral-400 italic"
                    dangerouslySetInnerHTML={{ __html: current.additionalContent.public }}
                  />
                </div>

                {/* SECTION MODULES — encart centré, flèches en overlay */}
                <div className="relative w-full mx-auto">
                  {hasMultipleModules && (
                    <>
                      <button
                        type="button"
                        onClick={prevModule}
                        className="absolute left-0 top-8 z-20 -translate-x-1 p-1 sm:top-1/2 sm:-translate-y-1/2 sm:p-2 cursor-pointer"
                        aria-label="Module précédent"
                      >
                        <SharpLeftArrow />
                      </button>
                      <button
                        type="button"
                        onClick={nextModule}
                        className="absolute right-0 top-8 z-20 translate-x-1 p-1 sm:top-1/2 sm:-translate-y-1/2 sm:p-2 cursor-pointer"
                        aria-label="Module suivant"
                      >
                        <SharpRightArrow />
                      </button>
                    </>
                  )}

                  <div 
                    key={moduleIndex} 
                    className={cn(
                      'w-full flex flex-col justify-start h-auto p-4 sm:p-8 rounded-none border border-white/10 bg-neutral-900/40 shadow-2xl backdrop-blur-md',
                      slideDirection === 'right' ? 'animate-slide-right' : 'animate-slide-left'
                    )}
                  >
                    <div className="text-center mb-5 sm:mb-6">
                      {currentModule.prefix && (
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                          {currentModule.prefix}
                        </p>
                      )}
                      <h3 className="font-serif italic text-2xl sm:text-5xl tracking-tight text-white mb-2 text-balance">
                        {currentModule.title}
                      </h3>
                      
                      <div className="min-h-14 sm:min-h-20 flex flex-col justify-center items-center gap-1 px-1 sm:px-4">
                        {currentModule.desc && (
                          <p className="text-sm sm:text-base text-neutral-300 max-w-lg leading-snug">
                            {currentModule.desc}
                          </p>
                        )}
                        {currentModule.subDesc && (
                          <p className="text-sm sm:text-base text-neutral-300 max-w-lg leading-snug">
                            {currentModule.subDesc}
                          </p>
                        )}
                      </div>
                    </div>

                    {moduleVideoId && (
                      <div className="mb-6 sm:mb-8 w-full mx-auto">
                        <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl border border-white/10 bg-neutral-950 overflow-hidden shadow-xl">
                          <div
                            className="relative h-full w-full flex items-center justify-center cursor-pointer group/module-vid"
                            onClick={() => setIsModuleVideoPlaying(true)}
                          >
                            {!isModuleVideoPlaying ? (
                              <>
                                <img
                                  src={`https://i.ytimg.com/vi/${moduleVideoId}/hqdefault.jpg`}
                                  alt={`Vidéo ${currentModule.prefix ?? currentModule.title}`}
                                  className="absolute inset-0 h-full w-full object-cover opacity-90 md:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/15 transition-colors duration-300 group-hover/module-vid:bg-transparent" />
                                <button
                                  type="button"
                                  className="relative z-10 flex h-9 w-12 sm:h-12 sm:w-16 items-center justify-center rounded-lg sm:rounded-xl bg-red-600/90 shadow-lg transition-transform duration-300 group-hover/module-vid:scale-110"
                                  aria-label="Lancer la vidéo"
                                >
                                  <svg className="h-4 w-4 sm:h-6 sm:w-6 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </button>
                              </>
                            ) : (
                              <iframe
                                className="absolute inset-0 h-full w-full bg-black md:scale-105"
                                src={`https://www.youtube.com/embed/${moduleVideoId}?autoplay=1&rel=0`}
                                title={`Vidéo ${currentModule.prefix ?? currentModule.title}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="text-left pt-2">
                      <h3 className="text-base sm:text-lg text-red-500 italic mb-4 text-center">objectifs</h3>
                      <div className="space-y-3 sm:space-y-5 max-w-xl mx-auto">
                        {currentModule.objectives.map((obj, i) => (
                          <div key={i} className="flex items-start sm:items-center gap-2.5 sm:gap-4 group cursor-default">
                            <div className="relative flex items-center justify-end shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5 sm:mt-0">
                              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white transition-colors duration-300 group-hover:bg-red-500" />
                            </div>
                            <div className="hidden sm:flex items-center shrink-0 w-20">
                              <div className="w-full h-px bg-neutral-700/80" />
                            </div>
                            <p className="text-sm sm:text-base text-neutral-300 leading-snug group-hover:text-white transition-colors min-w-0">
                              {obj}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ZONE DU BOUTON CTA */}
            {current.additionalContent && (
              <div className="pt-6 sm:pt-8 pb-2 flex items-center justify-center">
                <Link
                  href="/formules"
                  className="px-8 py-3 rounded-full border border-white/20 bg-white/[0.08] text-neutral-200 font-medium text-xs sm:text-sm tracking-wide hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 cursor-pointer shadow-lg"
                >
                  {current.additionalContent.ctaButton}
                </Link>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}