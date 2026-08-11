import type { Metadata } from 'next'
import { DubbingView } from '@/components/views/dubbing-view'

export const metadata: Metadata = {
  title: 'Doublage pour tous',
  description: 'Ateliers et expériences de doublage accessibles à tous avec Tournez Bobines.',
}

export default function DoublagePage() {
  return <DubbingView />
}
