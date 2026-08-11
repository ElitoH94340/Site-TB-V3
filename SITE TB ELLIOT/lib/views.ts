export type ViewId = 'home' | 'about' | 'dubbing' | 'factory' | 'events'

export const NAV_ITEMS: { id: ViewId; label: string }[] = [
  { id: 'about', label: '[ QUI SOMMES-NOUS ]' },
  { id: 'dubbing', label: '[ DOUBLAGE POUR TOUS ]' },
  { id: 'factory', label: '[ LA FABRIQUE ]' },
  { id: 'events', label: '[ EVENEMENTS ]' },
]
