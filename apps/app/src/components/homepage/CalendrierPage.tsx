'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar as CalendarIcon,
  Moon,
  Sun,
  Star,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Info,
  TrendingUp,
  TrendingDown
} from 'lucide-react'
import Image from 'next/image'

// Les 9 jours du cycle Fezan avec leurs propriétés
const fezanDays = {
  medjo: {
    name: "Mêdjo",
    number: 1,
    type: "favorable",
    meaning: "Naissance de l'être humain",
    description: "Premier jour lunaire, point de départ de la vie. Excellent pour les nouveaux départs, projets et initiatives.",
    icon: Sun,
    color: "amber",
    gradient: "from-amber-400 to-orange-400",
    activities: ["Nouveaux projets", "Déménagement", "Voyage", "Signature de contrats"],
    power: "Particulièrement puissant quand il tombe un jeudi"
  },
  mekou: {
    name: "Mêkou",
    number: 2,
    type: "defavorable",
    meaning: "La tristesse",
    description: "Jour de transition et de deuil. Réservé aux rituels funéraires et aux hommages aux défunts.",
    icon: Moon,
    color: "slate",
    gradient: "from-slate-400 to-gray-500",
    activities: ["Enterrements", "Rituels aux défunts", "Recueillement"],
    caution: "Éviter les grandes décisions et les célébrations"
  },
  vodoun: {
    name: "Vodoun",
    number: 3,
    type: "favorable",
    meaning: "Le jour du sacré",
    description: "Troisième jour lunaire, jour de l'esprit. Idéal pour les cérémonies spirituelles et cultuelles.",
    icon: Sparkles,
    color: "purple",
    gradient: "from-purple-400 to-indigo-400",
    activities: ["Cérémonies", "Rituels spirituels", "Prières", "Méditation"],
    power: "Exceptionnel quand il tombe un dimanche"
  },
  azon: {
    name: "Azon",
    number: 4,
    type: "defavorable",
    meaning: "La maladie",
    description: "Quatrième jour associé aux afflictions. La prudence est de mise pour éviter malédictions et maladies.",
    icon: TrendingDown,
    color: "red",
    gradient: "from-red-400 to-rose-400",
    activities: ["Rituels de protection", "Consultation divine"],
    caution: "Jour à éviter pour tout événement heureux"
  },
  vo: {
    name: "Vo",
    number: 5,
    type: "favorable",
    meaning: "Le sacrifice",
    description: "Cinquième jour lunaire. Propice aux sacrifices et aux rituels pour conjurer le mauvais sort.",
    icon: Star,
    color: "teal",
    gradient: "from-teal-400 to-cyan-400",
    activities: ["Sacrifices rituels", "Purification", "Libération spirituelle"],
    power: "Excellent pour rompre les maléfices"
  },
  houe: {
    name: "Akoué / Houè",
    number: 6,
    type: "defavorable",
    meaning: "Le jugement",
    description: "Sixième jour marqué par les disputes et conflits. Période de tensions et de discorde.",
    icon: TrendingDown,
    color: "orange",
    gradient: "from-orange-400 to-red-400",
    activities: ["Résolution de conflits", "Justice"],
    caution: "Éviter les nouvelles relations et associations"
  },
  bo: {
    name: "Bô",
    number: 7,
    type: "mixte",
    meaning: "Le sort",
    description: "Septième jour, propice aux pratiques occultes bonnes ou mauvaises. Jour de choix consciencieux.",
    icon: Sparkles,
    color: "violet",
    gradient: "from-violet-400 to-purple-400",
    activities: ["Pratiques magiques", "Bénédictions", "Protection"],
    power: "Très puissant le mardi",
    caution: "Bien réfléchir avant d'agir"
  },
  hin: {
    name: "Hin / Fô",
    number: 8,
    type: "defavorable",
    meaning: "La misère",
    description: "Huitième jour défavorable. Tout projet commencé ce jour risque d'engendrer déception et échec.",
    icon: TrendingDown,
    color: "gray",
    gradient: "from-gray-400 to-slate-400",
    activities: ["Repos", "Réflexion"],
    caution: "Ne rien entreprendre d'important"
  },
  fa: {
    name: "Fâ",
    number: 9,
    type: "favorable",
    meaning: "L'oracle",
    description: "Neuvième et dernier jour du cycle. Jour idéal pour consulter l'oracle et prendre des décisions éclairées.",
    icon: Star,
    color: "blue",
    gradient: "from-blue-400 to-indigo-400",
    activities: ["Consultation de l'oracle", "Divination", "Grandes décisions", "Planification"],
    power: "Moment propice pour la sagesse et le conseil"
  }
}

// Fonction pour calculer le jour Fezan (simplifié - dans la vraie app il faudrait les vraies dates)
function getFezanDay(date) {
  const cycle = ['medjo', 'mekou', 'vodoun', 'azon', 'vo', 'houe', 'bo', 'hin', 'fa']
  const dayIndex = (date.getDate() + date.getMonth()) % 9
  return fezanDays[cycle[dayIndex]]
}

