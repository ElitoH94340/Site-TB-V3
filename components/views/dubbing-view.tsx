import { VideoPlaceholder } from '@/components/video-placeholder'

const COLUMNS = [
  {
    title: 'Cinéma & séries',
    text: 'Un doublage haut de gamme pour longs métrages et fictions, porté par des comédiens confirmés et une direction artistique exigeante.',
  },
  {
    title: 'Documentaires',
    text: 'Voix off claires et narration immersive pour transmettre le savoir avec justesse, dans plus de trente langues.',
  },
  {
    title: 'Contenus web',
    text: 'Des formats courts aux séries digitales, un doublage réactif et abordable pensé pour les créateurs et les marques.',
  },
]

export function DubbingView() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-32 pb-24 sm:px-8">
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-brand">
          Doublage pour tous
        </p>
        <h1 className="text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Un savoir-faire pour chaque format
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Quel que soit votre projet, nous adaptons notre expertise à vos
          besoins et à votre budget, sans compromis sur la qualité.
        </p>
      </header>

      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        {COLUMNS.map((col) => (
          <div key={col.title} className="flex flex-col">
            <h2 className="text-center font-serif text-2xl tracking-tight">
              {col.title}
            </h2>
            <div className="mt-5">
              <VideoPlaceholder label={col.title} />
            </div>
            <p className="mt-5 text-pretty text-center text-sm leading-relaxed text-muted-foreground">
              {col.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
