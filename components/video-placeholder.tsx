import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'

type VideoPlaceholderProps = {
  className?: string
  label?: string
  aspect?: '16/9' | 'video' | 'none'
}

export function VideoPlaceholder({
  className,
  label,
  aspect = 'video',
}: VideoPlaceholderProps) {
  return (
    <div
      className={cn(
        'group relative flex items-center justify-center overflow-hidden rounded-xl bg-neutral-900 text-neutral-100',
        aspect === 'video' && 'aspect-video',
        className,
      )}
      role="img"
      aria-label={label ?? 'Lecteur vidéo'}
    >
      {/* subtle grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
      <button
        type="button"
        aria-label="Lire la vidéo"
        className="relative z-10 flex size-16 items-center justify-center rounded-full bg-background/95 text-foreground shadow-lg transition-transform duration-300 group-hover:scale-110"
      >
        <Play className="size-6 translate-x-0.5 fill-foreground" strokeWidth={1.5} />
      </button>
      {label ? (
        <span className="absolute bottom-4 left-4 z-10 text-xs font-medium uppercase tracking-widest text-neutral-400">
          {label}
        </span>
      ) : null}
    </div>
  )
}
