'use client'

import { motion } from 'framer-motion'
import { Star, Mail } from 'lucide-react'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aminata D.",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
      text: "Fezan m'a permis de renouer avec mes racines spirituelles. Les consultations du Fa ont éclairé mon chemin de façon remarquable."
    },
    {
      name: "Kwame A.",
      location: "Accra, Ghana",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      text: "Une plateforme exceptionnelle qui préserve et rend accessible notre héritage spirituel. Le calendrier des fêtes m'est indispensable."
    },
    {
      name: "Zara M.",
      location: "Dakar, Sénégal",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      text: "J'ai découvert la signification profonde de mon prénom et l'histoire de mes ancêtres. Fezan est une véritable ressource culturelle."
    }
  ]

  const communityImages = [
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=40&h=40&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop"
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-stone-900 tracking-tight mb-6">
            Ce que dit notre communauté
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Rejoignez des milliers de personnes qui ont retrouvé leur connexion spirituelle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-amber-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  </motion.div>
                ))}
              </div>
              <p className="text-stone-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover border-2 border-white shadow-md"
                  />
                </div>
                <div>
                  <div className="font-semibold text-stone-900">{testimonial.name}</div>
                  <div className="text-sm text-stone-500">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Community */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
            <div className="flex -space-x-2">
              {communityImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative w-8 h-8"
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="rounded-full border-2 border-white object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <span className="text-sm font-medium text-amber-900">+12 000 membres nous font confiance</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function NewsletterSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20"
        >
          <Mail className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4"
        >
          Recevez votre guidance spirituelle quotidienne
        </motion.h2>
        
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-lg text-amber-50 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Inscrivez-vous à notre newsletter pour recevoir votre horoscope, les dates importantes 
          et les enseignements ancestraux directement dans votre boîte mail.
        </motion.p>
        
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="max-w-md mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3.5 rounded-xl bg-white/95 backdrop-blur-sm text-stone-900 placeholder-stone-500 border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3.5 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition-colors shadow-lg whitespace-nowrap"
            >
              S'inscrire
            </motion.button>
          </div>
          <p className="text-xs text-amber-100 mt-3">Pas de spam. Désabonnement en un clic.</p>
        </motion.form>
      </div>
    </section>
  )
}
