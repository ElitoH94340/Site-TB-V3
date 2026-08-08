'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { VideoPlaceholder } from '@/components/video-placeholder'

const TABS = [
  {
    id: 'casting',
    label: 'Le casting',
    heading: 'Trouver la voix juste',
    text: 'Notre directrice de casting sélectionne les comédiens les plus adaptés à chaque personnage. Timbre, énergie, intention : rien n’est laissé au hasard pour préserver l’émotion originale.',
    images: [
      { src: '/studio-booth.png', alt: 'Cabine de doublage professionnelle' },
      { src: '/recording-session.png', alt: 'Comédien en séance d’enregistrement' },
    ],
    imageText:
      'Des auditions ciblées permettent de comparer plusieurs interprétations avant de figer la distribution finale.',
    cta: 'Découvrir nos voix',
  },
  {
    id: 'recording',
    label: 'L’enregistrement',
    heading: 'Capter la performance',
    text: 'En studio, la direction artistique guide chaque prise pour synchroniser la voix au jeu d’écran. Un travail minutieux, prise après prise.',
    images: [
      { src: '/recording-session.png', alt: 'Séance d’enregistrement en studio' },
      { src: '/studio-booth.png', alt: 'Micro et cabine acoustique' },
    ],
    imageText:
      'Nos cabines traitées acoustiquement garantissent une captation nette, prête pour le mixage.',
    cta: 'Réserver une session',
  },
  {
    id: 'mixing',
    label: 'Le mixage',
    heading: 'Assembler le son',
    text: 'Les ingénieurs du son intègrent les voix à la bande originale, équilibrent les niveaux et livrent un rendu final fidèle et immersif.',
    images: [
      { src: '/mixing-console.png', alt: 'Console de mixage audio' },
      { src: '/studio-booth.png', alt: 'Régie du studio de doublage' },
    ],
    imageText:
      'Chaque livrable est contrôlé selon les normes de diffusion internationales.',
    cta: 'Voir nos formats de livraison',
  },
]

export function FactoryView() {
  const [active, setActive] = useState(TABS[0].id)
  const current = TABS.find((t) => t.id === active) ?? TABS[0]

  return (
    <section className="mx-auto max-w-5xl px-5 pt-32 pb-24 sm:px-8">
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-brand">
          La fabrique à doublage
        </p>
        <h1 className="text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Dans les coulisses de nos studios
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Suivez chaque étape de notre processus, du choix des voix jusqu&apos;au
          mixage final.
        </p>
      </header>

      {/* Pill tabs */}
      <div
        role="tablist"
        aria-label="Étapes de production"
        className="mt-12 flex flex-wrap justify-center gap-2"
      >
        {TABS.map((tab) => {
          const isActive = tab.id === active
          return (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(tab.id)}
              className={cn(
                'rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-foreground text-background'
                  : 'bg-muted text-muted-foreground hover:bg-muted/70',
              )}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Tab panel */}
      <div
        role="tabpanel"
        className="mt-10 rounded-2xl bg-muted/50 p-6 sm:p-10"
      >
        <VideoPlaceholder label={current.label} />

        <div className="mx-auto mt-10 max-w-3xl">
          <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
            {current.heading}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {current.text}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {current.images.map((img) => (
            <div
              key={img.src + img.alt}
              className="relative aspect-video overflow-hidden rounded-xl bg-muted"
            >
              <Image
                src={img.src || '/placeholder.svg'}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
          {current.imageText}
        </p>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {current.cta}
          </button>
        </div>
      </div>
    </section>
  )
}
