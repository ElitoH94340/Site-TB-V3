export type ViewId = 'home' | 'about' | 'dubbing' | 'factory' | 'events'

export const NAV_ITEMS: { id: ViewId; label: string }[] = [
  { id: 'about', label: 'Qui sommes-nous' },
  { id: 'dubbing', label: 'Doublage pour tous' },
  { id: 'factory', label: 'La fabrique' },
  { id: 'events', label: 'Événements' },
]
