'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { withBasePath } from '@/lib/paths'

// Séquence rythmo pour le fond
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

// Photos à placer entre le titre et le texte
const HEADER_PHOTOS = [
  '/adultes-souriants.png',
  '/Mardeuil 2018.png',
  '/sourires-enfants.jpg',
]

// Formules découpées en étapes numérotées
const FORMULAS = [
  {
    id: 'immersion',
    title: "L'Immersion",
    videoId: 'spMb_CFn0hQ',
    steps: [
      {
        num: '1',
        text: (
          <>
            Vous devenez la voix d&apos;un comédien de doublage pendant l&apos;extrait choisi.
            <br />
            À partir d&apos;une vidéo-projection avec bande rythmo synchrone, vous réalisez votre prestation.
          </>
        ),
      },
      {
        num: '2',
        text: (
          <> Ce même extrait est diffusé simultanément sur un écran plasma d&apos;entraînement. 
          <br />
          Vous êtes accompagné par une équipe expérimentée : un directeur artistique qui guide chaque prestation, un assistant technique et deux coordinatrices.
          </>
        ),
      },
    ],
  },
  {
    id: 'immersion-filmee',
    title: "L'Immersion filmée",
    videoId: 'Kqx12yrOUPs',
    steps: [
      {
        num: '1',
        text: (
          <>
            Vous devenez la voix d&apos;un comédien de doublage pendant l&apos;extrait choisi.
            <br />
            À partir d&apos;une vidéo-projection avec bande rythmo synchrone, vous réalisez votre prestation.
          </>
        ),
      },
      {
        num: '2',
        text: (
          <> Ce même extrait est diffusé simultanément sur un écran plasma d&apos;entraînement. 
          <br />
          Vous êtes accompagné par une équipe expérimentée : un directeur artistique qui guide chaque prestation, un assistant technique et deux coordinatrices.
          </>
        ),
      },
      {
        num: '3',
        text: (
          <> <strong className="font-semibold text-red-500">
            Votre prestation est enregistrée sur une vidéo.
            </strong> 
          <br />
          Une clé USB de toutes les prestations sera remise ultérieurement à l&apos;organisateur de la manifestation.
          </>
        ),     
      },
    ],
  },
  {
    id: 'captation',
    title: 'La Captation',
    videoId: 'eB0vnr_s5cw',
    steps: [
      {
        num: '1',
        text: (
          <>
            Vous devenez la voix d&apos;un comédien de doublage pendant l&apos;extrait choisi.
            <br />
            À partir d&apos;une vidéo-projection avec bande rythmo synchrone, vous réalisez votre prestation.
          </>
        ),
      },
      {
        num: '2',
        text: (
          <> Ce même extrait est diffusé simultanément sur un écran plasma d&apos;entraînement. 
          <br />
          Vous êtes accompagné par une équipe expérimentée : un directeur artistique qui guide chaque prestation, un assistant technique et deux coordinatrices.
          </>
        ),
      },
      {
        num: '3',
        text: (
          <> <strong className="font-semibold text-red-500">
              Votre prestation est captée et enregistrée sur une vidéo : deux caméras enregistrent image et son.
            </strong>
          </>
        ),     
      },
      {
        num: '4',
        text: (
          <> En fin de session, vous repartez avec une clé USB personnelle de votre prestation de doublage. 
          <br />
          Vous vous découvrirez en médaillon interprétant la scène à l&apos;écran.
          </>
        ),
      },  
    ],
  },
]

