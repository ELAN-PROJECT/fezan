'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles,
  BookOpen,
  Compass,
  Star,
  Crown,
  Users,
  Globe,
  Eye,
  Zap,
  Heart,
  Shield,
  ChevronRight,
  Info,
  Award,
  Map,
  Clock
} from 'lucide-react'

// Les 16 Odu principaux du Fa
const oduPrincipaux = [
  { name: "Ogbe Meji", number: 1, meaning: "La lumière et la clarté", element: "Feu" },
  { name: "Oyeku Meji", number: 2, meaning: "Les ténèbres et la mort", element: "Terre" },
  { name: "Iwori Meji", number: 3, meaning: "La transformation", element: "Air" },
  { name: "Odi Meji", number: 4, meaning: "Le conflit et la naissance", element: "Eau" },
  { name: "Irosun Meji", number: 5, meaning: "Le sang et la vie", element: "Feu" },
  { name: "Owonrin Meji", number: 6, meaning: "Le chaos et l'ordre", element: "Air" },
  { name: "Obara Meji", number: 7, meaning: "La famille et les relations", element: "Eau" },
  { name: "Okanran Meji", number: 8, meaning: "Le courage et le défi", element: "Feu" },
  { name: "Ogunda Meji", number: 9, meaning: "La guerre et la victoire", element: "Feu" },
  { name: "Osa Meji", number: 10, meaning: "Les ancêtres et le destin", element: "Air" },
  { name: "Ika Meji", number: 11, meaning: "L'adversité et la persévérance", element: "Terre" },
  { name: "Oturupon Meji", number: 12, meaning: "La maladie et la guérison", element: "Eau" },
  { name: "Otura Meji", number: 13, meaning: "La sagesse et la paix", element: "Air" },
  { name: "Irete Meji", number: 14, meaning: "La créativité et l'abondance", element: "Eau" },
  { name: "Ose Meji", number: 15, meaning: "Le renouveau et la prospérité", element: "Terre" },
  { name: "Ofun Meji", number: 16, meaning: "La pureté et la spiritualité", element: "Air" }
]

const divinites = [
  {
    name: "Orunmila",
    title: "Divinité de la sagesse et de la divination",
    description: "Chez les Yoruba, Orunmila est l'Orisha qui transmet les messages entre les dieux et les hommes.",
    icon: Sparkles,
    color: "amber"
  },
  {
    name: "Lègba",
    title: "Intermédiaire entre les mondes",
    description: "Chez les Fon, Lègba sert d'interface entre le monde des esprits et celui des humains via le Fa.",
    icon: Star,
    color: "purple"
  },
  {
    name: "Fa (vodoun)",
    title: "L'esprit de la divination",
    description: "Dans la tradition Fon, Fa est lui-même considéré comme un vodoun qu'on interroge pour connaître l'avenir.",
    icon: Eye,
    color: "blue"
  }
]

const consultationReasons = [
  { icon: Heart, title: "Relations & Amour", description: "Problèmes sentimentaux, mariages, relations familiales" },
  { icon: Shield, title: "Protection", description: "Conjurer le mauvais sort, protection spirituelle" },
  { icon: Zap, title: "Santé", description: "Maladies graves, problèmes physiques ou spirituels" },
  { icon: Crown, title: "Réussite", description: "Projets professionnels, réussite dans les affaires" },
  { icon: Users, title: "Décisions importantes", description: "Moments critiques de la vie, choix majeurs" },
  { icon: Compass, title: "Destin", description: "Comprendre son chemin de vie, révéler son avenir" }
]

