import type { Metadata } from 'next'
import { FactoryView } from '@/components/views/factory-view'

export const metadata: Metadata = {
  title: 'La Fabrique',
  description: 'La Fabrique Tournez Bobines : modules pédagogiques et immersion dans le doublage.',
}

export default function FabriquePage() {
  return <FactoryView />
}