export function DubbingView() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isVideo1Playing, setIsVideo1Playing] = useState(false)
  const [isHowItWorksVideoPlaying, setIsHowItWorksVideoPlaying] = useState(false)

  const [playingColumnVideos, setPlayingColumnVideos] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const rawHash = window.location.hash
    const wantsFormulas =
      params.get('to') === 'formulas' || rawHash.replace(/#/g, '') === 'formulas'

    if (!wantsFormulas) return

    // URL propre : un seul #formulas, sans ?to=
    window.history.replaceState(null, '', `${withBasePath('/doublage')}/#formulas`.replace(/\/+#/, '/#'))

    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    let cancelled = false
    const timeoutId = window.setTimeout(() => {
      if (cancelled) return
      const target = document.getElementById('formulas')
      if (!target) return
      const top = target.getBoundingClientRect().top + window.scrollY - 30
      window.scrollTo({ top, behavior: 'smooth' })
    }, 350)

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
      window.history.scrollRestoration = previousRestoration
    }
  }, [])

  const toggleColumnVideo = (id: string) => {
    setPlayingColumnVideos((prev) => ({ ...prev, [id]: true }))
  }

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

        @keyframes rythmoScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-rythmo-scroll {
          animation: rythmoScroll 28s linear infinite;
          will-change: transform;
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

      {/* BACKGROUND TEXTURE : Bande rythmo floutée */}
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
          <div className="mt-8">
            <div className="flex flex-col max-w-3xl mx-auto">
              <div className="relative w-full aspect-video rounded-2xl border border-white/10 bg-neutral-900/40 p-2 shadow-xl backdrop-blur-md overflow-hidden">
                <div 
                  className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-950 flex items-center justify-center cursor-pointer group"
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
            </div>
          </div>

          {/* COMMENT ÇA MARCHE */}
          <div className="mt-16 relative w-full p-8 sm:p-12 overflow-hidden bg-neutral-950/30 backdrop-blur-[2px]">
            {/* 4 Coins de visée */}
            <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-neutral-400/70 pointer-events-none" />
            <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-neutral-400/70 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-neutral-400/70 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-neutral-400/70 pointer-events-none" />

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

      {/* SECTION 3 COLONNES - FORMULES AVEC TRANSITION FLUIDE DES MIRES */}
      <div className="mt-20 relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 z-10"  id="formulas">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {FORMULAS.map((formula) => {
            const isPlaying = playingColumnVideos[formula.id]

            return (
              <div
                key={formula.id}
                className="group relative z-10 flex flex-col justify-between p-6 sm:p-8 bg-transparent transition-all duration-300 ease-out"
              >
                {/* Coins : Animation fluide entre les angles gris et les croix rouges */}
                {/* Haut Gauche */}
                <div className="absolute top-4 left-4 pointer-events-none z-20">
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-90 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                  <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-5 h-5 opacity-0 scale-75 rotate-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-90 flex items-center justify-center">
                    <div className="absolute w-full h-[2px] bg-red-600" />
                    <div className="absolute h-full w-[2px] bg-red-600" />
                  </div>
                </div>
                {/* Haut Droite */}
                <div className="absolute top-4 right-4 pointer-events-none z-20">
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-90 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-5 h-5 opacity-0 scale-75 rotate-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-90 flex items-center justify-center">
                    <div className="absolute w-full h-[2px] bg-red-600" />
                    <div className="absolute h-full w-[2px] bg-red-600" />
                  </div>
                </div>
                {/* Bas Gauche */}
                <div className="absolute bottom-4 left-4 pointer-events-none z-20">
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-90 group-hover:-translate-x-1 group-hover:translate-y-1" />
                  <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 opacity-0 scale-75 rotate-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-90 flex items-center justify-center">
                    <div className="absolute w-full h-[2px] bg-red-600" />
                    <div className="absolute h-full w-[2px] bg-red-600" />
                  </div>
                </div>
                {/* Bas Droite */}
                <div className="absolute bottom-4 right-4 pointer-events-none z-20">
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-90 group-hover:translate-x-1 group-hover:translate-y-1" />
                  <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-5 h-5 opacity-0 scale-75 rotate-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-90 flex items-center justify-center">
                    <div className="absolute w-full h-[2px] bg-red-600" />
                    <div className="absolute h-full w-[2px] bg-red-600" />
                  </div>
                </div>

                {/* Traits des points cardinaux (transition animée de direction et couleur) */}
                <div className="absolute top-1/2 left-0 w-3 h-px bg-neutral-500/50 -translate-y-1/2 pointer-events-none transition-all duration-500 ease-out group-hover:bg-red-600 group-hover:rotate-90 group-hover:scale-125" />
                <div className="absolute top-1/2 right-0 w-3 h-px bg-neutral-500/50 -translate-y-1/2 pointer-events-none transition-all duration-500 ease-out group-hover:bg-red-600 group-hover:rotate-90 group-hover:scale-125" />
                <div className="absolute top-0 left-1/2 w-px h-3 bg-neutral-500/50 -translate-x-1/2 pointer-events-none transition-all duration-500 ease-out group-hover:bg-red-600 group-hover:rotate-90 group-hover:scale-125" />
                <div className="absolute bottom-0 left-1/2 w-px h-3 bg-neutral-500/50 -translate-x-1/2 pointer-events-none transition-all duration-500 ease-out group-hover:bg-red-600 group-hover:rotate-90 group-hover:scale-125" />

                {/* Fond à stries diagonales rouges (au survol) */}
                <div className="absolute inset-4 sm:inset-5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none diagonal-stripes z-0" />

                {/* Contenu principal */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  {/* Bloc Haut : Titre + Vidéo */}
                  <div>
                    <div className="border-b border-white/10 pb-3 mb-4 text-center min-h-[3.2rem] flex items-center justify-center transition-colors duration-300 group-hover:border-transparent">
                      <h3 className="font-serif italic text-2xl sm:text-3xl tracking-tight text-neutral-100 drop-shadow-sm">
                        {formula.title}
                      </h3>
                    </div>

                    <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 flex items-center justify-center">
                      {isPlaying ? (
                        <iframe
                          className="absolute top-0 left-0 h-full w-full bg-black md:scale-105"
                          src={`https://www.youtube.com/embed/${formula.videoId}?autoplay=1&rel=0`}
                          title={formula.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div className="relative w-full h-full flex items-center justify-center group/video cursor-pointer" onClick={() => toggleColumnVideo(formula.id)}>
                          <img 
                            src={`https://i.ytimg.com/vi/${formula.videoId}/hqdefault.jpg`} 
                            alt={formula.title} 
                            className="absolute inset-0 h-full w-full object-cover opacity-80 md:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/20" />
                          <button 
                            className="relative z-10 flex h-12 w-16 items-center justify-center rounded-xl bg-red-600 shadow-xl transition-transform duration-300 group-hover/video:scale-110"
                            aria-label={`Lancer la vidéo ${formula.title}`}
                          >
                            <svg className="h-6 w-6 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bloc Étapes numérotées - Effet Glassmorphism clair et transparent */}
                  <div className="mt-5 flex-1 flex flex-col justify-between">
                    <div className="w-full rounded-2xl border border-white/20 bg-white/[0.08] p-4 sm:p-5 shadow-2xl backdrop-blur-md space-y-4">
                      {formula.steps.map((step) => (
                        <div key={step.num} className="flex items-start gap-2.5 group/step cursor-default text-left">
                          
                          {/* Numéro statique */}
                          <div className="flex items-center justify-end shrink-0 w-5 h-5 mt-0.5">
                            <span className="font-serif italic text-base text-white">
                              {step.num}
                            </span>
                          </div>
                          
                          {/* Trait de liaison fixe */}
                          <div className="flex items-center shrink-0 w-4 mt-2.5">
                            <div className="w-full h-px bg-neutral-500/80" />
                          </div>

                          {/* Texte de l'étape */}
                          <p className="text-xs text-neutral-200 leading-relaxed pt-0.5">
                            {step.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="font-semibold text-white italic pt-4 text-center text-xs sm:text-sm">
                      Devis disponible sur demande
                    </p>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* BOUTON CONTACT SOBRE */}
        <div className="mt-16 text-center">
          <Link
            href="/qui-sommes-nous?to=contact"
            scroll={false}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md text-neutral-200 font-medium text-xs sm:text-sm tracking-wide shadow-2xl transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] cursor-pointer"
          >
            Contactez-nous pour votre projet
          </Link>
        </div>

      </div>

    </section>
  )
}