export default function LeFaPage() {
  const [selectedOdu, setSelectedOdu] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/20 to-orange-50/30">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mb-6 shadow-lg"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🏆 Patrimoine UNESCO depuis 2005
              </span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
              Le Fa (Ifa) : Oracle Ancestral
            </h1>
            
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed mb-8">
              Découvrez la géomancie divinatoire millénaire du golfe du Bénin. 
              Un système sacré de divination qui révèle le passé, éclaire le présent et guide vers l'avenir.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Award className="w-4 h-4 text-amber-600" />
                <span className="text-stone-700">Chef-d'œuvre UNESCO</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Globe className="w-4 h-4 text-amber-600" />
                <span className="text-stone-700">4 pays d'Afrique de l'Ouest</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span className="text-stone-700">256 signes divinatoires</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Origine et Histoire */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Map className="w-4 h-4" />
                Origines historiques
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
                De la ville sacrée d'Ilé-Ifè au Bénin
              </h2>
              
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  <strong className="text-stone-900">L'oracle Fa (ou Ifa)</strong> trouve ses racines dans la ville d'<strong>Ilé-Ifè au Nigéria</strong>, 
                  considérée comme le berceau spirituel de la divination. Cette cité yoruba reste aujourd'hui le sanctuaire incontesté du Fa 
                  pour tous les adeptes à travers le monde.
                </p>
                <p>
                  Au <strong className="text-stone-900">XVIIe siècle</strong>, le Fa s'est répandu au Bénin depuis le Nigéria, 
                  puis au Togo et au Ghana, suivant les migrations yoruba. Il s'est parfaitement intégré au <strong>culte Vodoun</strong> 
                  béninois, devenant le trait d'union entre les Orishas yoruba et les Vodouns fon.
                </p>
                <p>
                  Le <strong className="text-stone-900">royaume du Dahomey</strong> (actuel Bénin) a grandement contribué à 
                  l'essor du Fa au XVIIe siècle en faisant du Vodoun sa religion d'État. Les rois du Dahomey consultaient 
                  régulièrement le Fa par l'intermédiaire de grands prêtres.
                </p>
              </div>
            </div>

            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 shadow-xl"
              >
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-stone-900">Chronologie</h3>
                    </div>
                    <div className="space-y-3 text-sm text-stone-600">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <div><strong>Antiquité :</strong> Naissance à Ilé-Ifè, Nigéria</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <div><strong>XVIIe siècle :</strong> Expansion au Bénin et Togo</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <div><strong>XVIIe-XIXe :</strong> Âge d'or sous le Royaume du Dahomey</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <div><strong>2005 :</strong> Reconnaissance UNESCO</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-stone-900">Extension mondiale</h3>
                    </div>
                    <p className="text-sm text-stone-600">
                      Via la traite négrière, le Fa s'est répandu dans les Caraïbes et les Amériques, 
                      pratiqué dans la Santería (Cuba), le Candomblé (Brésil) et le Vaudou haïtien.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Qu'est-ce que le Fa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 sm:p-12"
          >
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
                Qu'est-ce que le Fa ?
              </h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto">
                Le Fa est bien plus qu'une simple divination : c'est une voie de connaissance, 
                un livre ouvert sur le passé, le présent et l'avenir.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">Science divinatoire</h3>
                <p className="text-sm text-stone-600">
                  Système mathématique complexe basé sur 256 signes (Odu) obtenus par combinaison binaire.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">Chemin initiatique</h3>
                <p className="text-sm text-stone-600">
                  Formation spirituelle qui conduit l'initié "des ténèbres à la lumière" à travers une mort symbolique et une renaissance.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">Sagesse ancestrale</h3>
                <p className="text-sm text-stone-600">
                  Corpus littéraire oral transmis depuis des millénaires, contenant proverbes, mythes et enseignements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Les divinités du Fa */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Les Divinités du Fa
            </h2>
            <p className="text-lg text-stone-600">
              Les esprits qui président à la divination
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {divinites.map((divinite, index) => {
              const Icon = divinite.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-stone-200"
                >
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2 text-center">
                    {divinite.name}
                  </h3>
                  <p className="text-sm font-semibold text-amber-600 mb-4 text-center">
                    {divinite.title}
                  </p>
                  <p className="text-stone-600 text-center leading-relaxed">
                    {divinite.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comment consulter le Fa */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Comment consulter le Fa ?
            </h2>
            <p className="text-lg text-stone-600">
              Le processus de consultation divinatoire
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-stone-900 mb-6">Les praticiens</h3>
              
              <div className="space-y-6">
                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
                  <h4 className="font-bold text-amber-900 mb-2">Bokonon (chez les Fon)</h4>
                  <p className="text-amber-800 text-sm">
                    Prêtre initié maîtrisant les 256 signes du Fa et capable d'interpréter les messages divins. 
                    Formé pendant des années dans la forêt sacrée Fa-Zu.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6">
                  <h4 className="font-bold text-purple-900 mb-2">Babalawo (chez les Yoruba)</h4>
                  <p className="text-purple-800 text-sm">
                    Littéralement "le père des secrets". Détenteur de la connaissance sacrée d'Ifa, 
                    il sert d'intermédiaire entre Orunmila et les consultants.
                  </p>
                </div>

                <div className="bg-stone-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-stone-600">
                        <strong className="text-stone-900">Formation :</strong> L'apprentissage du Fa nécessite 
                        plusieurs années d'initiation pour maîtriser les 256 Odu et leur corpus littéraire associé.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-stone-900 mb-6">Les instruments</h3>
              
              <div className="space-y-4">
                <div className="bg-white border-2 border-stone-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1">Chaîne de divination (Opele)</h4>
                      <p className="text-sm text-stone-600">
                        Chaîne en forme de U composée de 8 demi-graines. Jetée au sol, 
                        elle forme l'un des 256 signes possibles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-stone-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1">Noix sacrées (Ikin)</h4>
                      <p className="text-sm text-stone-600">
                        16 noix de palme ou de kola avec trois "yeux" ou plus. 
                        Manipulées d'une main à l'autre pour déterminer les signes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-stone-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1">Plateau de divination (Opon Ifa)</h4>
                      <p className="text-sm text-stone-600">
                        Plateau en bois recouvert de poudre où sont tracés les signes obtenus. 
                        Souvent orné du visage de Legba/Eshu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Raisons de consultation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-stone-900 mb-8 text-center">
              Pourquoi consulter le Fa ?
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {consultationReasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-stone-50 rounded-xl p-6 hover:shadow-lg transition-all border border-stone-200"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-stone-900 mb-2">{reason.title}</h4>
                    <p className="text-sm text-stone-600">{reason.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Les 16 Odu principaux */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Les 16 Odu Principaux
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Les signes cardinaux qui forment la base du système divinatoire. 
              Combinés entre eux, ils créent 240 signes supplémentaires pour un total de 256 Odu.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {oduPrincipaux.map((odu, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setSelectedOdu(odu)}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all text-left border-2 border-stone-200 hover:border-amber-400 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                    {odu.number}
                  </div>
                  <ChevronRight className="w-5 h-5 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-bold text-stone-900 mb-1">{odu.name}</h3>
                <p className="text-sm text-stone-600 mb-2">{odu.meaning}</p>
                <div className="inline-block bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-semibold">
                  {odu.element}
                </div>
              </motion.button>
            ))}
          </div>

        

        </div>
      </section>

      {/* Le processus de consultation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Le Déroulement d'une Consultation
            </h2>
            <p className="text-lg text-stone-600">
              Les étapes d'une séance de divination traditionnelle
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Préparation rituelle",
                  description: "Le consultant se purifie et présente ses offrandes (noix de kola, cauris, alcool). Le Bokonon invoque les divinités et ancêtres.",
                  icon: Star,
                  color: "purple"
                },
                {
                  step: 2,
                  title: "Formulation de la question",
                  description: "Le consultant expose sa préoccupation au Bokonon, qui la reformule dans un langage spirituel adapté à la consultation.",
                  icon: Users,
                  color: "blue"
                },
                {
                  step: 3,
                  title: "Manipulation des instruments",
                  description: "Le Bokonon jette la chaîne Opele ou manipule les noix sacrées pour obtenir l'un des 256 signes du Fa.",
                  icon: Compass,
                  color: "amber"
                },
                {
                  step: 4,
                  title: "Identification du signe (Odu)",
                  description: "Le signe obtenu est tracé sur le plateau de divination avec de la poudre sacrée. Chaque Odu possède des milliers de vers associés.",
                  icon: BookOpen,
                  color: "green"
                },
                {
                  step: 5,
                  title: "Récitation et interprétation",
                  description: "Le Bokonon récite les poèmes, proverbes et histoires liés au signe. Il interprète le message en fonction de la situation du consultant.",
                  icon: Eye,
                  color: "orange"
                },
                {
                  step: 6,
                  title: "Prescription de remèdes",
                  description: "Des sacrifices (ebo) sont prescrits pour conjurer le mauvais sort ou renforcer les influences positives : offrandes, rituels, interdits alimentaires.",
                  icon: Shield,
                  color: "red"
                }
              ].map((etape, index) => {
                const Icon = etape.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 items-start group"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 bg-stone-50 rounded-2xl p-6 group-hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">
                          {etape.step}
                        </span>
                        <h3 className="text-xl font-bold text-stone-900">{etape.title}</h3>
                      </div>
                      <p className="text-stone-600 leading-relaxed">{etape.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Reconnaissance UNESCO */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 sm:p-12 text-center">
              <Award className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                Patrimoine UNESCO depuis 2005
              </h2>
              <p className="text-purple-100 text-lg max-w-3xl mx-auto">
                Le Fa a été proclamé "chef-d'œuvre du patrimoine oral et immatériel de l'humanité"
              </p>
            </div>

            <div className="p-8 sm:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-4">Pourquoi cette reconnaissance ?</h3>
                  <div className="space-y-3 text-stone-600">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong className="text-stone-900">Richesse littéraire :</strong> Corpus oral de milliers de poèmes, proverbes et récits mythologiques</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong className="text-stone-900">Système mathématique :</strong> Logique binaire complexe qui a inspiré des chercheurs occidentaux</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong className="text-stone-900">Transmission ancestrale :</strong> Préservation orale millénaire de maître à disciple</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong className="text-stone-900">Impact culturel :</strong> Influence sur la philosophie, l'éthique et la cohésion sociale</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-4">Pays concernés</h3>
                  <div className="space-y-3">
                    {[
                      { pays: "Bénin", ville: "Ouidah, Abomey" },
                      { pays: "Nigéria", ville: "Ilé-Ifè (berceau)" },
                      { pays: "Togo", ville: "Régions frontalières" },
                      { pays: "Ghana", ville: "Communautés Yoruba" }
                    ].map((lieu, idx) => (
                      <div key={idx} className="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-500">
                        <div className="font-bold text-purple-900">{lieu.pays}</div>
                        <div className="text-sm text-purple-700">{lieu.ville}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-amber-900 mb-2">Rayonnement mondial</h4>
                    <p className="text-amber-800 text-sm leading-relaxed">
                      Au-delà de l'Afrique de l'Ouest, le Fa est pratiqué dans toute la diaspora africaine : 
                      Cuba (Santería), Brésil (Candomblé), Haïti (Vaudou), Trinidad et États-Unis. 
                      Cette dispersion témoigne de la résilience culturelle des peuples déportés lors de la traite négrière.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal Odu détaillé */}
      {selectedOdu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedOdu(null)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-center relative">
              <button
                onClick={() => setSelectedOdu(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-bold text-white">{selectedOdu.number}</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-white mb-2">
                {selectedOdu.name}
              </h2>
              <p className="text-white/90 text-lg">{selectedOdu.meaning}</p>
            </div>

            <div className="p-8">
              <div className="bg-amber-50 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-amber-600" />
                  <h3 className="font-bold text-amber-900">Élément associé</h3>
                </div>
                <p className="text-amber-800">{selectedOdu.element}</p>
              </div>

              <div className="bg-stone-50 rounded-xl p-6">
                <h3 className="font-bold text-stone-900 mb-3">À propos de ce signe</h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  {selectedOdu.name} est l'un des 16 Odu principaux du système de divination Fa. 
                  Chaque Odu possède des centaines de vers poétiques et de récits qui guident son interprétation.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-amber-500">
                  <p className="text-sm text-stone-600">
                    <strong className="text-stone-900">Note :</strong> Pour une consultation complète et personnalisée, 
                    il est recommandé de consulter un Bokonon ou Babalawo qualifié qui pourra interpréter 
                    ce signe dans le contexte de votre situation unique.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
} 
