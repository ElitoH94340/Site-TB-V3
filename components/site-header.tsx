'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/views'
import { withBasePath } from '@/lib/paths'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <header className="site-header">
      {/* 1. La barre devient un conteneur flex prenant toute la largeur */}
      <div className={cn("site-header-bar", "flex items-center w-full")}>
        <Link
          href="/"
          aria-label="Retour à l'accueil"
          /* 2. Le logo garde sa taille (shrink-0) et on lui ajoute une marge à droite (mr-12) */
          className={cn("site-header-brand", "shrink-0 mr-8 lg:mr-16")}
          onClick={() => setMenuOpen(false)}
        >
          <span className="site-header-logo">
            <img
              src={withBasePath('/tournez bobines logo 3.png')}
              alt="Logo Tournez Bobines"
              width={56}
              height={56}
            />
          </span>
          <span className="site-header-title">Tournez Bobines</span>
        </Link>

        {/* 3. Le <nav> prend tout l'espace restant (flex-1) */}
        <nav aria-label="Navigation principale" className={cn("site-nav-desktop", "flex-1")}>
          {/* 4. Le <ul> répartit les éléments uniformément (justify-evenly) sur toute sa largeur */}
          <ul className="flex items-center justify-evenly w-full">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href || pathname === `${item.href}/`
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn('site-nav-link', isActive && 'is-active')}
                  >
                    {item.label}
                    {isActive && (
                      <span className="site-nav-cross" aria-hidden>
                        <span />
                        <span />
                      </span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          /* Ajout d'un ml-auto au cas où la barre serait en flex pour pousser le bouton à droite sur mobile */
          className={cn("site-nav-burger", "ml-auto")}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={cn('site-nav-burger-icon', menuOpen && 'is-open')}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Navigation mobile"
        className={cn('site-nav-mobile', menuOpen && 'is-open')}
        aria-hidden={!menuOpen}
        inert={!menuOpen || undefined}
      >
        <ul>
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href || pathname === `${item.href}/`
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={cn(isActive && 'is-active')}
                >
                  {item.label}
                  {isActive && (
                    <span className="site-nav-cross" aria-hidden>
                      <span />
                      <span />
                    </span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
