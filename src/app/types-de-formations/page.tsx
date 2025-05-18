"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Shield, PenToolIcon as Tool, Globe } from "lucide-react"
import { motion } from "framer-motion"

const formations = [
  {
    title: "Accueil et service client",
    description: "Améliorer la communication, la politesse, la gestion des conflits…",
    icon: BookOpen,
    color: "from-red-600 to-pink-500",
    delay: 0,
  },
  {
    title: "Hygiène et sécurité",
    description: "Normes HACCP, nettoyage, manipulation des aliments…",
    icon: Shield,
    color: "from-red-600 to-orange-500",
    delay: 0.1,
  },
  {
    title: "Formation technique",
    description: "Cuisine, entretien, maintenance, etc.",
    icon: Tool,
    color: "from-red-500 to-red-600",
    delay: 0.2,
  },
  {
    title: "Langues étrangères / informatique",
    description: "Pour s'adapter à la clientèle internationale et aux outils modernes",
    icon: Globe,
    color: "from-pink-500 to-red-500",
    delay: 0.3,
  },
]

export default function TypesDeFormations() {
  return (
    <div className="max-w-6xl mx-auto py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Nos Programmes de Formation</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Des formations adaptées à tous les besoins de l&apos;industrie hôtelière
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {formations.map((formation, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: formation.delay, duration: 0.5 }}
          >
            <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="overflow-hidden rounded-3xl shadow-lg border-0 h-full py-0">
                <div className={`h-24 flex items-center justify-center bg-gradient-to-r ${formation.color}`}>
                  <formation.icon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">{formation.title}</h2>
                  <p className="text-gray-700">{formation.description}</p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full flex items-center justify-center bg-red-100 mr-4">
                        <span className="font-bold text-red-600">01</span>
                      </div>
                      <span className="text-gray-700">Bases fondamentales</span>
                    </div>

                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full flex items-center justify-center bg-red-100 mr-4">
                        <span className="font-bold text-red-600">02</span>
                      </div>
                      <span className="text-gray-700">Perfectionnement</span>
                    </div>

                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full flex items-center justify-center bg-red-100 mr-4">
                        <span className="font-bold text-red-600">03</span>
                      </div>
                      <span className="text-gray-700">Expertise avancée</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
