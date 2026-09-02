export type ViewId = 'home' | 'about' | 'dubbing' | 'formulas' | 'factory' | 'events'

export const NAV_ITEMS: { id: ViewId; label: string; href: string }[] = [
  { id: 'about', label: 'QUI SOMMES-NOUS', href: '/qui-sommes-nous' },
  { id: 'dubbing', label: 'DOUBLAGE POUR TOUS', href: '/doublage' },
  { id: 'formulas', label: 'NOS FORMULES', href: '/formules' },
  { id: 'factory', label: 'LA FABRIQUE', href: '/fabrique' },
  { id: 'events', label: 'EVENEMENTS', href: '/evenements' },
]
