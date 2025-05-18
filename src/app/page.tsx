"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, Award, Users } from "lucide-react"
import SearchBar from "@/components/search-bar"
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h1
            className="text-7xl md:text-8xl font-bold mb-8 gradient-text"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            Formini
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Investir dans les compétences, c&apos;est construire l&apos;excellence hôtelière.
          </motion.p>
            <SearchBar />
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="gradient-red rounded-full text-lg px-8 shadow-md hover:shadow-xl transition-all"
            >
              <Link href="/accueil">Découvrir</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-red-300 rounded-full text-lg px-8">
              <Link href="/types-de-formations">Nos formations</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-red-100"
          >
            <div className="bg-red-50 w-14 h-14 flex items-center justify-center rounded-xl mb-4 mx-auto">
              <BookOpen className="text-red-500 h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2 gradient-text">Formations Personnalisées</h3>
            <p className="text-gray-600">Des formations adaptées à tous les métiers de l&apos;hôtellerie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-red-100"
          >
            <div className="bg-red-50 w-14 h-14 flex items-center justify-center rounded-xl mb-4 mx-auto">
              <Award className="text-red-500 h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2 gradient-text">Certification</h3>
            <p className="text-gray-600">Des parcours certifiants reconnus dans l&apos;industrie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-red-100"
          >
            <div className="bg-red-50 w-14 h-14 flex items-center justify-center rounded-xl mb-4 mx-auto">
              <Users className="text-red-500 h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2 gradient-text">Accompagnement</h3>
            <p className="text-gray-600">Un suivi personnalisé tout au long de votre parcours</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
