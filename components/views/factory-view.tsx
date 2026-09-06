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

interface ArrowProps {
  className?: string
}

const SharpLeftArrow = ({ className }: ArrowProps) => (
  <svg className={cn('w-5 h-5 text-red-500 opacity-80 hover:opacity-100 transition-opacity', className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const SharpRightArrow = ({ className }: ArrowProps) => (
  <svg className={cn('w-5 h-5 text-red-500 opacity-80 hover:opacity-100 transition-opacity', className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
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

  const nextModule = () => {
    setSlideDirection('right')
    setModuleIndex((prev) => (prev + 1) % totalModules)
  }
  const prevModule = () => {
    setSlideDirection('left')
    setModuleIndex((prev) => (prev - 1 + totalModules) % totalModules)
  }

  return (
    <section className="relative min-h-screen w-full bg-black text-neutral-50 overflow-x-hidden pt-12 sm:pt-20 pb-24 select-none">
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-text-sweep {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        @keyframes slideFromRight { 
          0% { opacity: 0; transform: translateX(30px); } 
          100% { opacity: 1; transform: translateX(0); } 
        }
        @keyframes slideFromLeft { 
          0% { opacity: 0; transform: translateX(-30px); } 
          100% { opacity: 1; transform: translateX(0); } 
        }
        
        .animate-slide-right { animation: slideFromRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-left { animation: slideFromLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      <div className="relative z-10 w-full px-[100px]">
        
        {/* EN-TÊTE */}
        <header className="text-center animate-text-sweep pt-8 sm:pt-12 mb-12">
          <p className="mb-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
            La fabrique à doublage
          </p>
          <h1 className="text-balance font-serif italic text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight drop-shadow-md mb-0">
            Le doublage : un outil d&apos;enseignement
          </h1>
        </header>

        {/* SÉLECTEURS D'ONGLETS */}
        <div className="mt-8 grid grid-cols-3 w-full max-w-md mx-auto h-12 items-center animate-text-sweep mb-16" style={{ animationDelay: '200ms' }}>
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
                    'group relative flex h-full items-center px-2 text-[11px] sm:text-xs uppercase tracking-[0.15em] transition-colors cursor-pointer whitespace-nowrap',
                    isActive ? 'text-white font-medium' : 'text-neutral-400 hover:text-white',
                  )}
                >
                  {labelText}
                  {isActive && <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white" />}
                  {!isActive && <span className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />}
                </button>
              </div>
            )
          })}
        </div>

        {/* CONTENEUR GLOBAL DES 3 COLONNES */}
        <div className="w-full animate-text-sweep grid" style={{ animationDelay: '400ms' }}>
          {[true, false].map((isGhost) => {
            // Pour le fantôme, on force les données du premier onglet ("Primaire")
            const tabData = isGhost ? TABS[0] : current;
            const moduleData = isGhost ? TABS[0].additionalContent?.modules[0] : currentModule;
            
            if (!tabData.additionalContent || !moduleData) return null;

            const modVideoId = 'videoId' in moduleData ? moduleData.videoId : undefined;
            const actVideoId = modVideoId || tabData.videos[isGhost ? 0 : videoIndex];
            const tModulesCount = tabData.additionalContent.modules.length;
            const multModules = tModulesCount > 1;

            return (
              <div 
                key={isGhost ? 'ghost' : `${active}-${moduleIndex}`}
                className={cn(
                  "col-start-1 row-start-1 w-full",
                  isGhost ? "invisible opacity-0 pointer-events-none" : "relative z-10"
                )}
                aria-hidden={isGhost}
              >
                <div 
                  className={cn(
                    'grid grid-cols-1 lg:grid-cols-[1.6fr_0.8fr_0.8fr] gap-[25px] w-full items-stretch h-full',
                    !isGhost && (slideDirection === 'right' ? 'animate-slide-right' : 'animate-slide-left')
                  )}
                >
                  
                  {/* COLONNE 1 : VIDÉO */}
                  <div className="flex flex-col bg-neutral-950/80 border border-white/10 shadow-2xl h-full">
                    <div className="relative w-full aspect-video lg:aspect-auto lg:flex-1 overflow-hidden bg-black flex items-center justify-center cursor-pointer group">
                      {((modVideoId && !isModuleVideoPlaying) || (!modVideoId && !isVideoPlaying) || isGhost) ? (
                        <>
                          <img
                            src={`https://i.ytimg.com/vi/${actVideoId}/maxresdefault.jpg`}
                            alt="Lancer la vidéo"
                            className="absolute inset-0 h-full w-full object-cover opacity-85"
                          />
                          <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-transparent" />
                          <button
                            type="button"
                            className="relative z-10 flex h-14 w-20 items-center justify-center rounded-xl bg-red-600 shadow-xl transition-transform duration-300 group-hover:scale-110"
                            aria-label="Lancer la vidéo"
                            onClick={() => {
                              if (!isGhost) {
                                if (modVideoId) setIsModuleVideoPlaying(true)
                                else setIsVideoPlaying(true)
                              }
                            }}
                          >
                            <svg className="h-6 w-6 text-white fill-current ml-1" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </button>
                        </>
                      ) : (
                        <iframe
                          className="absolute inset-0 h-full w-full bg-black"
                          src={`https://www.youtube.com/embed/${actVideoId}?autoplay=1&rel=0`}
                          title="Vidéo de présentation"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      )}
                    </div>

                    {!modVideoId && tabData.videos.length > 1 && (
                      <div className="flex items-center justify-between px-4 py-3 bg-black/40 mt-auto">
                        <button type="button" onClick={!isGhost ? prevVideo : undefined} className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white cursor-pointer">
                          <SharpLeftArrow className="w-4 h-4" /> Précédente
                        </button>
                        <span className="text-xs text-neutral-500">{isGhost ? 1 : videoIndex + 1} / {tabData.videos.length}</span>
                        <button type="button" onClick={!isGhost ? nextVideo : undefined} className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white cursor-pointer">
                          Suivante <SharpRightArrow className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* COLONNE 2 : TEXTE */}
                  <div className="flex flex-col justify-between bg-neutral-950/80 p-6 lg:p-8 border border-white/10 shadow-2xl h-full text-center">
                    <div>
                      {multModules && (
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                          <button type="button" onClick={!isGhost ? prevModule : undefined} className="p-1 text-neutral-400 hover:text-white cursor-pointer" aria-label="Module précédent">
                            <SharpLeftArrow className="w-5 h-5" />
                          </button>
                          <span className="text-xs font-semibold uppercase tracking-widest text-red-500">
                            {moduleData.prefix || `Module ${isGhost ? 1 : moduleIndex + 1} / ${tModulesCount}`}
                          </span>
                          <button type="button" onClick={!isGhost ? nextModule : undefined} className="p-1 text-neutral-400 hover:text-white cursor-pointer" aria-label="Module suivant">
                            <SharpRightArrow className="w-5 h-5" />
                          </button>
                        </div>
                      )}

                      {!multModules && moduleData.prefix && (
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                          {moduleData.prefix}
                        </p>
                      )}

                      <h3 className="font-serif italic text-2xl sm:text-3xl leading-tight tracking-tight mb-4 text-white">
                        {moduleData.title}
                      </h3>

                      <div className="space-y-3 text-sm leading-relaxed text-neutral-300 mb-6">
                        {moduleData.desc && <p>{moduleData.desc}</p>}
                        {moduleData.subDesc && <p className="text-neutral-400 text-xs italic">{moduleData.subDesc}</p>}
                      </div>

                      <div 
                        className="text-xs text-neutral-300 pt-4 border-t border-white/10"
                        dangerouslySetInnerHTML={{ __html: tabData.additionalContent.public }}
                      />
                    </div>

                    <div className="pt-6 mt-auto">
                      <Link
                        href="/formules"
                        className="inline-flex w-full items-center justify-center px-6 py-3 rounded-full border border-neutral-400 bg-neutral-900 text-white font-medium text-xs tracking-wide shadow-md transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:text-white cursor-pointer"
                        tabIndex={isGhost ? -1 : 0}
                      >
                        {tabData.additionalContent.ctaButton}
                      </Link>
                    </div>
                  </div>

                  {/* COLONNE 3 : OBJECTIFS */}
                  <div className="flex flex-col justify-between bg-neutral-950/80 p-6 lg:p-8 border border-white/10 shadow-2xl h-full">
                    <div>
                      <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-red-500 text-center">
                        Objectifs
                      </h4>
                      <div className="space-y-3.5">
                        {moduleData.objectives.map((obj, i) => (
                          <div key={i} className="flex items-start gap-3 group cursor-default">
                            <div className="relative flex items-center justify-center shrink-0 w-4 h-4 mt-1">
                              <div className="w-2 h-2 rounded-full bg-neutral-600 transition-colors duration-300 group-hover:bg-red-500" />
                            </div>
                            <p className="text-sm leading-relaxed font-light text-neutral-300 group-hover:text-white transition-colors">
                              {obj}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}