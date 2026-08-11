'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

// Séquence rythmo pour le fond
const rythmoSequence = [
  { track: 1, cue: '68', timecode: '01:22:38:12', width: 'w-64 sm:w-80' },
  { track: 2, cue: '69', timecode: '01:22:40:00', width: 'w-80 sm:w-96' },
  { track: 3, cue: '70', timecode: '01:22:44:15', width: 'w-72 sm:w-[26rem]' },
  { track: 1, cue: '71', timecode: '01:22:48:02', width: 'w-80 sm:w-[32rem]' },
  { track: 2, cue: '72', timecode: '01:22:52:10', width: 'w-56 sm:w-72' },
  { track: 3, cue: '73', timecode: '01:22:56:18', width: 'w-96 sm:w-[34rem]' },
  { track: 1, cue: '74', timecode: '01:23:01:00', width: 'w-68 sm:w-84' },
  { track: 2, cue: '75', timecode: '01:23:05:14', width: 'w-76 sm:w-[26rem]' },
  { track: 3, cue: '76', timecode: '01:23:10:22', width: 'w-64 sm:w-88' },
]

const LUDIC_EVENTS = [
  {
    id: 'l1',
    title: 'Nuit du doublage — Paris',
    date: '14/03/2026',
    desc: 'Soirée de projections, masterclass et échanges privilégiés avec les voix de l’ombre qui donnent vie aux plus grands personnages.',
    longText: 'Cet événement exceptionnel réunit sur scène les comédiens et directeurs artistiques les plus emblématiques de la profession.\nAu programme de cette grande soirée : masterclass en direct, démonstrations de synchronisation sur bande rythmo et table ronde.\nLes participants pourront échanger librement avec les intervenants et découvrir les secrets de fabrication des VF.\nUn moment unique de partage et de célébration de la culture du doublage francophone ouvert à tous les passionnés.\nClôture de la soirée avec une remise des prix et un cocktail dînatoire pour prolonger les échanges en toute convivialité.',
    images: [
      { src: '/event-stage.png', alt: 'Scène de l’événement Nuit du doublage' },
      { src: '/recording-session.png', alt: 'Démonstration de doublage en direct' },
    ],
    videoId: 'mf5Myk1WICg',
  },
  {
    id: 'l2',
    title: 'Atelier initiation voix off — Lyon',
    date: '02/04/2026',
    desc: 'Découverte des techniques de studio et du jeu micro, encadrée par des professionnels en conditions réelles.',
    longText: 'Un atelier pratique conçu pour appréhender le placement de la voix, la respiration et l’intonation face au micro.\nChaque participant bénéficie d’un passage en cabine individuelle pour s’essayer à l’exercice sur un extrait court.\nLes conseils personnalisés du formateur permettent de corriger la diction et d’ajuster l’intonation dramatique.\nPlaces strictement limitées à douze participants pour garantir un accompagnement technique optimal du micro au mixage.\nUne attestation de participation ainsi qu’un enregistrement souvenir seront remis à chaque stagiaire en fin de session.',
    images: [
      { src: '/studio-booth.png', alt: 'Cabine d’enregistrement de l’atelier' },
      { src: '/mixing-console.png', alt: 'Console utilisée pendant l’atelier' },
    ],
    videoId: '01iF8VGlwV8',
  },
  {
    id: 'l3',
    title: 'Masterclass Découverte — Marseille',
    date: '18/04/2026',
    desc: 'S’initier au rythme visuel et à la synchro labiale au cœur d’un véritable studio de post-production.',
    longText: 'Approche immersive des méthodes professionnelles de doublage, alliant analyse textuelle et exercices pratiques.\nLe formateur détaille l’utilisation des bandes rythmo et l’importance cruciale des repères visuels pour la synchro.\nLes inscrits découvrent les contraintes techniques du métier et la rigueur nécessaire en plateau d’enregistrement.\nUn temps d’échange est également prévu pour aborder les aspects administratifs et les voies d’accès à la profession.\nIdéal pour les comédiens en herbe souhaitant confronter leur pratique aux exigences réelles de la post-production.',
    images: [
      { src: '/event-stage.png', alt: 'Masterclass Marseille vue de scène' },
      { src: '/studio-booth.png', alt: 'Cabine technique Marseille' },
    ],
    videoId: 'CiTiIp-AMB4',
  },
  {
    id: 'l4',
    title: 'Ciné-Quiz Doublage — Nantes',
    date: '05/05/2026',
    desc: 'Reconnaître les voix cultes du cinéma d’animation et tester ses connaissances lors d’un tournoi ludique.',
    longText: 'Une soirée conviviale ouverte à tous pour célébrer la culture des séries et des films à travers leurs VF iconiques.\nLe tournoi s’articule autour de plusieurs manches thématiques : blind tests vocaux, répliques cultes et devinettes.\nDe nombreux lots et cadeaux exclusifs offerts par nos partenaires sont à gagner tout au long de la compétition.\nVenez tester votre oreille et partager votre passion dans une ambiance chaleureuse et résolument festive.\nLe nombre de places étant limité, la réservation en ligne est fortement conseillée pour garantir votre participation.',
    images: [
      { src: '/recording-session.png', alt: 'Session jeu et quiz' },
      { src: '/mixing-console.png', alt: 'Animation sonore' },
    ],
    videoId: 'boroSb-TslU',
  },
  {
    id: 'l5',
    title: 'Rencontre artistique — Bordeaux',
    date: '20/05/2026',
    desc: 'Table ronde ouverte sur les métiers d’adaptation, de traduction et de direction artistique.',
    longText: 'Échangez avec les artisans de l’ombre qui façonnent l’adaptation française des œuvres cinématographiques.\nCette conférence aborde les défis de la traduction culturelle et le respect de la vision originale des auteurs.\nLes directeurs artistiques partagent leur expérience sur le casting des voix et la direction des comédiens.\nUn dialogue constructif s’installe entre les professionnels et le public curieux de comprendre les coulisses du secteur.\nLa rencontre se conclura par un temps de questions-réponses et une séance de dédicaces de scripts originaux.',
    images: [
      { src: '/event-stage.png', alt: 'Table ronde Bordeaux' },
      { src: '/studio-booth.png', alt: 'Espace d’échange' },
    ],
    videoId: 'VvkDpYYPAI4',
  },
  {
    id: 'l6',
    title: 'Immersion micro famille — Toulouse',
    date: '03/06/2026',
    desc: 'Atelier ludique parent-enfant pour doubler ensemble un extrait court de dessin animé.',
    longText: 'Une initiation joyeuse et collaborative pour découvrir les coulisses du doublage en famille et partager un moment unique.\nParents et enfants s’amusent à prêter leurs voix aux personnages farfelus d’un extrait spécialement sélectionné.\nL’intervenant guide le duo avec bienveillance pour accorder les voix et respecter le timing de l’animation.\nChaque famille repart avec sa propre capsule audio mixée et prête à être partagée auprès des proches.\nUne belle façon de lier complicité familiale et découverte artistique au sein d’un véritable studio.',
    images: [
      { src: '/recording-session.png', alt: 'Atelier famille micro' },
      { src: '/event-stage.png', alt: 'Restitution atelier' },
    ],
    videoId: 'mf5Myk1WICg',
  },
  {
    id: 'l7',
    title: 'Journée portes ouvertes — Lille',
    date: '15/06/2026',
    desc: 'Visite guidée des cabines d’enregistrement et démonstrations en direct par nos équipes.',
    longText: 'Découvrez l’envers du décor, le matériel de pointe et les secrets de fabrication des versions françaises.\nNos ingénieurs du son et directeurs artistiques ouvrent leurs portes pour des démonstrations commentées.\nVous assisterez en direct à une séance de travail sur l’enregistrement d’une réplique en conditions réelles.\nL’occasion idéale pour poser toutes vos questions sur l’acoustique, le matériel et l’organisation du travail en studio.\nEntrée libre et gratuite tout au long de la journée, dans la limite des places disponibles en cabine.',
    images: [
      { src: '/studio-booth.png', alt: 'Cabine Lille' },
      { src: '/mixing-console.png', alt: 'Regie son Lille' },
    ],
    videoId: '01iF8VGlwV8',
  },
  {
    id: 'l8',
    title: 'Scène ouverte doublage — Strasbourg',
    date: '01/07/2026',
    desc: 'Venez prêter votre voix en direct à des scènes mythiques du répertoire cinématographique.',
    longText: 'Un micro ouvert à tous les passionnés désireux de s’essayer à l’exercice du doublage en public.\nSous les conseils bienveignants d’un professionnel, monte sur scène et jette-toi à l’eau face à l’écran.\nL’exercice permet de lâcher prise, de travailler sa respiration et de s’amuser avec des textes cultes.\nUne ambiance bienveillante et stimulante pour libérer sa voix et vivre un grand moment de scène.\nInscriptions directement sur place dès le début de la soirée pour constituer l’ordre des passages.',
    images: [
      { src: '/event-stage.png', alt: 'Scène ouverte Strasbourg' },
      { src: '/recording-session.png', alt: 'Micro ouvert' },
    ],
    videoId: 'CiTiIp-AMB4',
  },
  {
    id: 'l9',
    title: 'Stage découverte ados — Rennes',
    date: '10/07/2026',
    desc: 'Première approche ludique du jeu micro, de la diction et de l’expression orale pour adolescents.',
    longText: 'Un stage intensif de plusieurs jours pour gagner en aisance à l’oral et s’amuser avec les textes.\nLes jeunes participants découvrent le placement de la voix, l’écoute des autres et la cohésion de groupe.\nÀ travers des jeux théâtraux et des exercices face au micro, ils se familiarisent avec l’expression scénique.\nL’encadrement est assuré par des professionnels pédagogues habitués à travailler avec un public adolescent.\nUne restitution finale est organisée devant les parents pour fêter l’aboutissement de cette belle semaine.',
    images: [
      { src: '/recording-session.png', alt: 'Stage ados micro' },
      { src: '/studio-booth.png', alt: 'Studio Rennes' },
    ],
    videoId: 'boroSb-TslU',
  },
  {
    id: 'l10',
    title: 'Grand Festival Voix & Cinéma — Nice',
    date: '25/07/2026',
    desc: 'Clôture estivale avec projections en plein air, concerts de bandes originales et rencontres inédites.',
    longText: 'Le point d’orgue de la saison estivale célébrant les arts de la voix et du doublage sur la Côte d’Azur.\nAu programme : projections nocturnes en plein air, ciné-concerts symphoniques et masterclass géantes.\nDe nombreux invités d’honneur, comédiens et adaptateurs, viendront partager leur passion avec le public.\nUn village d’animations accueillera les festivaliers pour des initiations gratuites tout au long du week-end.\nUn événement grandiose pour clôturer l’été sous le signe de la cinéphilie et du partage artistique.',
    images: [
      { src: '/event-stage.png', alt: 'Festival Nice plein air' },
      { src: '/recording-session.png', alt: 'Concert et voix' },
    ],
    videoId: 'VvkDpYYPAI4',
  },
]

