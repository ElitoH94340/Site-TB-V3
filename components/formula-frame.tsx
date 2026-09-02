import { cn } from '@/lib/utils'

export function FormulaFrame({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'group relative z-10 flex h-full flex-col justify-between bg-transparent p-6 transition-all duration-300 ease-out sm:p-8',
        className,
      )}
    >
      <div className="pointer-events-none absolute top-4 left-4 z-20">
        <div className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:scale-90 group-hover:opacity-0" />
        <div className="absolute top-0 left-0 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rotate-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:rotate-90 group-hover:opacity-100">
          <div className="absolute h-0.5 w-full bg-red-600" />
          <div className="absolute h-full w-0.5 bg-red-600" />
        </div>
      </div>
      <div className="pointer-events-none absolute top-4 right-4 z-20">
        <div className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-90 group-hover:opacity-0" />
        <div className="absolute top-0 right-0 flex h-5 w-5 translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rotate-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:rotate-90 group-hover:opacity-100">
          <div className="absolute h-0.5 w-full bg-red-600" />
          <div className="absolute h-full w-0.5 bg-red-600" />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-4 left-4 z-20">
        <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:scale-90 group-hover:opacity-0" />
        <div className="absolute bottom-0 left-0 flex h-5 w-5 -translate-x-1/2 translate-y-1/2 scale-75 items-center justify-center rotate-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:rotate-90 group-hover:opacity-100">
          <div className="absolute h-0.5 w-full bg-red-600" />
          <div className="absolute h-full w-0.5 bg-red-600" />
        </div>
      </div>
      <div className="pointer-events-none absolute right-4 bottom-4 z-20">
        <div className="absolute right-0 bottom-0 h-6 w-6 border-r-2 border-b-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:scale-90 group-hover:opacity-0" />
        <div className="absolute right-0 bottom-0 flex h-5 w-5 translate-x-1/2 translate-y-1/2 scale-75 items-center justify-center rotate-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:rotate-90 group-hover:opacity-100">
          <div className="absolute h-0.5 w-full bg-red-600" />
          <div className="absolute h-full w-0.5 bg-red-600" />
        </div>
      </div>

      <div className="pointer-events-none absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 bg-neutral-500/50 transition-all duration-500 ease-out group-hover:scale-125 group-hover:rotate-90 group-hover:bg-red-600" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-px w-3 -translate-y-1/2 bg-neutral-500/50 transition-all duration-500 ease-out group-hover:scale-125 group-hover:rotate-90 group-hover:bg-red-600" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-3 w-px -translate-x-1/2 bg-neutral-500/50 transition-all duration-500 ease-out group-hover:scale-125 group-hover:rotate-90 group-hover:bg-red-600" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 bg-neutral-500/50 transition-all duration-500 ease-out group-hover:scale-125 group-hover:rotate-90 group-hover:bg-red-600" />

      <div className="pointer-events-none absolute inset-4 z-0 rounded-lg bg-[repeating-linear-gradient(135deg,rgba(220,38,38,0.25),rgba(220,38,38,0.25)_1px,transparent_1px,transparent_12px)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:inset-5" />

      <div className="relative z-10 flex h-full flex-col justify-between">{children}</div>
    </div>
  )
}
