"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Home, FileSearch } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 mx-auto bg-red-50 rounded-full flex items-center justify-center">
            <FileSearch className="h-16 w-16 text-red-400" />
          </div>
          <motion.div
            animate={{
              rotate: [0, 10, 0, -10, 0],
              y: [0, -5, 0, -5, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "easeInOut",
            }}
            className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-red-600 to-red-400 rounded-full flex items-center justify-center text-white font-bold text-xl"
          >
            404
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
        >
          Page non trouvée
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg text-gray-600 mb-8"
        >
          Oups ! La page que vous recherchez semble avoir disparu ou n&apos;existe pas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="space-y-4"
        >
          <Button asChild size="lg" className="gradient-red rounded-full px-8 shadow-md">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" /> Retour à l&apos;accueil
            </Link>
          </Button>

          <p className="text-gray-500 mt-8">
            Vous pouvez également utiliser la barre de recherche pour trouver ce que vous cherchez.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-16 w-full max-w-lg"
      >
        <div className="p-6 bg-white rounded-2xl shadow-md border border-red-100">
          <h2 className="text-xl font-semibold mb-4 gradient-text">Pages populaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/accueil"
              className="p-3 rounded-xl hover:bg-red-50 transition-colors flex items-center text-gray-700 hover:text-red-600"
            >
              <span className="h-2 w-2 rounded-full bg-red-400 mr-2"></span>
              Accueil
            </Link>
            <Link
              href="/types-de-formations"
              className="p-3 rounded-xl hover:bg-red-50 transition-colors flex items-center text-gray-700 hover:text-red-600"
            >
              <span className="h-2 w-2 rounded-full bg-red-400 mr-2"></span>
              Types de formations
            </Link>
            <Link
              href="/quiz-et-jeux"
              className="p-3 rounded-xl hover:bg-red-50 transition-colors flex items-center text-gray-700 hover:text-red-600"
            >
              <span className="h-2 w-2 rounded-full bg-red-400 mr-2"></span>
              Quiz & Jeux
            </Link>
            <Link
              href="/notre-equipe"
              className="p-3 rounded-xl hover:bg-red-50 transition-colors flex items-center text-gray-700 hover:text-red-600"
            >
              <span className="h-2 w-2 rounded-full bg-red-400 mr-2"></span>
              Notre équipe
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
