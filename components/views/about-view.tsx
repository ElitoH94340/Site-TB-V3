'use client'

import { useState, useEffect } from 'react'
import { FormulaFrame } from '@/components/formula-frame'
import { withBasePath } from '@/lib/paths'

export function AboutView() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const rawHash = window.location.hash
    const wantsContact =
      params.get('to') === 'contact' || rawHash.replace(/#/g, '') === 'contact'

    if (!wantsContact) return

    window.history.replaceState(null, '', `${withBasePath('/qui-sommes-nous')}/#contact`.replace(/\/+#/, '/#'))

    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    let cancelled = false
    const timeoutId = window.setTimeout(() => {
      if (cancelled) return
      const target = document.getElementById('contact')
      if (!target) return
      const top = target.getBoundingClientRect().top + window.scrollY - 20
      window.scrollTo({ top, behavior: 'smooth' })
    }, 250)

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
      window.history.scrollRestoration = previousRestoration
    }
  }, [])

  const teamRoles = [
    {
      id: 'adaptateur',
      subtitle: 'ADAPTATION',
      summary: 'Un auteur-adaptateur de doublage, bilingue en anglais et expert.',
    },
    {
      id: 'direction',
      subtitle: 'DIRECTION & PÉDAGOGIE',
      summary: 'Une professeure des écoles, ancienne directrice de salles de cinémas.',
    },
    {
      id: 'technique',
      subtitle: 'TECHNIQUE & LANGUE',
      summary: 'Une ingénieure d’études, professeure de français langue étrangère à l’université.',
    },
  ]

  return (
    <section className="relative w-full bg-black text-neutral-50 overflow-hidden pt-20 select-none">
      
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

      {/* CONTENEUR PRINCIPAL GLOBAL */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-12 sm:px-8 w-full">
        
        <header className="text-center animate-text-sweep">
          {/* Sous-titre en rouge avec la taille et le style exacts du header */}
          <p className="mb-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
            Qui sommes-nous ?
          </p>
          <h1 className="text-balance font-serif italic text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight drop-shadow-md mb-8">
            Une équipe passionnée par la voix
          </h1>
          
          <p className="text-pretty text-base leading-relaxed text-neutral-300 max-w-2xl mx-auto mb-16">
            A l&apos;origine trois ami.e.s passionné.e.s de cinéma, aux compétences complémentaires.
          </p>

          {/* TRIPTYQUE ÉLARGI AVEC ESPACEMENT ACCRU ET SOUS-TITRES SUR UNE SEULE LIGNE */}
          <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-3 lg:gap-14 my-12 w-full text-left">
            {teamRoles.map((role) => (
              <div key={role.id} className="block h-full cursor-default no-underline">
                <FormulaFrame>
                  <div className="flex h-full flex-col items-center text-center px-6 py-6 sm:py-8">
                    <span className="mb-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-red-500 whitespace-nowrap">
                      {role.subtitle}
                    </span>
                    <p className="flex-1 text-balance text-white text-[16px] leading-[1.618] font-light">
                      {role.summary}
                    </p>
                  </div>
                </FormulaFrame>
              </div>
            ))}
          </div>

          <p className="text-pretty text-base leading-relaxed text-neutral-300 max-w-2xl mx-auto mt-16">
            L&apos;équipe s&apos;est enrichie d&apos;assistants techniques et de coordinatrices.
          </p>
        </header>

        {/* CONTENEUR RESTREINT (max-w-4xl) POUR CALER LA VIDÉO ET LE PRINCIPE SUR LA LARGEUR DU FORMULAIRE */}
        <div className="mx-auto max-w-4xl w-full">
          
          {/* BLOC VIDÉO AVEC LA DOUBLE BORDURE EXACTE */}
          <div className="mt-14 relative w-full animate-text-sweep" style={{ animationDelay: '200ms' }}>
            <div className="relative w-full border border-white/10 bg-neutral-900/40 p-2 sm:p-3 shadow-2xl backdrop-blur-md">
              <div 
                className="relative h-full w-full aspect-video overflow-hidden border border-white/10 bg-black flex items-center justify-center cursor-pointer group"
                onClick={() => setIsVideoPlaying(true)}
              >
                {!isVideoPlaying ? (
                  <>
                    <img 
                      src="https://i.ytimg.com/vi/BVycG1JWfW4/maxresdefault.jpg" 
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
                    src="https://www.youtube.com/embed/BVycG1JWfW4?autoplay=1&rel=0"
                    title="Lecteur vidéo YouTube"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>

          {/* SECTION LE PRINCIPE AVEC LE COMPOSANT FORMULAFRAME */}
          <div className="mt-14 relative w-full animate-text-sweep cursor-default" style={{ animationDelay: '400ms' }}>
            <FormulaFrame>
              <div className="relative z-10 text-center max-w-2xl mx-auto px-6 py-10 sm:py-14">
                <h2 className="text-balance font-serif italic text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight drop-shadow-md mb-6">
                  Le principe
                </h2>
                <p className="text-pretty text-base leading-relaxed text-neutral-300">
                  Un véritable auditorium de doublage se déplace pour vous proposer de vivre en direct une expérience cinématographique dans les meilleures conditions.
                  <br /><br />
                  A partir de nombreux extraits de films cultes, nous offrons au public la possibilité de se mettre, pendant un temps, dans la peau des comédiens à l&apos;image.
                  <br /><br />
                  Grâce à des moyens techniques professionnels, le public peut choisir parmi plus de 200 extraits de films. La projection et la mise en situation sont alors possibles grâce au texte qui défile sous l&apos;image sur une bande rythmo synchrone.
                </p>
              </div>
            </FormulaFrame>
          </div>

        </div>

      </div>

      {/* SECTION CONTACT PLEINE LARGEUR EN BLANC */}
      <div id="contact" className="w-full bg-white text-neutral-900 py-20 mt-14 animate-text-sweep" style={{ animationDelay: '600ms' }}>
        <div className="mx-auto max-w-4xl px-5 sm:px-8 w-full">
          
          {/* BLOC CONTACT CLAIR */}
          <div className="border border-neutral-300 bg-neutral-100/80 p-6 sm:p-10 shadow-xl backdrop-blur-md">
            
            <h2 className="text-balance font-serif italic text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight drop-shadow-sm mb-10 text-center text-neutral-900">
              Contact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              
              <form className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="text" 
                    placeholder="Votre nom" 
                    className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-600 transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Votre email" 
                    className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-600 transition-colors"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Sujet de votre demande" 
                  className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-600 transition-colors"
                />
                <textarea 
                  placeholder="Votre message..." 
                  rows={4}
                  className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
                ></textarea>
                
                <button 
                  type="button"
                  className="inline-flex items-center justify-center px-8 py-3 border border-neutral-400 bg-neutral-900 text-white font-medium text-xs sm:text-sm tracking-wide shadow-md transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:text-white cursor-pointer"
                >
                  Envoyer le message
                </button>
              </form>

              <div className="flex flex-col justify-center gap-6 text-sm text-neutral-700 leading-relaxed border-t border-neutral-300 pt-8 md:border-t-0 md:pt-0 md:border-l md:pl-10">
                <p>
                  Pour toute information ou demande de devis, complétez le formulaire ci-contre ou contactez-nous directement :
                </p>
                <ul className="space-y-4">
                  <li className="flex flex-col gap-1">
                    <span className="font-semibold text-neutral-900">Jean-Jacques PRON</span>
                    <a href="tel:+33682831034" className="text-neutral-600 hover:text-neutral-950 transition-colors">
                      06 82 83 10 34
                    </a>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="font-semibold text-neutral-900">Véronique ATTISSO</span>
                    <a href="tel:+33613647259" className="text-neutral-600 hover:text-neutral-950 transition-colors">
                      06 13 64 72 59
                    </a>
                  </li>
                  <li className="flex flex-col gap-1 pt-2 border-t border-neutral-200">
                    <span className="font-semibold text-neutral-900">Email</span>
                    <a href="mailto:contact@doublagetournezbobines.fr" className="text-red-600 hover:text-red-700 transition-colors break-all">
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