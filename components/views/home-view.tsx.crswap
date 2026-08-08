'use client'

import { useState } from 'react'

const partners = [
  { name: 'Cinélux', src: '/partners/cinelux.png' },
  { name: 'Sonika', src: '/partners/sonika.png' },
  { name: 'Vocenova', src: '/partners/vocenova.png' },
  { name: 'Rialto Films', src: '/partners/rialto.png' },
  { name: 'Echo Media', src: '/partners/echo-media.png' },
]

export function HomeView() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-neutral-950 text-neutral-50 flex flex-col">
      {/* Animation CSS pour faire grésiller le grain */}
      <style jsx>{`
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, -5%); }
          60% { transform: translate(15%, 0); }
          70% { transform: translate(0, 10%); }
          80% { transform: translate(-15%, 0); }
          90% { transform: translate(10%, 5%); }
        }
        .animate-film-grain {
          animation: grain 0.8s steps(10) infinite;
        }
      `}</style>

      {/* Vidéo avec grain animé et dégradé d'origine */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Filtre SVG pour le grain pellicule */}
        <svg className="hidden">
          <filter id="film-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
          </filter>
        </svg>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover scale-140 contrast-125 brightness-100"
        >
          <source src="/OPENING VIDEO VIEW.m4v" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>

        {/* Calque de grain pellicule animé */}
        <div 
          className="absolute inset-[-50%] w-[200%] h-[200%] mix-blend-overlay pointer-events-none opacity-90 animate-film-grain"
          style={{ filter: 'url(#film-grain)' }}
        />

        {/* Voile sombre / dégradé d'origine */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/40" />
      </div>

      {/* Conteneur principal */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-grow flex-col justify-center px-5 py-24 sm:px-8">
        <div className="max-w-xl lg:max-w-[60%]">
          
          {/* Grille superposée */}
          <div className="grid grid-cols-1 grid-rows-1 items-start">
            
            {/* BLOC 1 : Accueil */}
            <div
              className={`col-start-1 row-start-1 transition-opacity duration-500 ease-in-out ${
                showIntro ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                Doublage tournez bobines
              </p>
              <h1 className="text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Vivez une expérience inoubliable !
        </h1>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-neutral-300">
                Plongez dans l&apos;univers passionnant du doublage.
                <br />
                Imaginez-vous dans la peau des comédiens à l&apos;image, face à la projection d&apos;extraits de films cultes avec les textes sur bande rythmo synchrone.
                <br />
                Les dialogues défilent sous l&apos;image.
                <br />
                Vous choisissez un personnage. Vous le « doublez » !
                <br />
                Seul prérequis : être lecteur.
                <br />
                Toute l&apos;équipe de Tournez Bobines est là pour vous accompagner à la barre de doublage.
              </p>
            </div>

            {/* BLOC 2 : Explication */}
            <div
              className={`col-start-1 row-start-1 transition-opacity duration-500 ease-in-out ${
                !showIntro ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] opacity-0 select-none" aria-hidden="true">
                Doublage tournez bobines
              </div>
              <h1 className="text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Qu&apos;est-ce que le doublage ?
              </h1>
              <div className="space-y-4 text-pretty text-sm leading-relaxed text-neutral-300">
                <p>
                  <strong className="font-semibold text-white">Pour l’adaptateur :</strong> c’est être au plus près de « l’esprit » du dialogue en langue étrangère, être le plus synchrone possible en respectant le mouvement des lèvres des comédiens à l’image : synchronisation labiale.
                </p>
                <p>
                  <strong className="font-semibold text-white">Pour le comédien :</strong> c’est suivre au plus près le jeu de l’acteur à l’image, en respectant son rythme, ses intentions, ses émotions.
                </p>
                <p>
                  <strong className="font-semibold text-white">Pour le spectateur :</strong> c’est croire que tous les personnages d’une série ou d’un film étranger parlent français.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Bouton fixe en bas */}
        <div className="mt-8 relative z-20">
          <button 
            type="button"
            onMouseEnter={() => setShowIntro(false)}
            onMouseLeave={() => setShowIntro(true)}
            className="px-6 py-3 rounded-full border border-white/20 text-xs font-medium uppercase tracking-widest bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            Qu&apos;est-ce que le doublage ?
          </button>
        </div>
      </div>

      {/* Partner logos row */}
      <div className="relative z-10 w-full mt-auto border-t border-white/10 bg-neutral-950/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-5 py-4 sm:gap-14 sm:px-8">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.src || "/placeholder.svg"}
              alt={`Logo ${partner.name}`}
              className="h-5 w-auto object-contain opacity-70 transition-opacity hover:opacity-100 sm:h-6"
            />
          ))}
        </div>
      </div>
    </section>
  )
}