const FACTORY_EVENTS = [
  {
    id: 'f1',
    title: 'Cycle primaire : Immersion CM1-CM2',
    date: '01/01/2026',
    desc: 'Découverte de l’Histoire des Arts et travail de lecture à voix haute en Réseau d’Éducation Prioritaire.',
    longText: 'Un projet pédagogique mené main dans la main avec les enseignants pour faciliter l’expression orale des élèves.\nÀ travers la découverte de l’outil cinématographique, les enfants reprennent confiance en leur voix.\nLe travail de lecture dialoguée aide à lutter contre les difficultés de fluence et d’articulation en classe.\nChaque élève participe activement à l’enregistrement d’une capsule audio collective valorisante.\nUne action concrète qui dynamise l’apprentissage de la langue française de manière ludique et artistique.',
    images: [
      { src: '/event-stage.png', alt: 'Classe primaire atelier' },
      { src: '/recording-session.png', alt: 'Enfants au micro' },
    ],
    videoId: 'mf5Myk1WICg',
  },
  {
    id: 'f2',
    title: 'Collège : Atelier écriture & fluence',
    date: '01/09/2026',
    desc: 'Travail approfondi sur le rythme, l’intonation, la lecture dialoguée et le sens des textes littéraires.',
    longText: 'Destiné aux collégiens, ce module associe l’analyse de séquences filmiques à l’apprentissage de la lecture.\nLes élèves découvrent comment le ton et l’intonation modifient totalement le sens d’une phrase.\nUn travail rigoureux est mené sur la respiration, le souffle et la posture pour porter sa voix avec assurance.\nLes textes étudiés font écho au programme de français pour créer des ponts stimulants entre école et culture.\nLe projet aboutit à la création d’une version doublée d’un court-métrage patrimonial ou contemporain.',
    images: [
      { src: '/studio-booth.png', alt: 'Atelier collège studio' },
      { src: '/mixing-console.png', alt: 'Console et textes' },
    ],
    videoId: '01iF8VGlwV8',
  },
  {
    id: 'f3',
    title: 'Lycée Module 1 : Découverte & Adaptation',
    date: '15/09/2026',
    desc: 'Préparation ludique et sensibilisation aux métiers de la post-production pour les lycéens.',
    longText: 'Une approche interactive pour explorer le jeu d’acteur face au micro et comprendre la synchro labiale.\nLes lycéens s’approprient les techniques de l’acteur de doublage pour incarner des personnages variés.\nL’exercice stimule la concentration, l’écoute active et la réactivité au sein d’un groupe de travail.\nUn bilan personnalisé est dressé pour chaque élève à l’issue des sessions pratiques en cabine.\nUne ouverture concrète vers les métiers de l’audiovisuel et des industries culturelles et créatives.',
    images: [
      { src: '/event-stage.png', alt: 'Lycée module 1' },
      { src: '/recording-session.png', alt: 'Enregistrement lycéens' },
    ],
    videoId: 'CiTiIp-AMB4',
  },
  {
    id: 'f4',
    title: 'Lycée Module 2 : Traduction & Dialogues',
    date: '20/09/2026',
    desc: 'Co-organisation transversale avec les professeurs d’anglais, de langues vivantes et de français.',
    longText: 'Travail minutieux sur la transposition linguistique, l’adaptation rythmique et le respect des dynamiques.\nLes élèves traduisent et adaptent des dialogues étrangers en veillant à conserver la fluidité du propos.\nCet atelier interdisciplinaire valorise la maîtrise des langues vivantes à travers un cas pratique concret.\nLa contrainte du format rythmique oblige à faire des choix d’écriture précis et percutants.\nUne excellente préparation aux exigences de rigueur rédactionnelle attendue dans le supérieur.',
    images: [
      { src: '/studio-booth.png', alt: 'Traduction studio' },
      { src: '/mixing-console.png', alt: 'Écriture et mixage' },
    ],
    videoId: 'boroSb-TslU',
  },
  {
    id: 'f5',
    title: 'Lycée Module 3 : Grand Oral du Bac',
    date: '01/10/2026',
    desc: 'Maîtrise de la posture, placement de la voix, respiration et aisance oratoire pour l’examen.',
    longText: 'Un accompagnement spécifique réservé aux classes de Terminale pour réussir l’épreuve du Grand Oral.\nÀ travers des techniques issues du théâtre et du doublage, les élèves apprennent à maîtriser leur trac.\nLe travail porte sur le timbre, la clarté de l’articulation et la capacité à capter l’attention du jury.\nDes simulations d’entretien sont réalisées et filmées pour analyser les points forts et axes d’amélioration.\nUn coach vocal professionnel guide chaque candidat vers une expression assurée et naturelle.',
    images: [
      { src: '/event-stage.png', alt: 'Préparation grand oral' },
      { src: '/recording-session.png', alt: 'Posture et voix' },
    ],
    videoId: 'VvkDpYYPAI4',
  },
  {
    id: 'f6',
    title: 'Option Cinéma : Interprétation face micro',
    date: '10/10/2026',
    desc: 'Exploration poussée du jeu d’acteur et des exigences des conditions professionnelles de doublage.',
    longText: 'Destiné aux élèves en option cinéma, ce module intègre la lecture rigoureuse de scripts exigeants.\nLes jeunes cinéphiles découvrent les contraintes techniques du mixage et de la synchro en studio.\nL’interprétation doit être juste, subtile et calée au millimètre près sur le jeu des acteurs à l’écran.\nLe projet annuel se concrétise par la post-synchronisation complète d’une séquence complexe.\nUne véritable immersion professionnelle reconnue dans le cadre du parcours artistique et culturel.',
    images: [
      { src: '/studio-booth.png', alt: 'Option cinéma cabine' },
      { src: '/mixing-console.png', alt: 'Mixage option cinéma' },
    ],
    videoId: 'mf5Myk1WICg',
  },
  {
    id: 'f7',
    title: 'Séminaire pédagogique enseignants',
    date: '30/08/2026',
    desc: 'Présentation officielle des outils de la Fabrique à Doublage au service des apprentissages scolaires.',
    longText: 'Journée d’information et d’atelier à destination du corps enseignant souhaitant innover dans leurs pratiques.\nDécouvrez comment intégrer le doublage et la lecture audio dans vos projets interdisciplinaires annuels.\nDémonstration des kits pédagogiques clés en main et des logiciels simplifiés pour les classes.\nTemps d’échange entre pairs pour partager les retours d’expérience menés dans différentes académies.\nUne solution inspirante pour dynamiser l’engagement des élèves dès la rentrée de septembre.',
    images: [
      { src: '/event-stage.png', alt: 'Séminaire enseignants' },
      { src: '/studio-booth.png', alt: 'Démonstration pédagogique' },
    ],
    videoId: '01iF8VGlwV8',
  },
  {
    id: 'f8',
    title: 'Atelier synchro rythmo avancée',
    date: '12/09/2026',
    desc: 'Maîtrise rigoureuse des bandes rythmo, des repères temporels et de la rigueur de studio.',
    longText: 'Formation technique dédiée à la précision du découpage, du méTRAGE et au respect des repères de temps.\nLes participants apprennent à lire et à anticiper les ondes visuelles et les flèches de direction.\nLa concentration doit être absolue pour maintenir le synchronisme labial sans lisser l’émotion.\nUn module technique indispensable pour les étudiants en son et les futurs professionnels de la post-synchro.\nValidation des acquis par un exercice chronométré en conditions réelles de plateau.',
    images: [
      { src: '/mixing-console.png', alt: 'Rythmo et console' },
      { src: '/studio-booth.png', alt: 'Cabine technique avancée' },
    ],
    videoId: 'CiTiIp-AMB4',
  },
  {
    id: 'f9',
    title: 'Restitution œuvre commune — Région',
    date: '18/10/2026',
    desc: 'Projection publique et festive des projets de doublage réalisés en milieu scolaire durant l’année.',
    longText: 'Célébration du travail accompli par les élèves, projection sur grand écran des capsules doublées.\nUn moment fort en émotion pour les enfants, fiers de voir leur travail diffusé dans une vraie salle.\nRemise officielle des diplômes d’honneur de la Fabrique à Doublage en présence des élus locaux.\nLa soirée se poursuit par un verre de l’amitié ouvert aux familles, enseignants et partenaires.\nUne belle reconnaissance institutionnelle pour valoriser l’investissement des jeunes talents.',
    images: [
      { src: '/event-stage.png', alt: 'Projection restitution' },
      { src: '/recording-session.png', alt: 'Applaudissements élèves' },
    ],
    videoId: 'boroSb-TslU',
  },
  {
    id: 'f10',
    title: 'Colloque national Voix & Éducation',
    date: '05/11/2026',
    desc: 'Bilan, tables rondes et perspectives de la pédagogie par le doublage en milieu scolaire.',
    longText: 'Un événement institutionnel rassemblant chercheurs, pédagogues et professionnels du secteur.\nBilan chiffré des actions menées dans les écoles et perspectives de développement pour l’année à venir.\nTables rondes thématiques sur l’impact de la voix dans la lutte contre l’échec scolaire et l’illettrisme.\nPrésentation des travaux de recherche universitaire portant sur la fluence et l’expression orale.\nClôture du colloque par un grand débat prospectif sur l’avenir de l’éducation artistique et culturelle.',
    images: [
      { src: '/event-stage.png', alt: 'Colloque national scène' },
      { src: '/studio-booth.png', alt: 'Conférence et débats' },
    ],
    videoId: 'VvkDpYYPAI4',
  },
]

