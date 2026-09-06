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
    <header className="site-header" style={{ width: '100%' }}>
      {/* On force le parent en display flex sur toute la largeur */}
      <div 
        className="site-header-bar" 
        style={{ display: 'flex', alignItems: 'center', width: '100%', boxSizing: 'border-box' }}
      >
        <Link
          href="/"
          aria-label="Retour à l'accueil"
          className="site-header-brand"
          style={{ flexShrink: 0, marginRight: '3rem' }}
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

        {/* On force le nav à prendre tout l'espace restant */}
        <nav 
          aria-label="Navigation principale" 
          className="site-nav-desktop"
          style={{ flex: 1, display: 'flex', minWidth: 0 }}
        >
          {/* On force la liste à occuper 100% et à étaler les liens */}
          <ul 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              width: '100%', 
              justify: 'space-evenly', 
              justifyContent: 'space-evenly',
              listStyle: 'none',
              margin: 0,
              padding: 0 
            }}
          >
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
          className="site-nav-burger"
          style={{ marginLeft: 'auto' }}
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
