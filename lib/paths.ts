/** Préfixe les chemins public/ pour GitHub Pages (basePath). */
export function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  if (!path.startsWith('/') || path.startsWith('http')) return path
  return `${base}${path}`
}
