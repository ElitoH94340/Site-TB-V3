'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const LUDIC_EVENTS = [
  {
    id: 'l1',
    title: 'Festival Les Infatigables',
    date: '28/03/2026 - 29/03/2026',
    desc: 'Fontenay-sous-Bois',
    longText: 'Festival Les Infatigables à Fontenay-sous-Bois.\nLes 28 et 29 mars 2026.',

    videoId: 'ew3o4ZZpU-c',
  },
  {
    id: 'l2',
    title: 'Festival Les Infatigables',
    date: '12/10/2024 - 13/10/2024',
    desc: 'Fontenay-sous-Bois',
    longText: 'Festival Les Infatigables à Fontenay-sous-Bois.\nLes 12 et 13 octobre 2024.',
    videoId: 'ew3o4ZZpU-c',
  },
  {
    id: 'l3',
    title: 'Festival de doublage de Savonnières',
    date: '05/10/2024',
    desc: 'Savonnières',
    longText: 'Festival de doublage de Savonnières.\nLe 5 octobre 2024.',
    videoId: 'aWFopHNTChA',
  },
  {
    id: 'l4',
    title: 'Hors les murs — Quartier des Ardrets',
    date: '11/07/2023',
    desc: 'Brétigny-sur-Orge',
    longText: 'Animation hors les murs dans le Quartier des Ardrets à Brétigny-sur-Orge.\nLe 11 juillet 2023.',
  },
  {
    id: 'l5',
    title: 'Festival Les Infatigables',
    date: '02/04/2023',
    desc: 'Fontenay-sous-Bois',
    longText: 'Festival Les Infatigables à Fontenay-sous-Bois.\nLe 2 avril 2023.',
    videoId: 'ew3o4ZZpU-c',
  },
  {
    id: 'l6',
    title: 'Espace Nelson Mandela',
    date: '02/03/2022',
    desc: 'Brétigny-sur-Orge',
    longText: 'Animation à l’Espace Nelson Mandela, Brétigny-sur-Orge.\nLe 2 mars 2022.',
    videoId: '1Yv4Ka62yb8',
  },
  {
    id: 'l7',
    title: 'Festival de doublage Apt face au virus',
    date: '14/08/2020',
    desc: 'Apt',
    longText: 'Festival de doublage Apt face au virus.\nLe 14 août 2020.',

    videoId: 'GdG4JR9Ht5k',
  },
  {
    id: 'l8',
    title: 'Mâcon Festival Effervescence',
    date: 'Octobre 2018',
    desc: 'Mâcon',
    longText: 'Festival Effervescence à Mâcon.\nOctobre 2018.',

    videoId: '0FRf2DVrxT4',
  },
  {
    id: 'l9',
    title: 'Centre Paris Anim',
    date: '17/02/2018',
    desc: 'Paris 19ème',
    longText: 'Animation au Centre Paris Anim, Paris 19ème.\nLe 17 février 2018.',

    videoId: 'iomLA6-5LDk',
  },
  {
    id: 'l10',
    title: 'Fête scolaire de fin d’année',
    date: '07/07/2017',
    desc: 'Mardeuil',
    longText: 'Fête scolaire de fin d’année à Mardeuil.\nLe 7 juillet 2017.',

    videoId: 'aui1hA8_GS4',
  },
  {
    id: 'l11',
    title: 'Fête du Court Métrage',
    date: '17/12/2016 - 18/12/2016',
    desc: 'Carreau du Temple — Paris 11ème',
    longText: 'Fête du Court Métrage au Carreau du Temple, Paris 11ème.\nLes 17 et 18 décembre 2016.',

    videoId: 'u56qoOOZksA',
  },
  {
    id: 'l12',
    title: 'Festival l’été frappé',
    date: '30/08/2016 - 31/08/2016',
    desc: 'Mâcon',
    longText: 'Festival l’été frappé à Mâcon.\nLes 30 et 31 août 2016.',

    videoId: 'yq44n0JngmQ',
  },
  {
    id: 'l13',
    title: 'Festival de l’humour de résistance',
    date: '17/04/2016',
    desc: 'Chalon-sur-Saône',
    longText: 'Festival de l’humour de résistance à Chalon-sur-Saône.\nLe 17 avril 2016.',

    videoId: 'SLIQDuVI12s',
  },
  {
    id: 'l14',
    title: 'Apt Captation',
    date: '08/08/2015',
    desc: 'Première animation doublage de l’association',
    longText: 'Apt Captation — première animation doublage de l’association.\nLe 8 août 2015.',

    videoId: 'cFaV3rzLHnw',
  },
]

