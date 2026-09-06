import Image from 'next/image'
import { withBasePath } from '@/lib/paths'

const partners = [
  { name: 'Partenaire 1', src: '/logos-01.svg' },
  { name: 'Partenaire 2', src: '/logos-02.svg' },
  { name: 'Partenaire 3', src: '/logos-03.svg' },
  { name: 'Partenaire 4', src: '/logos-04.svg' },
  { name: 'Partenaire 5', src: '/logos-05.svg' },
]

export function SiteFooter() {
  return (
    <footer className="bg-black py-4 px-4 sm:px-12 lg:px-20 border-t border-neutral-900">
      <div className="w-full grid grid-cols-5 gap-3 sm:gap-6 md:gap-8 items-center justify-items-center">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="relative flex h-16 w-full items-center justify-center"
          >
            <Image
              src={withBasePath(partner.src)}
              alt={partner.name}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 20vw, (max-width: 1024px) 20vw, 200px"
              quality={100}
              unoptimized={partner.src.endsWith('.svg')}
            />
          </div>
        ))}
      </div>
    </footer>
  )
}
