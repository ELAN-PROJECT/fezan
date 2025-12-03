'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar,
  MapPin,
  Clock,
  Users,
  Sparkles,
  Music,
  Crown,
  Palmtree,
  Waves,
  Mountain,
  Star,
  ChevronRight,
  Filter,
  ExternalLink
} from 'lucide-react'
import Image from 'next/image'

// Base de données des événements culturels béninois
const culturalEvents = [
  {
    id: 1,
    name: "Vodun Days",
    date: "9-11 Janvier 2026",
    location: "Ouidah",
    category: "spirituel",
    featured: true,
    image: "/vodun-days.jpg",
    description: "Le plus grand festival spirituel et culturel du Bénin. Trois jours de célébrations en l'honneur des divinités Vodun avec cérémonies sacrées, concerts géants et animations culturelles.",
    highlights: [
      "Grande Cérémonie Vodun avec sortie des couvents",
      "Concerts internationaux en bord de mer",
      "Danses des Zangbéto et Egungun",
      "Village artisanal avec stands d'artisanat",
      "Parades en l'honneur des divinités"
    ],
    attendees: "450 000+ visiteurs attendus",
    price: "Gratuit (certaines zones VIP payantes)",
    icon: Sparkles,
    gradient: "from-purple-500 to-indigo-600",
    historicalNote: "Instauré en 1993 sous le président Nicéphore Soglo, devenu jour férié national. Le 10 janvier célèbre les religions traditionnelles béninoises."
  },
  {
    id: 2,
    name: "Fête des Fétiches",
    date: "10 Janvier (annuel)",
    location: "Abomey",
    category: "spirituel",
    image: "/fetiches-abomey.jpg",
    description: "Célébration des fétiches et des ancêtres dans l'ancienne capitale du royaume du Dahomey. Danses frénétiques au son des tambours et rituels ancestraux.",
    highlights: [
      "Rituels d'adoration des fétiches royaux",
      "Danses traditionnelles et chants mystiques",
      "Libations et offrandes aux ancêtres",
      "Visite des palais royaux UNESCO"
    ],
    attendees: "Milliers de participants",
    icon: Crown,
    gradient: "from-amber-500 to-orange-600",
    historicalNote: "Symbole de résistance culturelle face à la pression catholique coloniale."
  },
  {
    id: 3,
    name: "Festival Ganvié",
    date: "Juillet (annuel)",
    location: "Ganvié, Lac Nokoué",
    category: "culturel",
    image: "/ganvie-festival.jpg",
    description: "Célébration du peuple Tofinu dans la 'Venise de l'Afrique'. Festival mettant en valeur la vie lacustre unique et l'histoire du village sur pilotis.",
    highlights: [
      "Courses de pirogues traditionnelles",
      "Marché flottant géant",
      "Danses et musiques Tofinu",
      "Démonstrations de techniques de pêche ancestrales",
      "Histoire de la fuite face à l'esclavage"
    ],
    attendees: "Communauté locale + touristes",
    icon: Waves,
    gradient: "from-blue-500 to-cyan-600",
    historicalNote: "Fondé il y a 400+ ans par le peuple Tofinu fuyant la traite négrière."
  },
  {
    id: 4,
    name: "Festival Gelede",
    date: "Mars-Avril (dates variables)",
    location: "Région Sud-Ouest",
    category: "culturel",
    featured: true,
    image: "/gelede-festival.jpg",
    description: "Patrimoine oral et immatériel de l'UNESCO. Festival honorant le pouvoir féminin à travers des masques colorés, tambours et contes moraux.",
    highlights: [
      "Performances masquées spectaculaires",
      "Célébration de la puissance féminine",
      "Tambours et danses traditionnelles",
      "Contes et messages sociaux",
      "Artisanat et masques Gelede"
    ],
    attendees: "Communautés locales et UNESCO",
    icon: Star,
    gradient: "from-pink-500 to-rose-600",
    historicalNote: "Reconnu par l'UNESCO comme chef-d'œuvre du patrimoine oral et immatériel."
  },
  {
    id: 5,
    name: "Fête de l'Igname",
    date: "Août (après récolte)",
    location: "Centre du Bénin",
    category: "agricole",
    image: "/fete-igname.jpg",
    description: "Célébration de la récolte de l'igname, aliment de base béninois. Moment de gratitude envers la terre et de célébration communautaire.",
    highlights: [
      "Repas communautaires géants",
      "Danses et masques traditionnels",
      "Chants de gratitude",
      "Offrandes aux divinités de la terre",
      "Partage intergénérationnel"
    ],
    attendees: "Toute la communauté",
    icon: Palmtree,
    gradient: "from-green-500 to-emerald-600",
    historicalNote: "Marque la fin de la saison des pluies et célèbre la générosité de la terre."
  },
  {
    id: 6,
    name: "Festival Guézo",
    date: "Décembre (annuel)",
    location: "Abomey",
    category: "historique",
    image: "/guezo-festival.jpg",
    description: "Hommage au roi Guézo, souverain important du XIXe siècle du royaume du Dahomey. Reconstitutions historiques et célébrations royales.",
    highlights: [
      "Reconstitutions historiques",
      "Cérémonies royales",
      "Musique de cour traditionnelle",
      "Expositions sur le royaume du Dahomey",
      "Visite des palais royaux"
    ],
    attendees: "Historiens et communauté",
    icon: Crown,
    gradient: "from-red-500 to-orange-600",
    historicalNote: "Honore la mémoire d'un des plus grands rois du Dahomey."
  },
  {
    id: 7,
    name: "Festival Gaani",
    date: "Décembre (7 jours)",
    location: "Gani, Nord Bénin",
    category: "culturel",
    image: "/gaani-festival.jpg",
    description: "Célébration de 7 jours du patrimoine culturel du Nord. Danses, sports tribaux, courses de chevaux et cérémonies religieuses.",
    highlights: [
      "Danses traditionnelles nordiques",
      "Sports tribaux et compétitions",
      "Courses de chevaux",
      "Cérémonies religieuses",
      "Artisanat local"
    ],
    attendees: "Communautés du Nord",
    icon: Mountain,
    gradient: "from-indigo-500 to-purple-600",
    historicalNote: "Célèbre la culture distincte du nord béninois."
  },
  {
    id: 8,
    name: "FRIA Festival",
    date: "Décembre (annuel)",
    location: "Cotonou",
    category: "moderne",
    featured: true,
    image: "/fria-festival.jpg",
    description: "Festival international de musique et danse. Artistes béninois et internationaux célèbrent la diversité culturelle dans une ambiance festive moderne.",
    highlights: [
      "Concerts internationaux",
      "Danses contemporaines et traditionnelles",
      "Artistes béninois et africains",
      "Fusion tradition-modernité",
      "Scènes multiples"
    ],
    attendees: "Milliers de festivaliers",
    icon: Music,
    gradient: "from-orange-500 to-red-600",
    historicalNote: "Festival moderne qui mélange tradition et modernité musicale."
  },
  {
    id: 9,
    name: "Festival de la Route des Esclaves",
    date: "Toute l'année (commémorations spéciales)",
    location: "Ouidah",
    category: "memorial",
    image: "/route-esclaves.jpg",
    description: "Commémoration de l'histoire de la traite négrière. Parcours de 4km de la maison des esclaves à la Porte du Non-Retour.",
    highlights: [
      "Parcours historique de 4km",
      "Porte du Non-Retour (UNESCO)",
      "Temple des Pythons",
      "Forêt sacrée de Kpassè",
      "Musées et mémoriaux"
    ],
    attendees: "Pèlerins de la diaspora",
    icon: ExternalLink,
    gradient: "from-gray-600 to-stone-700",
    historicalNote: "Site de mémoire majeur pour la diaspora africaine mondiale."
  }
]