const FACTORY_EVENTS = [
  {
    id: 'f1',
    title: 'École Philippe de Girard',
    date: 'Année 2023',
    desc: 'Classe de CM1/CM2 — Paris 18ème',
    longText: 'La Fabrique à doublage à l’école Philippe de Girard, Paris 18ème.\nClasse de CM1/CM2 — année 2023.',

  },
  {
    id: 'f2',
    title: 'Conférence ESRA Paris',
    date: '17/07/2022',
    desc: 'Présentation du métier d’adaptateur de doublage',
    longText: 'Conférence ESRA Paris.\nPrésentation du métier d’adaptateur de doublage.\nLe 17 juillet 2022.',

  },
  {
    id: 'f3',
    title: 'École Philippe de Girard',
    date: 'Année 2022',
    desc: 'Classe de CM1/CM2 — Paris 18ème',
    longText: 'La Fabrique à doublage à l’école Philippe de Girard, Paris 18ème.\nClasse de CM1/CM2 — année 2022.',

  },
  {
    id: 'f4',
    title: 'Atelier du Quetzal',
    date: 'Novembre 2022',
    desc: 'Centre Jean Vilar — Champigny-sur-Marne',
    longText: 'Atelier du Quetzal au Centre Jean Vilar, Champigny-sur-Marne.\nAdaptation, écriture et doublage.\nNovembre 2022.',

    videoId: 'FnSRfW1HKck',
  },
  {
    id: 'f5',
    title: 'École Philippe de Girard',
    date: 'Année 2021',
    desc: 'Classe de CM1/CM2 — Paris 18ème',
    longText: 'La Fabrique à doublage à l’école Philippe de Girard, Paris 18ème.\nClasse de CM1/CM2 — année 2021.',

  },
  {
    id: 'f6',
    title: 'École Philippe de Girard',
    date: 'Année 2019',
    desc: 'Classe de CM1/CM2 — Paris 18ème',
    longText: 'La Fabrique à doublage à l’école Philippe de Girard, Paris 18ème.\nClasse de CM1/CM2 — année 2019.',

  },
  {
    id: 'f7',
    title: 'Conférence Université de Rennes',
    date: 'Mars 2019',
    desc: 'Master 2 d’anglais — Présentation du métier d’adaptateur de doublage',
    longText: 'Conférence à l’Université de Rennes, Master 2 d’anglais.\nPrésentation du métier d’adaptateur de doublage.\nMars 2019.',

  },
]

interface EventItem {
  id: string
  title: string
  date: string
  desc: string
  longText: string

  videoId?: string
}

interface EventsViewProps {
  onOpenContact?: () => void
}

