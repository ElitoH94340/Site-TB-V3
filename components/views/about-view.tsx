export function AboutView() {
  return (
    <section className="mx-auto max-w-4xl px-5 pt-32 pb-24 sm:px-8">
      <header className="text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-brand">
          Qui sommes-nous ?
        </p>
        <h1 className="text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Une équipe passionnée par la voix
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          A l’origine trois ami.e.s passionné.e.s de cinéma, aux compétences complémentaires.
un auteur-adaptateur de doublage, bilingue en anglais et expert une professeure des écoles, ancienne directrice de salles de cinémas une ingénieure d’études, professeure de français langue étrangère à l’université L’équipe s’est enrichie d’assistants techniques et de coordinatrices.
        </p>
      </header>

      <div className="mt-14 overflow-hidden rounded-2xl border border-border/60 bg-black/5 shadow-md">
        <video
          controls
          preload="metadata"
          className="aspect-video w-full object-cover"
        >
          <source src="/qui-sommes-nous.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>

      <div className="mt-14 text-center">
        <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Le principe
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Un véritable auditorium de doublage se déplace pour vous proposer de vivre en direct une expérience cinématographique dans les meilleures conditions.
A partir de nombreux extraits de films cultes, nous offrons au public la possibilité de se mettre, pendant un temps, dans la peau des comédiens à l’image.
Grâce à des moyens techniques professionnels, le public peut choisir parmi plus de 200 extraits de films. La projection et la mise en situation sont alors possibles grâce au texte qui défile sous l’image sur une bande rythmo synchrone.
        </p>
      </div>
    </section>
  )
}