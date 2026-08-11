'use client'

import { useState } from 'react'

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

export function AboutView() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative min-h-screen w-full bg-neutral-950 text-neutral-50 overflow-hidden pt-20 pb-24 select-none">
      
      {/* Animations CSS fluides & Stabilisation GPU */}
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

      {/* CONTENEUR PRINCIPAL */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 pt-12 sm:px-8 w-full">
        
        <header className="text-center animate-text-sweep">
          {/* Sous-titre en rouge */}
          <p className="mb-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
            Qui sommes-nous ?
          </p>
          <h1 className="text-balance font-serif italic text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight drop-shadow-md">
            Une équipe passionnée par la voix
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-xs sm:text-sm leading-relaxed text-neutral-300">
            A l&apos;origine trois ami.e.s passionné.e.s de cinéma, aux compétences complémentaires.
            <br /><br />
            Un auteur-adaptateur de doublage, bilingue en anglais et expert.
            <br />
            Une professeure des écoles, ancienne directrice de salles de cinémas.
            <br />
            Une ingénieure d&apos;études, professeure de français langue étrangère à l&apos;université.
            <br /><br />
            L&apos;équipe s&apos;est enrichie d&apos;assistants techniques et de coordinatrices.
          </p>
        </header>

        <div className="mt-14 relative w-full aspect-video rounded-[2rem] border border-white/10 bg-neutral-900/40 p-2 sm:p-3 shadow-2xl backdrop-blur-md animate-text-sweep" style={{ animationDelay: '200ms' }}>
          <div 
            className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 flex items-center justify-center cursor-pointer group"
            onClick={() => setIsVideoPlaying(true)}
          >
            {!isVideoPlaying ? (
              <>
                <img 
                  src="https://i.ytimg.com/vi/xWPUCj3E9xU/maxresdefault.jpg" 
                  alt="Présentation Vidéo" 
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
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
                className="absolute top-0 left-0 h-full w-full bg-black"
                src="https://www.youtube.com/embed/xWPUCj3E9xU?autoplay=1&rel=0"
                title="Lecteur vidéo YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        {/* SECTION LE PRINCIPE AVEC LE DESIGN DE BORDURE AVEC MIRE */}
        <div className="mt-14 relative w-full p-8 sm:p-12 overflow-hidden bg-neutral-950/30 backdrop-blur-[2px] animate-text-sweep" style={{ animationDelay: '400ms' }}>
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

          <div className="relative z-10 text-center max-w-2xl mx-auto pt-6 pb-2">
            <h2 className="text-balance font-serif italic text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight drop-shadow-md mb-6">
              Le principe
            </h2>
            <p className="text-pretty text-xs sm:text-sm leading-relaxed text-neutral-300">
              Un véritable auditorium de doublage se déplace pour vous proposer de vivre en direct une expérience cinématographique dans les meilleures conditions.
              <br /><br />
              A partir de nombreux extraits de films cultes, nous offrons au public la possibilité de se mettre, pendant un temps, dans la peau des comédiens à l&apos;image.
              <br /><br />
              Grâce à des moyens techniques professionnels, le public peut choisir parmi plus de 200 extraits de films. La projection et la mise en situation sont alors possibles grâce au texte qui défile sous l&apos;image sur une bande rythmo synchrone.
            </p>
          </div>
        </div>

        <div className="mt-14 animate-text-sweep" style={{ animationDelay: '600ms' }}>
          
          <div className="rounded-[2rem] border border-white/10 bg-neutral-900/40 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            
            <h2 className="text-balance font-serif italic text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight drop-shadow-md mb-10 text-center">
              Contact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              
              <form className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="text" 
                    placeholder="Votre nom" 
                    className="w-full bg-neutral-950/60 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Votre email" 
                    className="w-full bg-neutral-950/60 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Sujet de votre demande" 
                  className="w-full bg-neutral-950/60 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors"
                />
                <textarea 
                  placeholder="Votre message..." 
                  rows={4}
                  className="w-full bg-neutral-950/60 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors resize-none"
                ></textarea>
                
                <button 
                  type="button"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md text-neutral-200 font-medium text-xs sm:text-sm tracking-wide shadow-2xl transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] cursor-pointer"
                >
                  Envoyer le message
                </button>
              </form>

              <div className="flex flex-col justify-center gap-6 text-sm text-neutral-300 leading-relaxed border-t border-white/10 pt-8 md:border-t-0 md:pt-0 md:border-l md:pl-10">
                <p>
                  Pour toute information ou demande de devis, complétez le formulaire ci-contre ou contactez-nous directement :
                </p>
                <ul className="space-y-4">
                  <li className="flex flex-col gap-1">
                    <span className="font-semibold text-neutral-100">Jean-Jacques PRON</span>
                    <a href="tel:+33682831034" className="text-neutral-400 hover:text-white transition-colors">
                      06 82 83 10 34
                    </a>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="font-semibold text-neutral-100">Véronique ATTISSO</span>
                    <a href="tel:+33613647259" className="text-neutral-400 hover:text-white transition-colors">
                      06 13 64 72 59
                    </a>
                  </li>
                  <li className="flex flex-col gap-1 pt-2 border-t border-white/5">
                    <span className="font-semibold text-neutral-100">Email</span>
                    {/* Email en rouge */}
                    <a href="mailto:contact@doublagetournezbobines.fr" className="text-red-500 hover:text-white transition-colors break-all">
                      contact@doublagetournezbobines.fr
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}