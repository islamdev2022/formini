"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Brain, FileQuestion, Building, Globe } from "lucide-react"

const quizBlocks = [
  {
    id: 1,
    title: "Situations Réelles",
    content: "Un client se plaint de sa chambre, il est très mécontent. Que faites-vous ? Bonne réponse = +10 points",
    icon: FileQuestion,
    color: "from-red-600 to-pink-500",
  },
  {
    id: 2,
    title: "Règlement et Prestations de l'Établissement",
    content:
      "Quels sont les horaires de check-in ? (20 pts)\nQuels services sont inclus dans la formule demi-pension ? (20pts)\nQue dit la loi interne sur l'utilisation du téléphone en poste ? (20pts)",
    icon: Building,
    color: "from-red-600 to-red-400",
  },
  {
    id: 3,
    title: "Hôtellerie et Tourisme",
    content: 'Que signifie le terme "overbooking" ? (70pts)\nQuelle est la fonction d\'un concierge ? (90pts)',
    icon: Globe,
    color: "from-pink-500 to-red-500",
  },
  {
    id: 4,
    title: "Culture Générale",
    content: "Quelle est la capitale du Japon ? (40 pts)\nQuel pays attire le plus de touristes au monde ? (40 pts)",
    icon: Brain,
    color: "from-red-500 to-red-600",
  },
]

export default function QuizEtJeux() {
  const [activeBlock, setActiveBlock] = useState<number | null>(null)

  const toggleBlock = (id: number) => {
    setActiveBlock(activeBlock === id ? null : id)
  }

  return (
    <div className="max-w-5xl mx-auto py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Quiz & Jeux pédagogiques</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Testez vos connaissances et gagnez des points avec nos quiz interactifs
        </p>
      </motion.div>

      <div className="space-y-6">
        {quizBlocks.map((block, index) => (
          <motion.div
            key={block.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            <Card
              className={cn(
                "overflow-hidden rounded-2xl shadow-md transition-all duration-300",
                activeBlock === block.id ? "shadow-lg border-red-300" : "hover:shadow-lg cursor-pointer",
              )}
              onClick={() => toggleBlock(block.id)}
            >
              <CardHeader
                className={cn(
                  "transition-colors p-6 flex flex-row items-center justify-between",
                  activeBlock === block.id ? `bg-gradient-to-r ${block.color} text-white` : "bg-white hover:bg-red-50",
                )}
              >
                <div className="flex items-center">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center mr-4",
                      activeBlock === block.id ? "bg-white/20" : "bg-red-50",
                    )}
                  >
                    <block.icon className={cn("h-5 w-5", activeBlock === block.id ? "text-white" : "text-red-500")} />
                  </div>
                  <CardTitle className={cn(activeBlock === block.id ? "text-white" : "text-gray-800")}>
                    {block.title}
                  </CardTitle>
                </div>
                <motion.div animate={{ rotate: activeBlock === block.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-colors",
                      activeBlock === block.id ? "text-white" : "text-gray-400",
                    )}
                  />
                </motion.div>
              </CardHeader>

              <AnimatePresence>
                {activeBlock === block.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="p-6 bg-white">
                      {block.content.split("\n").map((line, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + i * 0.1 }}
                          className="text-gray-700 mb-3 p-3 bg-red-50/50 rounded-lg"
                        >
                          {line}
                        </motion.p>
                      ))}
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-400 text-white font-medium"
                      >
                        Répondre au quiz
                      </motion.button>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-16 p-8 bg-white rounded-2xl shadow-lg border border-red-100"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Votre score actuel</h2>
          <div className="text-5xl font-bold mb-4 text-gray-800">320 points</div>
          <p className="text-gray-600 mb-6">
            Continuez à jouer pour gagner plus de points et débloquer des récompenses
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-red px-8 py-3 rounded-full font-medium shadow-md"
          >
            Voir les récompenses
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
