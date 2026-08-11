'use client'

import { cn } from '@/lib/utils'
import type { ViewId } from '@/lib/views'
import { NAV_ITEMS } from '@/lib/views'
import Image from 'next/image'

type SiteHeaderProps = {
  active: ViewId
  onNavigate: (view: ViewId) => void
}

export function SiteHeader({ active, onNavigate }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur-md">
      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; box-shadow: 0 0 8px rgba(220, 38, 38, 0.4); }
          50% { opacity: 1; box-shadow: 0 0 16px rgba(220, 38, 38, 0.8); }
        }
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }
      `}</style>

      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo / home button */}
        <button
          type="button"
          onClick={() => onNavigate('home')}
          aria-label="Retour à l'accueil"
          className="flex items-center gap-3 cursor-pointer group"
        >
          <span className="relative flex size-[56px] items-center justify-center">
            {/* Conteneur rotatif pour l'image du logo */}
            <span className="absolute inset-0 flex items-center justify-center animate-spin-slow">
              <Image
                src="/tournez bobines logo 3.png"
                alt="Logo Tournez Bobines"
                width={56}
                height={56}
                className="size-[56px] object-contain"
              />
            </span>
          </span>
          <span className="text-balance font-serif italic text-2xl sm:text-3xl leading-tight tracking-tight drop-shadow-md text-white">
            Tournez Bobines
          </span>
        </button>

        {/* Navigation */}
        <nav aria-label="Navigation principale" className="h-full">
          <ul className="flex h-full items-center gap-9 sm:gap-16">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id} className="h-full flex items-center">
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'group relative h-full flex items-center text-[9px] sm:text-[11px] uppercase tracking-[0.2em] transition-colors cursor-pointer',
                      isActive
                        ? 'text-white font-medium'
                        : 'text-neutral-400 hover:text-white',
                    )}
                  >
                    {item.label}

                    {/* Conteneur du point actif avec fond noir élargi */}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 flex items-center justify-center">
                        {/* Fond noir plus gros de quelques pixels pour l'isolation */}
                        <span className="absolute size-4 rounded-full bg-neutral-950/90 blur-[1px]" />
                        {/* Point rouge clignotant au premier plan */}
                        <span className="relative size-2 rounded-full bg-red-600 animate-pulse-glow" />
                      </div>
                    )}

                    {/* Ligne de balayage au survol alignée sur le bord bas */}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white transition-transform duration-300 ease-out origin-center scale-x-0 group-hover:scale-x-100" />
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