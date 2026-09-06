import { cn } from '@/lib/utils'

export function FormulaFrame({
  children,
  className,
  active = false,
}: {
  children: React.ReactNode
  className?: string
  active?: boolean
}) {
  return (
    <div
      // On ajoute un attribut data-active pour pouvoir forcer les états du groupe en CSS si besoin, ou on gère les classes directement
      data-active={active}
      className={cn(
        'group/frame relative z-10 flex h-full flex-col justify-between bg-transparent p-6 transition-all duration-300 ease-out sm:p-8',
        // Si active est true, on force le comportement des enfants du groupe comme s'ils étaient survolés
        active && '[&_*]:pointer-events-auto',
        className,
      )}
    >
      {/* Coins haut-gauche */}
      <div className="pointer-events-none absolute top-4 left-4 z-20">
        <div className={cn(
          "absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover/frame:-translate-x-1 group-hover/frame:-translate-y-1 group-hover/frame:scale-90 group-hover/frame:opacity-0",
          active && "-translate-x-1 -translate-y-1 scale-90 opacity-0"
        )} />
        <div className={cn(
          "absolute top-0 left-0 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rotate-0 opacity-0 transition-all duration-500 ease-out group-hover/frame:scale-100 group-hover/frame:rotate-90 group-hover/frame:opacity-100",
          active && "scale-100 rotate-90 opacity-100"
        )}>
          <div className="absolute h-0.5 w-full bg-red-600" />
          <div className="absolute h-full w-0.5 bg-red-600" />
        </div>
      </div>

      {/* Coins haut-droite */}
      <div className="pointer-events-none absolute top-4 right-4 z-20">
        <div className={cn(
          "absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover/frame:translate-x-1 group-hover/frame:-translate-y-1 group-hover/frame:scale-90 group-hover/frame:opacity-0",
          active && "translate-x-1 -translate-y-1 scale-90 opacity-0"
        )} />
        <div className={cn(
          "absolute top-0 right-0 flex h-5 w-5 translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rotate-0 opacity-0 transition-all duration-500 ease-out group-hover/frame:scale-100 group-hover/frame:rotate-90 group-hover/frame:opacity-100",
          active && "scale-100 rotate-90 opacity-100"
        )}>
          <div className="absolute h-0.5 w-full bg-red-600" />
          <div className="absolute h-full w-0.5 bg-red-600" />
        </div>
      </div>

      {/* Coins bas-gauche */}
      <div className="pointer-events-none absolute bottom-4 left-4 z-20">
        <div className={cn(
          "absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover/frame:-translate-x-1 group-hover/frame:translate-y-1 group-hover/frame:scale-90 group-hover/frame:opacity-0",
          active && "-translate-x-1 translate-y-1 scale-90 opacity-0"
        )} />
        <div className={cn(
          "absolute bottom-0 left-0 flex h-5 w-5 -translate-x-1/2 translate-y-1/2 scale-75 items-center justify-center rotate-0 opacity-0 transition-all duration-500 ease-out group-hover/frame:scale-100 group-hover/frame:rotate-90 group-hover/frame:opacity-100",
          active && "scale-100 rotate-90 opacity-100"
        )}>
          <div className="absolute h-0.5 w-full bg-red-600" />
          <div className="absolute h-full w-0.5 bg-red-600" />
        </div>
      </div>

      {/* Coins bas-droite */}
      <div className="pointer-events-none absolute right-4 bottom-4 z-20">
        <div className={cn(
          "absolute right-0 bottom-0 h-6 w-6 border-r-2 border-b-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover/frame:translate-x-1 group-hover/frame:translate-y-1 group-hover/frame:scale-90 group-hover/frame:opacity-0",
          active && "translate-x-1 translate-y-1 scale-90 opacity-0"
        )} />
        <div className={cn(
          "absolute right-0 bottom-0 flex h-5 w-5 translate-x-1/2 translate-y-1/2 scale-75 items-center justify-center rotate-0 opacity-0 transition-all duration-500 ease-out group-hover/frame:scale-100 group-hover/frame:rotate-90 group-hover/frame:opacity-100",
          active && "scale-100 rotate-90 opacity-100"
        )}>
          <div className="absolute h-0.5 w-full bg-red-600" />
          <div className="absolute h-full w-0.5 bg-red-600" />
        </div>
      </div>

      {/* Traits médians */}
      <div className={cn("pointer-events-none absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 bg-neutral-500/50 transition-all duration-500 ease-out group-hover/frame:scale-125 group-hover/frame:rotate-90 group-hover/frame:bg-red-600", active && "scale-125 rotate-90 bg-red-600")} />
      <div className={cn("pointer-events-none absolute top-1/2 right-0 h-px w-3 -translate-y-1/2 bg-neutral-500/50 transition-all duration-500 ease-out group-hover/frame:scale-125 group-hover/frame:rotate-90 group-hover/frame:bg-red-600", active && "scale-125 rotate-90 bg-red-600")} />
      <div className={cn("pointer-events-none absolute top-0 left-1/2 h-3 w-px -translate-x-1/2 bg-neutral-500/50 transition-all duration-500 ease-out group-hover/frame:scale-125 group-hover/frame:rotate-90 group-hover/frame:bg-red-600", active && "scale-125 rotate-90 bg-red-600")} / >
      <div className={cn("pointer-events-none absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 bg-neutral-500/50 transition-all duration-500 ease-out group-hover/frame:scale-125 group-hover/frame:rotate-90 group-hover/frame:bg-red-600", active && "scale-125 rotate-90 bg-red-600")} />

      {/* Fond hachuré */}
      <div className={cn(
        "pointer-events-none absolute inset-4 z-0 rounded-lg bg-[repeating-linear-gradient(135deg,rgba(220,38,38,0.25),rgba(220,38,38,0.25)_1px,transparent_1px,transparent_12px)] opacity-0 transition-opacity duration-300 group-hover/frame:opacity-100 sm:inset-5",
        active && "opacity-100"
      )} />

      <div className="relative z-10 flex h-full flex-col justify-between">{children}</div>
    </div>
  )
}