const categories = [
  { id: 'tous', name: 'Tous les événements', icon: Calendar },
  { id: 'spirituel', name: 'Spirituel & Vodun', icon: Sparkles },
  { id: 'culturel', name: 'Culturel', icon: Music },
  { id: 'historique', name: 'Historique', icon: Crown },
  { id: 'agricole', name: 'Agricole', icon: Palmtree },
  { id: 'moderne', name: 'Moderne', icon: Music },
  { id: 'memorial', name: 'Mémoriel', icon: Star }
]

export default function EvenementsPage() {
  const [selectedCategory, setSelectedCategory] = useState('tous')
  const [selectedEvent, setSelectedEvent] = useState(null)

  const filteredEvents = selectedCategory === 'tous' 
    ? culturalEvents 
    : culturalEvents.filter(event => event.category === selectedCategory)

  const featuredEvents = culturalEvents.filter(event => event.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/20 to-orange-50/30">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-6 shadow-lg"
            >
              <Calendar className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
              Événements Culturels du Bénin
            </h1>
            
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed mb-8">
              Découvrez la richesse des festivals et célébrations qui rythment la vie culturelle béninoise. 
              De la spiritualité Vodun aux traditions ancestrales, vivez l'authenticité africaine.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-stone-600">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Patrimoine UNESCO</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Users className="w-4 h-4 text-purple-600" />
                <span>Milliers de visiteurs</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Star className="w-4 h-4 text-purple-600" />
                <span>Traditions millénaires</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Événements Phares */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Événements Phares 2026
            </h2>
            <p className="text-lg text-stone-600">
              Les festivals incontournables de la culture béninoise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredEvents.map((event, index) => {
              const EventIcon = event.icon
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedEvent(event)}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-stone-200 hover:border-amber-300">
                    <div className="relative h-64 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-90`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <EventIcon className="w-20 h-20 text-white/90" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-stone-900">
                          ⭐ Phare
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">
                        {event.name}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-stone-600">
                          <Calendar className="w-4 h-4 text-amber-600" />
                          <span className="text-sm font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-stone-600">
                          <MapPin className="w-4 h-4 text-amber-600" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-stone-600">
                          <Users className="w-4 h-4 text-amber-600" />
                          <span className="text-sm">{event.attendees}</span>
                        </div>
                      </div>

                      <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {event.description}
                      </p>

                      <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all font-medium group">
                        <span>Voir les détails</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Filtres par catégorie */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Filter className="w-5 h-5 text-amber-600" />
            <h3 className="text-xl font-semibold text-stone-900">Filtrer par catégorie</h3>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => {
              const CategoryIcon = category.icon
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-transparent shadow-lg'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-amber-300'
                  }`}
                >
                  <CategoryIcon className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Liste complète des événements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => {
              const EventIcon = event.icon
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedEvent(event)}
                  className="group cursor-pointer"
                >
                  <div className="bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-stone-200 hover:border-amber-300 h-full">
                    <div className={`h-3 bg-gradient-to-r ${event.gradient}`}></div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${event.gradient}`}>
                          <EventIcon className="w-6 h-6 text-white" />
                        </div>
                        {event.featured && (
                          <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-semibold">
                            Phare
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">
                        {event.name}
                      </h3>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-stone-600 text-sm">
                          <Calendar className="w-4 h-4 text-amber-600" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-stone-600 text-sm">
                          <MapPin className="w-4 h-4 text-amber-600" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-stone-600 text-sm leading-relaxed line-clamp-2">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal détails événement */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedEvent(null)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className={`h-64 bg-gradient-to-br ${selectedEvent.gradient} relative flex items-center justify-center`}>
              <selectedEvent.icon className="w-32 h-32 text-white/90" />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <h2 className="font-display text-3xl font-bold text-stone-900 mb-6">
                {selectedEvent.name}
              </h2>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-stone-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-amber-600 mb-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold text-sm">Date</span>
                  </div>
                  <p className="text-stone-900 font-medium">{selectedEvent.date}</p>
                </div>
                <div className="bg-stone-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-amber-600 mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold text-sm">Lieu</span>
                  </div>
                  <p className="text-stone-900 font-medium">{selectedEvent.location}</p>
                </div>
                <div className="bg-stone-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-amber-600 mb-2">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold text-sm">Affluence</span>
                  </div>
                  <p className="text-stone-900 font-medium">{selectedEvent.attendees}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-stone-900 mb-4">Description</h3>
                <p className="text-stone-600 leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-stone-900 mb-4">Temps forts</h3>
                <div className="space-y-3">
                  {selectedEvent.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${selectedEvent.gradient} flex-shrink-0`}></div>
                      <p className="text-stone-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {selectedEvent.historicalNote && (
                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-amber-900 mb-2">Note historique</h4>
                      <p className="text-amber-800 text-sm leading-relaxed">
                        {selectedEvent.historicalNote}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
