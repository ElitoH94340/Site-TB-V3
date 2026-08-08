'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { HomeView } from '@/components/views/home-view'
import { AboutView } from '@/components/views/about-view'
import { DubbingView } from '@/components/views/dubbing-view'
import { FactoryView } from '@/components/views/factory-view'
import { EventsView } from '@/components/views/events-view'
import type { ViewId } from '@/lib/views'

export default function Page() {
  const [view, setView] = useState<ViewId>('home')

  const handleNavigate = (next: ViewId) => {
    setView(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <SiteHeader active={view} onNavigate={handleNavigate} />
      <main>
        {view === 'home' && <HomeView />}
        {view === 'about' && <AboutView />}
        {view === 'dubbing' && <DubbingView />}
        {view === 'factory' && <FactoryView />}
        {view === 'events' && <EventsView />}
      </main>
    </>
  )
}
