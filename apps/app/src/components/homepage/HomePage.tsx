'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Loading } from './Loading'
import { Navigation } from './Navigation'
import { AboutSection, FeaturesSection } from './HomeSections'
import { TestimonialsSection, NewsletterSection } from './TestimonialsNewsletter'
import { Footer } from './Footer'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function HomePage() {
  return (
    <>
      <Loading />
      <div className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-stone-50">
          {/* Animated background blobs */}
          <div className="absolute inset-0 opacity-5">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0.3, 0.5, 0.3],
                x: [0, 50, 0],
                y: [0, 30, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-10 w-72 h-72 bg-amber-600 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1], 
                opacity: [0.3, 0.5, 0.3],
                x: [0, -50, 0],
                y: [0, -30, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1, ease: "easeInOut" }}
              className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600 rounded-full blur-3xl"
            />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="text-center lg:text-left"
              >
                <motion.div
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white border border-amber-200 rounded-full mb-4 shadow-sm cursor-default"
                >
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-amber-800 tracking-wide">
                    Spiritualité ancestrale africaine
                  </span>
                </motion.div>
                
                <motion.h1
                  variants={fadeIn}
                  className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-stone-900 tracking-tight mb-4"
                >
                  Reconnectez-vous à votre{' '}
                  <motion.span
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-[length:200%_auto]"
                  >
                    héritage spirituel africain
                  </motion.span>
                </motion.h1>
                
                <motion.p
                  variants={fadeIn}
                  className="text-base sm:text-lg text-stone-600 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  Découvrez la sagesse ancestrale africaine à travers l'astrologie, le Fa, 
                  et les traditions spirituelles millénaires qui vous guident vers votre destinée.
                </motion.p>
                
                <motion.div
                  variants={fadeIn}
                  className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="#horoscope"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 group"
                    >
                      Découvrir mon horoscope
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="#apropos"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-stone-700 font-medium rounded-xl hover:bg-stone-50 transition-all border border-stone-200 hover:border-stone-300 group"
                    >
                      En savoir plus
                      <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Video */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative max-w-md mx-auto lg:max-w-none"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-2xl blur-2xl"
                />
                
                <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-white/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-orange-600/5 to-transparent z-10 pointer-events-none" />
                  
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full aspect-square object-cover"
                  >
                    <source 
                      src="https://static.vecteezy.com/system/resources/previews/042/719/653/mp4/global-network-wireless-connection-simulation-on-monitor-digital-technology-large-station-ring-free-video.mp4" 
                      type="video/mp4" 
                    />
                  </video>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-xl border border-stone-100 hidden sm:block cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="bg-amber-100 p-2 rounded-lg"
                    >
                      <Sparkles className="w-4 h-4 text-amber-700" />
                    </motion.div>
                    <div>
                      <div className="text-xs text-stone-500">Réseau spirituel</div>
                      <div className="text-sm font-semibold text-stone-900">Connecté</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Other Sections */}
        <AboutSection />
        <FeaturesSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
      </div>
    </>
  )
}