import type { Metadata } from 'next'
import { EventsView } from '@/components/views/events-view'

export const metadata: Metadata = {
  title: 'Événements',
  description: 'Événements, ateliers et animations doublage organisés par Tournez Bobines.',
}

export default function EvenementsPage() {
  return <EventsView />
}
