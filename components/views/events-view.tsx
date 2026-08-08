import Image from 'next/image'
import { VideoPlaceholder } from '@/components/video-placeholder'

const EVENTS = [
  {
    title: 'Nuit du doublage',
    date: '14 mars 2026 — Paris',
    heading: 'Une soirée dédiée aux voix de l’ombre',
    text: 'Rencontrez les comédiens et directeurs artistiques qui donnent vie à vos films et séries préférés lors d’une soirée de projections et d’échanges.',
    images: [
      { src: '/event-stage.png', alt: 'Scène de l’événement Nuit du doublage' },
      { src: '/recording-session.png', alt: 'Démonstration de doublage en direct' },
    ],
    imageText:
      'Au programme : masterclass, démonstrations live et remise des prix du doublage francophone.',
    cta: 'Réserver ma place',
  },
  {
    title: 'Atelier voix off',
    date: '2 avril 2026 — Lyon',
    heading: 'Initiez-vous au métier',
    text: 'Un atelier pratique pour découvrir les techniques de la voix off, encadré par nos comédiens professionnels dans un vrai studio.',
    images: [
      { src: '/studio-booth.png', alt: 'Cabine d’enregistrement de l’atelier' },
      { src: '/mixing-console.png', alt: 'Console utilisée pendant l’atelier' },
    ],
    imageText:
      'Places limitées à douze participants pour un accompagnement personnalisé du micro au mixage.',
    cta: 'M’inscrire à l’atelier',
  },
]

export function EventsView() {
  return (
    <section className="mx-auto max-w-4xl px-5 pt-32 pb-24 sm:px-8">
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-brand">
          Événements
        </p>
        <h1 className="text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Rencontrons-nous
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Ateliers, projections et rendez-vous professionnels : retrouvez Voxa
          tout au long de l&apos;année.
        </p>
      </header>

      <div className="mt-14 flex flex-col gap-12">
        {EVENTS.map((event) => (
          <article
            key={event.title}
            className="rounded-2xl bg-muted/50 p-6 sm:p-10"
          >
            <div className="text-center">
              <h2 className="font-serif text-3xl tracking-tight">
                {event.title}
              </h2>
              <p className="mt-2 text-sm font-medium uppercase tracking-widest text-brand">
                {event.date}
              </p>
            </div>

            <div className="mt-8">
              <VideoPlaceholder label={event.title} />
            </div>

            <div className="mt-8">
              <h3 className="font-serif text-2xl tracking-tight">
                {event.heading}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {event.text}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {event.images.map((img) => (
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

            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              {event.imageText}
            </p>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                className="rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {event.cta}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
