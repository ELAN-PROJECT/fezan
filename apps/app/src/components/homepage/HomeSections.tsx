'use client'

import { motion } from 'framer-motion'
import { 
  Stars, 
  BookOpen, 
  Users,
  Moon,
  CalendarDays,
  Hexagon,
  BookMarked,
  Star,
  ArrowRight
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

export function AboutSection() {
  const pillars = [
    {
      icon: Stars,
      title: "Astrologie personnalisée",
      description: "Horoscopes basés sur les traditions africaines, adaptés à votre signe et votre parcours spirituel unique.",
      gradient: "from-amber-100 to-orange-100"
    },
    {
      icon: BookOpen,
      title: "Savoirs ancestraux",
      description: "Accédez aux enseignements du Fa, de l'Ifa et des traditions spirituelles préservées depuis des millénaires.",
      gradient: "from-orange-100 to-amber-100"
    },
    {
      icon: Users,
      title: "Communauté vivante",
      description: "Rejoignez des milliers de personnes en quête de sagesse et participez à des événements spirituels enrichissants.",
      gradient: "from-amber-100 to-orange-100"
    }
  ]

  return (
    <section id="apropos" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-stone-900 tracking-tight mb-6">
            Qu'est-ce que Fezan ?
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Fezan est une plateforme dédiée à la préservation et au partage de la spiritualité 
            africaine ancestrale. Nous rendons accessible les savoirs millénaires pour guider 
            votre cheminement personnel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white border border-stone-200 rounded-2xl p-8 hover:border-amber-200 transition-all hover:shadow-xl"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                >
                  <pillar.icon className="w-6 h-6 text-amber-700" />
                </motion.div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturesSection() {
  const features = [
    {
      href: "/calendrier",
      image: "/horoscope.png",
      icon: Moon,
      title: "Horoscope du jour",
      description: "Consultez votre horoscope quotidien basé sur les traditions africaines ancestrales.",
      bgGradient: "from-amber-100 to-orange-100"
    },
    {
      href: "/evenements",
      image: "/calendrier.jpeg",
      icon: CalendarDays,
      title: "Evènement sacré",
      description: "Explorez les fêtes, rituels et dates importantes des traditions africaines.",
      bgGradient: "from-orange-100 to-amber-100"
    },
    {
      href: "/le-fa",
      image: "/fa.jpeg",
      icon: Hexagon,
      title: "Oracle Fa/Ifa",
      description: "Consultez l'oracle divinatoire ancestral pour éclairer votre chemin de vie.",
      bgGradient: "from-amber-100 via-orange-100 to-amber-100"
    },
    {
      href: "/prenoms",
      image: "/prenom.jpeg",
      icon: BookMarked,
      title: "Prénoms africains",
      description: "Découvrez la signification spirituelle et l'origine des prénoms africains.",
      bgGradient: "from-orange-100 to-amber-100"
    }
  ]

  return (
    <section id="horoscope" className="py-16 sm:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-stone-900 tracking-tight mb-6">
            Explorez nos fonctionnalités
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Découvrez tous les outils et ressources pour approfondir votre connexion spirituelle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={feature.href}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all block"
              >
                <div className={`aspect-[4/3] overflow-hidden bg-gradient-to-br ${feature.bgGradient}`}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="bg-amber-100 p-1.5 rounded-lg">
                      <feature.icon className="w-4 h-4 text-amber-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-stone-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-amber-700 text-sm font-medium group-hover:gap-2 transition-all">
                    <span>Découvrir</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