export function EventsView({ onOpenContact }: EventsViewProps) {
  const [activeEvent, setActiveEvent] = useState<EventItem | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleOpenModal = (ev: EventItem) => {
    setActiveEvent(ev)
    setIsVideoPlaying(false)
  }

  const handleCloseModal = () => {
    setActiveEvent(null)
    setIsVideoPlaying(false)
  }

  return (
    <section className="relative min-h-screen w-full bg-neutral-950 text-neutral-50 overflow-hidden pt-20 pb-24 select-none">
      
      {/* Animations CSS */}
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-text-sweep {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .diagonal-stripes {
          background-image: repeating-linear-gradient(
            135deg,
            rgba(220, 38, 38, 0.25),
            rgba(220, 38, 38, 0.25) 1px,
            transparent 1px,
            transparent 12px
          );
        }
      `}</style>

      {/* CONTENEUR PRINCIPAL */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-12 sm:px-8 w-full">
        
        {/* HEADER */}
        <header className="text-center animate-text-sweep max-w-4xl mx-auto">
          <p className="mb-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
            Événements
          </p>
          <h1 className="text-balance font-serif italic text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight drop-shadow-md">
            Nos prestations passées
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-neutral-300">
            Retrouvez l'association Tournez Bobines
            tout au long de l&apos;année. Cliquez sur un événement pour découvrir ses détails, photos et vidéos.
          </p>
        </header>

        {/* DEUX COLONNES */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* COLONNE 1 */}
          <div className="group relative z-10 flex flex-col justify-between p-6 sm:p-8 bg-transparent transition-all duration-300 ease-out animate-text-sweep">
            <div className="absolute top-4 left-4 pointer-events-none z-20">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-90 group-hover:-translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-5 h-5 opacity-0 scale-75 rotate-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-90 flex items-center justify-center">
                <div className="absolute w-full h-[2px] bg-red-600" />
                <div className="absolute h-full w-[2px] bg-red-600" />
              </div>
            </div>
            <div className="absolute top-4 right-4 pointer-events-none z-20">
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-90 group-hover:translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-5 h-5 opacity-0 scale-75 rotate-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-90 flex items-center justify-center">
                <div className="absolute w-full h-[2px] bg-red-600" />
                <div className="absolute h-full w-[2px] bg-red-600" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 pointer-events-none z-20">
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-90 group-hover:-translate-x-1 group-hover:translate-y-1" />
              <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 opacity-0 scale-75 rotate-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-90 flex items-center justify-center">
                <div className="absolute w-full h-[2px] bg-red-600" />
                <div className="absolute h-full w-[2px] bg-red-600" />
              </div>
            </div>
            <div className="absolute bottom-4 right-4 pointer-events-none z-20">
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-90 group-hover:translate-x-1 group-hover:translate-y-1" />
              <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-5 h-5 opacity-0 scale-75 rotate-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-90 flex items-center justify-center">
                <div className="absolute w-full h-[2px] bg-red-600" />
                <div className="absolute h-full w-[2px] bg-red-600" />
              </div>
            </div>

            <div className="absolute top-1/2 left-0 w-3 h-px bg-neutral-500/50 -translate-y-1/2 pointer-events-none transition-all duration-500 ease-out group-hover:bg-red-600 group-hover:rotate-90 group-hover:scale-125" />
            <div className="absolute top-1/2 right-0 w-3 h-px bg-neutral-500/50 -translate-y-1/2 pointer-events-none transition-all duration-500 ease-out group-hover:bg-red-600 group-hover:rotate-90 group-hover:scale-125" />
            <div className="absolute top-0 left-1/2 w-px h-3 bg-neutral-500/50 -translate-x-1/2 pointer-events-none transition-all duration-500 ease-out group-hover:bg-red-600 group-hover:rotate-90 group-hover:scale-125" />
            <div className="absolute bottom-0 left-1/2 w-px h-3 bg-neutral-500/50 -translate-x-1/2 pointer-events-none transition-all duration-500 ease-out group-hover:bg-red-600 group-hover:rotate-90 group-hover:scale-125" />

            <div className="absolute inset-4 sm:inset-5 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none diagonal-stripes z-0" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="text-center mb-8">
                <p className="mb-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-red-500">Animations</p>
                <h2 className="font-serif italic text-2xl sm:text-3xl tracking-tight text-white drop-shadow-sm transition-colors duration-300">
                  Doublage pour tous
                </h2>
              </div>

              <div className="flex flex-col gap-4 flex-1">
                {LUDIC_EVENTS.map((ev) => (
                  <div
                    key={ev.id}
                    onClick={() => handleOpenModal(ev)}
                    className="group/item flex flex-col sm:flex-row items-center gap-4 p-4 rounded-none bg-neutral-950/60 border border-white/10 hover:border-red-500/60 hover:bg-neutral-900/85 transition-all duration-300 cursor-pointer shadow-md"
                  >
                    {ev.videoId && (
                      <div className="relative w-full sm:w-28 h-20 shrink-0 rounded-none overflow-hidden border border-white/10 bg-neutral-900">
                        <Image
                          src={`https://i.ytimg.com/vi/${ev.videoId}/hqdefault.jpg`}
                          alt={ev.title}
                          fill
                          className="object-cover opacity-85 group-hover/item:opacity-100"
                        />
                      </div>
                    )}

                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <div className="flex flex-col gap-1 mb-1">
                        <h3 className="font-serif italic text-base text-neutral-100 group-hover/item:text-red-400 transition-colors text-balance">
                          {ev.title}
                        </h3>
                        <span className="text-[11px] sm:text-xs font-medium tracking-wide text-red-500/90">
                          {ev.date}
                        </span>
                      </div>
                      <p className="text-base text-neutral-400 leading-relaxed line-clamp-2">
                        {ev.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLONNE 2 */}
          <div className="group relative z-10 flex flex-col justify-between p-6 sm:p-8 bg-transparent transition-all duration-300 ease-out animate-text-sweep" style={{ animationDelay: '200ms' }}>
            <div className="absolute top-4 left-4 pointer-events-none z-20">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-90 group-hover:-translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-5 h-5 opacity-0 scale-75 rotate-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-90 flex items-center justify-center">
                <div className="absolute w-full h-[2px] bg-red-600" />
                <div className="absolute h-full w-[2px] bg-red-600" />
              </div>
            </div>
            <div className="absolute top-4 right-4 pointer-events-none z-20">
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-90 group-hover:translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-5 h-5 opacity-0 scale-75 rotate-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-90 flex items-center justify-center">
                <div className="absolute w-full h-[2px] bg-red-600" />
                <div className="absolute h-full w-[2px] bg-red-600" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 pointer-events-none z-20">
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-90 group-hover:-translate-x-1 group-hover:translate-y-1" />
              <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 opacity-0 scale-75 rotate-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-90 flex items-center justify-center">
                <div className="absolute w-full h-[2px] bg-red-600" />
                <div className="absolute h-full w-[2px] bg-red-600" />
              </div>
            </div>
            <div className="absolute bottom-4 right-4 pointer-events-none z-20">
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neutral-500/50 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-90 group-hover:translate-x-1 group-hover:translate-y-1" />
              <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-5 h-5 opacity-0 scale-75 rotate-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-90 flex items-center justify-center">
                <div className="absolute w-full h-[2px] bg-red-600" />
                <div className="absolute h-full w-[2px] bg-red-600" />
              </div>
            </div>

            <div className="absolute top-1/2 left-0 w-3 h-px bg-neutral-500/50 -translate-y-1/2 pointer-events-none transition-all duration-500 ease-out group-hover:bg-red-600 group-hover:rotate-90 group-hover:scale-125" />
            <div className="absolute top-1/2 right-0 w-3 h-px bg-neutral-500/50 -translate-y-1/2 pointer-events-none transition-all duration-500 ease-out group-hover:bg-red-600 group-hover:rotate-90 group-hover:scale-125" />
            <div className="absolute top-0 left-1/2 w-px h-3 bg-neutral-500/50 -translate-x-1/2 pointer-events-none transition-all duration-500 ease-out group-hover:bg-red-600 group-hover:rotate-90 group-hover:scale-125" />
            <div className="absolute bottom-0 left-1/2 w-px h-3 bg-neutral-500/50 -translate-x-1/2 pointer-events-none transition-all duration-500 ease-out group-hover:bg-red-600 group-hover:rotate-90 group-hover:scale-125" />

            <div className="absolute inset-4 sm:inset-5 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none diagonal-stripes z-0" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="text-center mb-8">
                <p className="mb-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-red-500">Pédagogie</p>
                <h2 className="font-serif italic text-2xl sm:text-3xl tracking-tight text-white drop-shadow-sm transition-colors duration-300">
                  La Fabrique à Doublage
                </h2>
              </div>

              <div className="flex flex-col gap-4 flex-1">
                {FACTORY_EVENTS.map((ev) => (
                  <div
                    key={ev.id}
                    onClick={() => handleOpenModal(ev)}
                    className="group/item flex flex-col sm:flex-row items-center gap-4 p-4 rounded-none bg-neutral-950/60 border border-white/10 hover:border-red-500/60 hover:bg-neutral-900/85 transition-all duration-300 cursor-pointer shadow-md"
                  >
                    {ev.videoId && (
                      <div className="relative w-full sm:w-28 h-20 shrink-0 rounded-none overflow-hidden border border-white/10 bg-neutral-900">
                        <Image
                          src={`https://i.ytimg.com/vi/${ev.videoId}/hqdefault.jpg`}
                          alt={ev.title}
                          fill
                          className="object-cover opacity-85 group-hover/item:opacity-100"
                        />
                      </div>
                    )}

                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <div className="flex flex-col gap-1 mb-1">
                        <h3 className="font-serif italic text-base text-neutral-100 group-hover/item:text-red-400 transition-colors text-balance">
                          {ev.title}
                        </h3>
                        <span className="text-[11px] sm:text-xs font-medium tracking-wide text-red-500/90">
                          {ev.date}
                        </span>
                      </div>
                      <p className="text-base text-neutral-400 leading-relaxed line-clamp-2">
                        {ev.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* MODAL PLEIN ESPACE */}
        {activeEvent && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-0 bg-black/85 backdrop-blur-md">
            
            <div className="relative w-full max-w-4xl mx-6 my-6 sm:mx-10 sm:my-8 p-5 sm:p-8 bg-neutral-950 rounded-none shadow-2xl flex flex-col justify-between overflow-visible">
              
              {/* MIRES AUX 4 COINS */}
              <div className="absolute -top-3 -left-3 pointer-events-none z-20">
                <div className="w-6 h-6 border-t-2 border-l-2 border-neutral-400" />
              </div>
              <div className="absolute -top-3 -right-3 pointer-events-none z-20">
                <div className="w-6 h-6 border-t-2 border-r-2 border-neutral-400" />
              </div>
              <div className="absolute -bottom-3 -left-3 pointer-events-none z-20">
                <div className="w-6 h-6 border-b-2 border-l-2 border-neutral-400" />
              </div>
              <div className="absolute -bottom-3 -right-3 pointer-events-none z-20">
                <div className="w-6 h-6 border-b-2 border-r-2 border-neutral-400" />
              </div>

              {/* MIRES CENTRÉES SUR LES BORDS */}
              <div className="absolute top-1/2 -left-3 w-3 h-px bg-neutral-400 -translate-y-1/2 pointer-events-none" />
              <div className="absolute top-1/2 -right-3 w-3 h-px bg-neutral-400 -translate-y-1/2 pointer-events-none" />
              <div className="absolute -top-3 left-1/2 w-px h-3 bg-neutral-400 -translate-x-1/2 pointer-events-none" />
              <div className="absolute -bottom-3 left-1/2 w-px h-3 bg-neutral-400 -translate-x-1/2 pointer-events-none" />

              {/* Bouton Fermer */}
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white bg-neutral-900/80 hover:bg-red-600 rounded-full transition-colors z-40 cursor-pointer shadow-lg"
              >
                <X size={18} />
              </button>

              {/* En-tête de la modale */}
              <div className="text-center shrink-0 mb-5">
                <p className="mb-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                  {activeEvent.date}
                </p>
                <h2 className="font-serif italic text-xl sm:text-2xl text-white mt-1">{activeEvent.title}</h2>
              </div>

              {/* Contenu : vidéo YouTube si dispo, sinon texte seul */}
              <div className="flex flex-col gap-5">
                {activeEvent.videoId && (
                  <div className="relative w-full lg:w-3/4 lg:mx-auto aspect-video rounded-none overflow-hidden bg-neutral-950 flex items-center justify-center shadow-md">
                    {!isVideoPlaying ? (
                      <div
                        className="relative h-full w-full overflow-hidden rounded-none bg-neutral-950 flex items-center justify-center cursor-pointer group/vid"
                        onClick={() => setIsVideoPlaying(true)}
                      >
                        <Image
                          src={`https://i.ytimg.com/vi/${activeEvent.videoId}/hqdefault.jpg`}
                          alt={activeEvent.title}
                          fill
                          className="absolute inset-0 h-full w-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <button className="relative z-10 flex h-14 w-20 items-center justify-center rounded-xl bg-red-600 shadow-xl transition-transform duration-300 group-hover/vid:scale-110">
                          <svg className="h-7 w-7 text-white fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </button>
                      </div>
                    ) : (
                      <iframe
                        className="absolute inset-0 h-full w-full bg-black rounded-none"
                        src={`https://www.youtube.com/embed/${activeEvent.videoId}?autoplay=1`}
                        allowFullScreen
                      />
                    )}
                  </div>
                )}

                <div className="w-full bg-transparent p-0 max-w-2xl mx-auto">
                  <div className="space-y-1.5 text-xs text-neutral-300 leading-relaxed font-sans text-center sm:text-left">
                    {activeEvent.longText.split('\n').slice(0, 4).map((line, index) => (
                      <p key={index} className="line-clamp-2">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  )
}