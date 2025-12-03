'use client'

import { motion } from 'framer-motion'
import { Twitter, Facebook, Instagram, Youtube, Mail, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Calendrier', href: '/calendrier' },
    { name: 'Événements', href: '/evenements' },
    { name: 'Le Fa', href: '/le-fa' },
    { name: 'Prénoms', href: '/prenoms' },
  ]

  const resources = [
    { name: 'Blog', href: '#' },
    { name: 'Guides spirituels', href: '#' },
    { name: 'Glossaire', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Support', href: '/contact' },
  ]

  const legal = [
    { name: 'Mentions légales', href: '#' },
    { name: 'CGU', href: '#' },
    { name: 'Politique de confidentialité', href: '#' },
    { name: 'Cookies', href: '#' },
  ]

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ]

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Colonne 1 - À propos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
             <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 sm:w-12 sm:h-12"
            >
              <Image
                src="/logo.png"
                alt="Fezan Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
              <span className="font-display text-xl font-semibold text-white tracking-tight">
                Fezan
              </span>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed mb-4">
              Reconnectez-vous à votre héritage spirituel africain et découvrez la sagesse ancestrale.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 bg-stone-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Colonne 2 - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {navigation.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="hover:text-amber-500 transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3 - Ressources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2.5 text-sm">
              {resources.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="hover:text-amber-500 transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 4 - Légal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-2.5 text-sm">
              {legal.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="hover:text-amber-500 transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-stone-800"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-stone-400">
              © {new Date().getFullYear()} Fezan. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <motion.a
                href="mailto:birotori@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 hover:text-amber-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>birotori@gmail.com</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 hover:text-amber-500 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