interface EventItem {
  id: string
  title: string
  date: string
  desc: string
  longText: string
  images: { src: string; alt: string }[]
  videoId: string
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

        @keyframes rythmoScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-rythmo-scroll {
          animation: rythmoScroll 28s linear infinite;
          will-change: transform;
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

      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex items-center opacity-[0.15] blur-[3px]">
        <div className="absolute inset-x-0 h-[34rem] bg-neutral-900/30 border-y border-neutral-800/40 flex flex-col justify-between py-2">
          <div className="w-full border-t border-dashed border-white/30"></div>
          <div className="w-full border-t border-dashed border-neutral-700/30"></div>
          <div className="w-full border-t border-dashed border-white/30"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-20 space-y-28">
          <div className="h-px w-full bg-neutral-500"></div>
          <div className="h-px w-full bg-neutral-500"></div>
        </div>
        <div className="absolute top-0 bottom-0 left-[25%] w-0.5 bg-red-600/80 z-20 flex flex-col items-center justify-center">
          <span className="text-red-600 font-normal text-[2.5rem] leading-none">×</span>
        </div>
        <div className="flex w-max animate-rythmo-scroll px-[25vw] relative z-10 items-center">
          {[1, 2].map((loopIndex) => (
            <div key={loopIndex} className="flex items-center gap-12 sm:gap-20">
              {rythmoSequence.map((item, index) => {
                let trackTransform = 'translate-y-0'
                if (item.track === 1) trackTransform = '-translate-y-36 sm:-translate-y-48'
                if (item.track === 3) trackTransform = 'translate-y-36 sm:translate-y-48'
                return (
                  <div key={`${loopIndex}-${index}`} className={`flex items-center gap-2.5 shrink-0 transition-transform ${trackTransform}`}>
                    <div className="px-1.5 py-0.5 border border-red-500/70 bg-red-950/60 rounded-[3px] font-mono text-[10px] sm:text-xs text-red-300 tracking-wider shrink-0 text-center">
                      {item.cue}
                    </div>
                    <div className={`h-11 sm:h-14 bg-neutral-800/90 rounded-md ${item.width} border border-neutral-700/70 shadow-md shrink-0`} />
                    <div className="px-1.5 py-0.5 border border-red-500/70 bg-red-950/60 rounded-[3px] font-mono text-[9px] sm:text-[11px] text-red-300 tracking-wider shrink-0">
                      {item.timecode}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>

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
                    <div className="relative w-full sm:w-28 h-20 shrink-0 rounded-none overflow-hidden border border-white/10 bg-neutral-900">
                      <Image
                        src={ev.images[0]?.src || '/placeholder.svg'}
                        alt={ev.images[0]?.alt || ev.title}
                        fill
                        className="object-cover opacity-85 group-hover/item:opacity-100"
                      />
                    </div>

                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
                        <h3 className="font-serif italic text-base text-neutral-100 group-hover/item:text-red-400 transition-colors truncate">
                          {ev.title}
                        </h3>
                        <span className="mb-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-red-500 shrink-0">
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
                    <div className="relative w-full sm:w-28 h-20 shrink-0 rounded-none overflow-hidden border border-white/10 bg-neutral-900">
                      <Image
                        src={ev.images[0]?.src || '/placeholder.svg'}
                        alt={ev.images[0]?.alt || ev.title}
                        fill
                        className="object-cover opacity-85 group-hover/item:opacity-100"
                      />
                    </div>

                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
                        <h3 className="font-serif italic text-base text-neutral-100 group-hover/item:text-red-400 transition-colors truncate">
                          {ev.title}
                        </h3>
                        <span className="mb-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-red-500 shrink-0">
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

              {/* GRILLE PLEIN ESPACE : Vidéo, Photos et Bloc de texte alignés */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                
                {/* Colonne Gauche : Vidéo large (8 colonnes) */}
                <div className="lg:col-span-8 flex flex-col">
                  <div className="relative w-full aspect-video rounded-none overflow-hidden bg-neutral-950 flex items-center justify-center shadow-md">
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
                      <iframe className="absolute inset-0 h-full w-full bg-black rounded-none" src={`https://www.youtube.com/embed/${activeEvent.videoId}?autoplay=1`} allowFullScreen />
                    )}
                  </div>
                </div>

                {/* Colonne Droite : 2 petites photos côte à côte (4 colonnes) + Bloc de texte en dessous */}
                <div className="lg:col-span-4 flex flex-col gap-5">
                  <div className="flex flex-row justify-between gap-3">
                    <div className="relative flex-1 aspect-square rounded-none border border-white/10 bg-neutral-900 shadow-md overflow-hidden">
                      <Image
                        src={activeEvent.images[0]?.src || '/placeholder.svg'}
                        alt={activeEvent.images[0]?.alt || activeEvent.title}
                        fill
                        className="object-cover opacity-90"
                      />
                    </div>
                    <div className="relative flex-1 aspect-square rounded-none border border-white/10 bg-neutral-900 shadow-md overflow-hidden">
                      <Image
                        src={activeEvent.images[1]?.src || activeEvent.images[0]?.src || '/placeholder.svg'}
                        alt={activeEvent.images[1]?.alt || activeEvent.title}
                        fill
                        className="object-cover opacity-90"
                      />
                    </div>
                  </div>

                  {/* Bloc de texte sans fond ni bordure */}
                  <div className="w-full bg-transparent p-0">
                    <div className="space-y-1.5 text-xs text-neutral-300 leading-relaxed font-sans">
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
          </div>
        )}

      </div>
    </section>
  )
}