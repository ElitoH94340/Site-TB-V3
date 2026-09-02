'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/views'
import { withBasePath } from '@/lib/paths'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    const onPointerDown = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('pointerdown', onPointerDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-800 bg-neutral-950">
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

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          aria-label="Retour à l'accueil"
          className="flex min-w-0 items-center gap-3 cursor-pointer group"
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative flex size-11 sm:size-14 shrink-0 items-center justify-center">
            <span className="absolute inset-0 flex items-center justify-center animate-spin-slow">
              <img
                src={withBasePath('/tournez bobines logo 3.png')}
                alt="Logo Tournez Bobines"
                width={56}
                height={56}
                className="size-11 sm:size-14 object-contain"
              />
            </span>
          </span>
          <span className="truncate text-balance font-serif italic text-xl sm:text-3xl leading-tight tracking-tight drop-shadow-md text-white">
            Tournez Bobines
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block h-full">
          <ul className="flex h-full items-center gap-6 xl:gap-10">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href || pathname === `${item.href}/`
              return (
                <li key={item.id} className="flex h-full items-center">
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'group relative flex h-full items-center text-[11px] uppercase tracking-[0.2em] transition-colors cursor-pointer',
                      isActive
                        ? 'text-white font-medium'
                        : 'text-neutral-400 hover:text-white',
                    )}
                  >
                    {item.label}

                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 translate-y-1/2 items-center justify-center">
                        <span className="absolute size-4 rounded-full bg-neutral-950/90 blur-[1px]" />
                        <span className="relative size-2 rounded-full bg-red-600 animate-pulse-glow" />
                      </div>
                    )}

                    {!isActive && (
                      <span className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div ref={menuRef} className="relative lg:hidden">
          <button
            type="button"
            className="flex size-11 items-center justify-center text-white cursor-pointer"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? 'Fermer' : 'Menu'}</span>
            <span className="relative block h-4 w-6">
              <span
                className={cn(
                  'absolute left-0 h-0.5 w-6 bg-current transition-all duration-300',
                  menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 bg-current transition-all duration-300',
                  menuOpen ? 'scale-x-0 opacity-0' : 'opacity-100',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 h-0.5 w-6 bg-current transition-all duration-300',
                  menuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0',
                )}
              />
            </span>
          </button>

          <nav
            id="mobile-nav"
            aria-label="Navigation mobile"
            className={cn(
              'absolute right-0 top-full mt-2 min-w-[16rem] border border-neutral-800 bg-neutral-950 py-3 shadow-xl transition-all duration-200',
              menuOpen
                ? 'pointer-events-auto translate-y-0 opacity-100'
                : 'pointer-events-none -translate-y-1 opacity-0',
            )}
            aria-hidden={!menuOpen}
          >
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href || pathname === `${item.href}/`
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        'flex items-center justify-end gap-2 px-4 py-3 text-right text-[11px] uppercase tracking-[0.2em] transition-colors',
                        isActive
                          ? 'font-medium text-white'
                          : 'text-neutral-400 hover:text-white',
                      )}
                    >
                      {isActive && (
                        <span className="size-1.5 shrink-0 rounded-full bg-red-600 animate-pulse-glow" />
                      )}
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
