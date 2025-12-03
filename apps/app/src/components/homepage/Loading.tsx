'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [particles, setParticles] = useState([]) // ✅ AJOUTÉ

  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    // Simulation de progression réaliste
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  // ✅ GÉNÉRER LES PARTICULES UNE SEULE FOIS
  useEffect(() => {
    const newParticles = [...Array(15)].map((_, i) => ({
      id: i,
      initialX: Math.random() * dimensions.width,
      animateX: Math.random() * dimensions.width,
      scale: Math.random() * 0.5 + 0.3,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 3
    }))
    
    setParticles(newParticles)
  }, [dimensions.width, dimensions.height])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30 overflow-hidden"
        >
          {/* Cercles d'ondes concentriques en arrière-plan */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ 
                  scale: [0, 2.5, 3],
                  opacity: [0.6, 0.2, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 1,
                  ease: "easeOut"
                }}
                className="absolute w-96 h-96 border border-amber-400/30 rounded-full"
              />
            ))}
          </div>

          <div className="text-center relative z-10">
            {/* Logo avec animation d'infini */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              className="mb-8 relative"
            >
              {/* Glow effect derrière le logo */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 blur-2xl bg-gradient-to-br from-blue-400 via-teal-400 to-blue-600 rounded-full"
              />
              
              {/* Logo principal */}
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="relative w-32 h-32 mx-auto"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Fezan Logo"
                    width={120}
                    height={120}
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>

              {/* Ombre portée dynamique */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-gradient-to-r from-transparent via-blue-900/20 to-transparent rounded-full blur-xl"
              />
            </motion.div>

            {/* Texte Fezan avec effet élégant */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8"
            >
              <motion.h2
                className="font-display text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-600 to-blue-600 mb-2"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 100%'
                }}
              >
                FEZAN
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ delay: 0.5, duration: 2, repeat: Infinity }}
                className="text-sm text-stone-600 tracking-wider uppercase font-medium"
              >
                Chargement en cours
              </motion.p>
            </motion.div>

            {/* Barre de progression moderne */}
            <div className="w-64 mx-auto mb-6">
              <div className="relative h-2 bg-stone-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-teal-500 to-blue-500 rounded-full"
                >
                  {/* Effet de brillance qui se déplace */}
                  <motion.div
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  />
                </motion.div>
              </div>
              
              {/* Pourcentage */}
              <motion.div
                key={Math.floor(progress)}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center mt-3"
              >
                <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">
                  {Math.floor(progress)}%
                </span>
              </motion.div>
            </div>

            {/* Points de chargement animés */}
            <motion.div className="flex items-center justify-center space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-500"
                />
              ))}
            </motion.div>
          </div>

          {/* ✅ PARTICULES FLOTTANTES CORRIGÉES */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                initial={{ 
                  x: particle.initialX,
                  y: dimensions.height + 50,
                  scale: particle.scale,
                }}
                animate={{
                  y: -50,
                  x: particle.animateX,
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: particle.delay
                }}
                className="absolute w-1 h-1 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full"
              />
            ))}
          </div>

          {/* Ligne lumineuse du bas */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
