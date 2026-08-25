'use client'

import { useState, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { withBasePath } from '@/lib/paths'

const partners = [
  { name: 'Cinélux', src: '/partners/cinelux.png' },
  { name: 'Sonika', src: '/partners/sonika.png' },
  { name: 'Vocenova', src: '/partners/vocenova.png' },
  { name: 'Rialto Films', src: '/partners/rialto.png' },
  { name: 'Echo Media', src: '/partners/echo-media.png' },
]

// Séquence rythmo avec des rectangles de dialogue rallongés
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

export function HomeView() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <section className="relative min-h-screen w-full bg-neutral-950 text-neutral-50 flex flex-col justify-between pt-20 pb-8">
      
      {/* Animations CSS fluides */}
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-text-sweep {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        /* Défilement fluide et accéléré des pistes rythmo (28s) */
        @keyframes rythmoScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-rythmo-scroll {
          animation: rythmoScroll 28s linear infinite;
          will-change: transform;
        }
      `}</style>

      {/* BACKGROUND TEXTURE : Bande rythmo authentique et dynamique */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none flex items-center opacity-[0.2]">
        
        {/* Lignes directrices des 3 pistes (imitation de la bande perforée/grise) */}
        <div className="absolute inset-x-0 h-[34rem] bg-neutral-900/30 border-y border-neutral-800/40 flex flex-col justify-between py-2">
          <div className="w-full border-t border-dashed border-white/30"></div>
          <div className="w-full border-t border-dashed border-neutral-700/30"></div>
          <div className="w-full border-t border-dashed border-white/30"></div>
        </div>

        {/* Lignes horizontales de séparation des pistes */}
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-20 space-y-28">
          <div className="h-px w-full bg-neutral-500"></div>
          <div className="h-px w-full bg-neutral-500"></div>
        </div>

        {/* LIGNE ROUGE DE SYNCHRO CENTRALE AVEC LA CROIX ROUGE (TRAITS AFFINÉS) */}
        <div className="absolute top-0 bottom-0 left-[25%] w-0.5 bg-red-600/80 z-20 flex flex-col items-center justify-center">
          <span className="text-red-600 font-normal text-[2.5rem] select-none leading-none">
            ×
          </span>
        </div>

        {/* Conteneur défilant fluide */}
        <div className="flex w-max animate-rythmo-scroll px-[25vw] relative z-10 items-center">
          {[1, 2].map((loopIndex) => (
            <div key={loopIndex} className="flex items-center gap-12 sm:gap-20">
              {rythmoSequence.map((item, index) => {
                // Position verticale selon la piste (1, 2 ou 3)
                let trackTransform = 'translate-y-0'
                if (item.track === 1) trackTransform = '-translate-y-36 sm:-translate-y-48'
                if (item.track === 3) trackTransform = 'translate-y-36 sm:translate-y-48'

                return (
                  <div 
                    key={`${loopIndex}-${index}`}
                    className={`flex items-center gap-2.5 shrink-0 transition-transform ${trackTransform}`}
                  >
                    {/* Numéro de ligne encadré en rouge */}
                    <div className="px-1.5 py-0.5 border border-red-500/70 bg-red-950/60 rounded-[3px] font-mono text-[10px] sm:text-xs text-red-300 tracking-wider shrink-0 text-center">
                      {item.cue}
                    </div>

                    {/* Rectangle de dialogue rallongé et épuré */}
                    <div className={`h-11 sm:h-14 bg-neutral-800/90 rounded-md ${item.width} border border-neutral-700/70 shadow-md shrink-0`} />

                    {/* Time-code encadré en rouge */}
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
      {/* FIN BACKGROUND */}


      {/* Conteneur principal centré verticalement */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-5 sm:px-8 py-4">
        
        {/* Layout 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* COLONNE GAUCHE : Bloc de textes compacts avec animation */}
          <div className="flex flex-col gap-6 rounded-2xl bg-neutral-950/60 p-4 backdrop-blur-sm sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
            
            {/* BLOC 1 : Accueil */}
            <div className="animate-text-sweep" style={{ animationDelay: '100ms' }}>
              <p className="mb-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                Doublage tournez bobines
              </p>
              <h1 className="text-balance font-serif italic text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight drop-shadow-md">
                Vivez une expérience inoubliable !
              </h1>
              <p className="mt-2.5 text-pretty text-base leading-relaxed text-neutral-300">
                Plongez dans l&apos;univers passionnant du cinéma.
                <br />
                Imaginez-vous dans la peau des comédiens à l&apos;image, face à la projection d&apos;extraits de films cultes avec les textes sur bande rythmo synchrone.
                <br />
                Les dialogues défilent sous l&apos;image. Vous choisissez un personnage. Vous le « doublez » !
                <br />
                Seul prérequis : être lecteur. Toute l&apos;équipe de Tournez Bobines est là pour vous accompagner à la barre de doublage.
              </p>
            </div>

            {/* Ligne de séparation */}
            <hr className="w-12 border-neutral-700 animate-text-sweep" style={{ animationDelay: '300ms' }} />

            {/* BLOC 2 : Explication */}
            <div className="animate-text-sweep" style={{ animationDelay: '500ms' }}>
              <h2 className="text-balance font-serif italic text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight drop-shadow-md">
                Qu&apos;est-ce que le doublage ?
              </h2>
              <div className="mt-2.5 space-y-2 text-pretty text-base leading-relaxed text-neutral-300">
                <p>
                  <strong className="font-semibold text-white">Pour le spectateur :</strong> c’est croire que tous les personnages d’une série ou d’un film étranger parlent français.
                </p>
                <p>
                  <strong className="font-semibold text-white">Pour le comédien :</strong> c’est suivre au plus près le jeu de l’acteur à l’image, respecter le rythme, les émotions, les intentions et la synchronisation labiale.
                </p>
                <p>
                  <strong className="font-semibold text-white">Pour l’adaptateur :</strong> c’est être au plus près du dialogue en langue étrangère, être le plus synchrone possible en respectant le mouvement des lèvres des comédiens à l’image : synchronisation labiale.
                </p>
              </div>
            </div>

          </div>

          {/* COLONNE DROITE : Vidéo locale avec zoom et bouton son externe */}
          <div className="flex justify-center items-center w-full">
            <div className="relative w-full aspect-video rounded-[2rem] border border-white/10 bg-neutral-900/40 p-2 sm:p-3 shadow-2xl backdrop-blur-md">
              
              {/* Conteneur intérieur de la vidéo */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover scale-110"
                >
                  <source src={withBasePath('/TB_VIDEO_PRESENTATION.mp4')} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>

              {/* Bouton de son externe placé en bas à droite sur le cadre */}
              <button
                onClick={toggleMute}
                className="absolute bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-neutral-900/80 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-md border border-white/20 shadow-lg transition-all hover:bg-neutral-800 hover:scale-105 active:scale-95"
                title={isMuted ? "Activer le son" : "Couper le son"}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="h-4 w-4 text-neutral-400" />
                    <span>Activer le son</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="h-4 w-4 text-white" />
                    <span>Couper le son</span>
                  </>
                )}
              </button>

            </div>
          </div>

        </div>
      </div>

      {/* Partner logos row - Collé en bas de page */}
      <div className="relative z-10 w-full border-t border-white/10 bg-neutral-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-5 py-3 sm:gap-12 sm:px-8">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={withBasePath(partner.src || '/placeholder.svg')}
              alt={`Logo ${partner.name}`}
              className="h-4 w-auto object-contain opacity-70 transition-opacity hover:opacity-100 sm:h-5"
            />
          ))}
        </div>
      </div>
    </section>
  )
}