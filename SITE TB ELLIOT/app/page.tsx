import type { Metadata } from 'next'
import { HomeView } from '@/components/views/home-view'

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'Tournez Bobines — studio de doublage, ateliers et événements.',
}

export default function Page() {
  return <HomeView />
}
