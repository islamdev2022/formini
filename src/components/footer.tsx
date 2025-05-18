"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-red-100 bg-gradient-to-b from-white to-red-200 text-center md:text-left">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="font-bold text-2xl gradient-text mb-4 inline-block">
              Formini
            </Link>
            <p className="text-gray-600 mt-4">
              Investir dans les compétences, c&apos;est construire l&apos;excellence hôtelière. Formini vous accompagne dans la
              formation de vos équipes.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6 gradient-text">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/accueil" className="text-gray-600 hover:text-red-500 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/types-de-formations" className="text-gray-600 hover:text-red-500 transition-colors">
                  Types de formations
                </Link>
              </li>
              <li>
                <Link href="/quiz-et-jeux" className="text-gray-600 hover:text-red-500 transition-colors">
                  Quiz & Jeux
                </Link>
              </li>
              <li>
                <Link href="/achats" className="text-gray-600 hover:text-red-500 transition-colors">
                  Achats
                </Link>
              </li>
              <li>
                <Link href="/notre-equipe" className="text-gray-600 hover:text-red-500 transition-colors">
                  Notre équipe
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6 gradient-text">Nos Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                  Formation sur mesure
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                  Certification professionnelle
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                  Coaching d&apos;équipe
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                  Audit et conseil
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                  E-learning
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6 gradient-text">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-600">123 Avenue de l&apos;Hôtellerie, 16000 , Alger Algerie</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-gray-600">+231 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-gray-600">contact@formini.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-red-100 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 text-sm">© 2025 Formini. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-red-500 transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-red-500 transition-colors">
              Conditions d&apos;utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
