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
      `}</style>

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