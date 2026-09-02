'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FormulaFrame } from '@/components/formula-frame'
import { FORMULAS } from '@/lib/formulas'

export function FormulasView() {
  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (!hash) return

    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    let cancelled = false
    const timeoutId = window.setTimeout(() => {
      if (cancelled) return
      const target = document.getElementById(hash)
      if (!target) return
      const top = target.getBoundingClientRect().top + window.scrollY - 30
      window.scrollTo({ top, behavior: 'smooth' })
    }, 250)

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
      window.history.scrollRestoration = previousRestoration
    }
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-neutral-950 pt-20 pb-24 text-neutral-50 select-none">
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

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pt-12 sm:px-8">
        <header className="animate-text-sweep text-center">
          <p className="mb-2.5 text-[10px] font-semibold tracking-[0.3em] text-red-500 uppercase sm:text-xs">
            Nos formules
          </p>
          <h1 className="text-balance font-serif text-3xl leading-tight tracking-tight italic drop-shadow-md sm:text-4xl lg:text-5xl">
            Immersion, immersion filmée, captation
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-neutral-300">
            Trois façons de vivre le doublage, de l&apos;expérience en direct à la captation filmée.
            Le déroulé est identique : vous choisissez un extrait, vous vous entraînez, puis vous jouez la scène.
          </p>
        </header>
      </div>

      <div className="relative z-10 mx-auto mt-10 w-full max-w-7xl px-4 py-12 sm:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3 lg:gap-12">
          {FORMULAS.map((formula) => {
            const isPlaying = playingVideos[formula.id]

            return (
              <div key={formula.id} id={formula.id} className="scroll-mt-28">
                <FormulaFrame>
                  <div>
                    <div className="mb-4 flex min-h-[3.2rem] items-center justify-center border-b border-white/10 pb-3 text-center transition-colors duration-300 group-hover:border-transparent">
                      <h2 className="font-serif text-2xl tracking-tight text-neutral-100 italic drop-shadow-sm sm:text-3xl">
                        {formula.title}
                      </h2>
                    </div>

                    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
                      {isPlaying ? (
                        <iframe
                          className="absolute top-0 left-0 h-full w-full bg-black md:scale-105"
                          src={`https://www.youtube.com/embed/${formula.videoId}?autoplay=1&rel=0`}
                          title={formula.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : (
                        <div
                          className="group/video relative flex h-full w-full cursor-pointer items-center justify-center"
                          onClick={() =>
                            setPlayingVideos((prev) => ({ ...prev, [formula.id]: true }))
                          }
                        >
                          <img
                            src={`https://i.ytimg.com/vi/${formula.videoId}/hqdefault.jpg`}
                            alt={formula.title}
                            className="absolute inset-0 h-full w-full object-cover opacity-80 md:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/20" />
                          <button
                            type="button"
                            className="relative z-10 flex h-12 w-16 items-center justify-center rounded-xl bg-red-600 shadow-xl transition-transform duration-300 group-hover/video:scale-110"
                            aria-label={`Lancer la vidéo ${formula.title}`}
                          >
                            <svg className="ml-0.5 h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-1 flex-col justify-between">
                    <div className="w-full space-y-4 rounded-2xl border border-white/20 bg-white/8 p-4 shadow-2xl backdrop-blur-md sm:p-5">
                      {formula.steps.map((step) => (
                        <div key={step.num} className="flex cursor-default items-start gap-2.5 text-left">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-end">
                            <span className="font-serif text-base text-white italic">{step.num}</span>
                          </div>
                          <div className="mt-2.5 flex w-4 shrink-0 items-center">
                            <div className="h-px w-full bg-neutral-500/80" />
                          </div>
                          <p className="pt-0.5 text-xs leading-relaxed text-neutral-200">
                            {step.highlight ? (
                              <>
                                <strong className="font-semibold text-red-500">{step.highlight}</strong>
                                {step.text ? (
                                  <>
                                    <br />
                                    {step.text}
                                  </>
                                ) : null}
                              </>
                            ) : (
                              step.text
                            )}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="pt-4 text-center text-xs font-semibold text-white italic sm:text-sm">
                      Devis disponible sur demande
                    </p>
                  </div>
                </FormulaFrame>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/qui-sommes-nous?to=contact"
            scroll={false}
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/8 px-8 py-3 text-xs font-medium tracking-wide text-neutral-200 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] sm:text-sm"
          >
            Contactez-nous pour votre projet
          </Link>
        </div>
      </div>
    </section>
  )
}
