'use client'

import { cn } from '@/lib/utils'
import type { ViewId } from '@/lib/views'
import { NAV_ITEMS } from '@/lib/views'

type SiteHeaderProps = {
  active: ViewId
  onNavigate: (view: ViewId) => void
}

export function SiteHeader({ active, onNavigate }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo / home button */}
        <button
          type="button"
          onClick={() => onNavigate('home')}
          aria-label="Retour à l'accueil"
          className="flex items-center gap-3 cursor-pointer"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-foreground text-background">
            <span className="size-3 rounded-full bg-background" />
          </span>
          <span className="font-serif text-xl leading-none tracking-tight">Tournez Bobines</span>
        </button>

        {/* Navigation */}
        <nav aria-label="Navigation principale" className="h-full">
          <ul className="flex h-full items-center gap-6 sm:gap-10">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id} className="h-full flex items-center">
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'group relative h-full flex items-center text-base transition-colors cursor-pointer',
                      isActive
                        ? 'text-foreground font-medium'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {item.label}

                    {/* Point actif centré pile sur la ligne du header */}
                    <span
                      className={cn(
                        'absolute bottom-0 left-1/2 size-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-brand transition-opacity z-10',
                        isActive ? 'opacity-100' : 'opacity-0',
                      )}
                    />

                    {/* Ligne de balayage au survol alignée sur le bord bas */}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-foreground transition-transform duration-300 ease-out origin-center scale-x-0 group-hover:scale-x-100" />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}