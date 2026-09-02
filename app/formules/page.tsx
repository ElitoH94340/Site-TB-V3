import type { Metadata } from 'next'
import { FormulasView } from '@/components/views/formulas-view'

export const metadata: Metadata = {
  title: 'Nos formules',
  description:
    'Immersion, immersion filmée et captation : les formules de doublage proposées par Tournez Bobines.',
}

export default function FormulesPage() {
  return <FormulasView />
}