export default function CalendrierPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState(null)
  const [calendarDays, setCalendarDays] = useState([])

  useEffect(() => {
    generateCalendar(currentDate)
  }, [currentDate])

  const generateCalendar = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Jours vides avant le premier jour du mois
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Jours du mois
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDay = new Date(year, month, day)
      const fezanInfo = getFezanDay(currentDay)
      days.push({
        date: day,
        fullDate: currentDay,
        fezan: fezanInfo,
        isToday: 
          day === new Date().getDate() &&
          month === new Date().getMonth() &&
          year === new Date().getFullYear()
      })
    }

    setCalendarDays(days)
  }

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate)
    newDate.setMonth(currentDate.getMonth() + direction)
    setCurrentDate(newDate)
  }

  const monthNames = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ]

  const dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/20 to-orange-50/30">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        {/* Fond décoratif */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl"></div>
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
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mb-6 shadow-lg"
            >
              <CalendarIcon className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
              Calendrier Fêzan
            </h1>
            
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed mb-8">
              Découvrez le calendrier lunaire ancestral basé sur les traditions vodoun. 
              Chaque jour possède une énergie unique qui guide vos décisions importantes.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-stone-600">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Moon className="w-4 h-4 text-amber-600" />
                <span>Basé sur le cycle lunaire</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Star className="w-4 h-4 text-amber-600" />
                <span>9 jours sacrés par cycle</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Tradition millénaire</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendrier Principal */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-200"
          >
            {/* En-tête du calendrier */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => changeMonth(-1)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>

                <button
                  onClick={() => changeMonth(1)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Grille du calendrier */}
            <div className="p-4 sm:p-6">
              {/* Noms des jours */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {dayNames.map((day) => (
                  <div
                    key={day}
                    className="text-center text-sm font-semibold text-stone-600 py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Jours du mois */}
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => {
                  if (!day) {
                    return <div key={`empty-${index}`} className="aspect-square"></div>
                  }

                  const DayIcon = day.fezan.icon
                  const isSelected = selectedDay?.date === day.date

                  return (
                    <motion.button
                      key={day.date}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedDay(day)}
                      className={`
                        aspect-square p-2 rounded-xl border-2 transition-all relative
                        ${day.isToday ? 'ring-2 ring-amber-500 ring-offset-2' : ''}
                        ${isSelected ? 'border-amber-500 bg-amber-50' : 'border-stone-200 hover:border-amber-300'}
                        ${day.fezan.type === 'favorable' ? 'bg-gradient-to-br from-green-50 to-emerald-50' : ''}
                        ${day.fezan.type === 'defavorable' ? 'bg-gradient-to-br from-red-50 to-rose-50' : ''}
                        ${day.fezan.type === 'mixte' ? 'bg-gradient-to-br from-violet-50 to-purple-50' : ''}
                      `}
                    >
                      <div className="flex flex-col items-center justify-center h-full">
                        <span className="text-lg font-semibold text-stone-900 mb-1">
                          {day.date}
                        </span>
                        <DayIcon className={`w-4 h-4 text-${day.fezan.color}-600`} />
                      </div>
                      
                      {day.isToday && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full"></div>
                      )}
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Détails du jour sélectionné */}
          {selectedDay && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-200"
            >
              <div className={`bg-gradient-to-r ${selectedDay.fezan.gradient} p-6`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">
                      {selectedDay.fezan.name}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {selectedDay.fezan.meaning}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-bold text-white mb-1">
                      {selectedDay.date}
                    </div>
                    <div className="text-white/90 text-sm">
                      {monthNames[currentDate.getMonth()]}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Info className="w-5 h-5 text-amber-600" />
                      <h4 className="font-semibold text-lg text-stone-900">Description</h4>
                    </div>
                    <p className="text-stone-600 leading-relaxed mb-6">
                      {selectedDay.fezan.description}
                    </p>

                    {selectedDay.fezan.power && (
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                        <div className="flex items-start gap-3">
                          <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-amber-900 mb-1">Pouvoir spécial</div>
                            <div className="text-sm text-amber-700">{selectedDay.fezan.power}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedDay.fezan.caution && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                          <TrendingDown className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-red-900 mb-1">Attention</div>
                            <div className="text-sm text-red-700">{selectedDay.fezan.caution}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-amber-600" />
                      <h4 className="font-semibold text-lg text-stone-900">
                        Activités recommandées
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {selectedDay.fezan.activities.map((activity, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedDay.fezan.gradient}`}></div>
                          <span className="text-stone-700">{activity}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`mt-6 p-4 rounded-xl border-2 ${
                      selectedDay.fezan.type === 'favorable' ? 'bg-green-50 border-green-300' :
                      selectedDay.fezan.type === 'defavorable' ? 'bg-red-50 border-red-300' :
                      'bg-violet-50 border-violet-300'
                    }`}>
                      <div className="font-semibold text-stone-900 mb-1">
                        Type de jour
                      </div>
                      <div className={`text-sm ${
                        selectedDay.fezan.type === 'favorable' ? 'text-green-700' :
                        selectedDay.fezan.type === 'defavorable' ? 'text-red-700' :
                        'text-violet-700'
                      }`}>
                        {selectedDay.fezan.type === 'favorable' ? '✓ Jour favorable' :
                         selectedDay.fezan.type === 'defavorable' ? '✗ Jour défavorable' :
                         '◐ Jour mixte (à utiliser avec discernement)'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Guide des 9 jours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Les 9 Jours du Cycle Fêzan
            </h2>
            <p className="text-lg text-stone-600">
              Chaque jour du cycle possède une énergie et des influences uniques
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(fezanDays).map((day, index) => {
              const DayIcon = day.icon
              return (
                <motion.div
                  key={day.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-all border border-stone-200 hover:border-amber-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${day.gradient}`}>
                        <DayIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-stone-900">{day.number}</div>
                        <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                          day.type === 'favorable' ? 'bg-green-100 text-green-700' :
                          day.type === 'defavorable' ? 'bg-red-100 text-red-700' :
                          'bg-violet-100 text-violet-700'
                        }`}>
                          {day.type === 'favorable' ? 'Favorable' :
                           day.type === 'defavorable' ? 'Défavorable' : 'Mixte'}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-stone-900 mb-2">
                      {day.name}
                    </h3>
                    <p className="text-sm text-amber-700 font-medium mb-3">
                      {day.meaning}
                    </p>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {day.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
