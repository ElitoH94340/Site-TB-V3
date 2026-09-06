import type { MouseEventHandler } from 'react'
import { cn } from '@/lib/utils'

type VideoPlayButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  label?: string
}

export function VideoPlayButton({
  onClick,
  className,
  label = 'Lancer la vidéo',
}: VideoPlayButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'relative z-20 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-xl transition-all duration-300 hover:border-red-500 hover:bg-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]',
        className,
      )}
      aria-label={label}
    >
      <svg className="h-8 w-8 sm:h-10 sm:w-10 fill-current ml-1" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  )
}
