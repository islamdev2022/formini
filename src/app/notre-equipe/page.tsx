"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const executiveTeam = [
  {
    role: "Directeur de l'hôtel",
    name: "Ahmed Salim Telaiḍj",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    role: "Sous-Directrice",
    name: "Leila B.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const departments = [
  { name: "Hébergement", color: "bg-red-500" },
  { name: "Restauration", color: "bg-pink-500" },
  { name: "Ressources Humaines & Formation", color: "bg-red-600" },
  { name: "Commercial & Réservations", color: "bg-red-400" },
]

const managementTeam = [
  { role: "Chef de Réception", name: "Lélia B." },
  { role: "Responsable Housekeeping", name: "Karim M." },
  { role: "Chef de Cuisine", name: "Amine Z." },
  { role: "Responsable RH", name: "Inès K." },
  { role: "Responsable Maintenance", name: "Nassim T." },
  { role: "Responsable Marketing & Ventes", name: "Amina H." },
  { role: "Chargé des Réservations", name: "Sofiane B." },
  { role: "Chef Sécurité", name: "Mourad R." },
]

export default function NotreEquipe() {
  return (
    <div className="max-w-6xl mx-auto py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Notre Équipe</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Des professionnels dédiés à l&apos;excellence de la formation hôtelière
        </p>
      </motion.div>

      <div className="mb-16">
        <motion.h2
          className="text-2xl font-bold mb-8 gradient-text text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Direction
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {executiveTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg">
                <div className="p-6 flex items-center">
                  {/* <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full overflow-hidden mr-6 border-2 border-red-200"
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div> */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-red-600 font-medium">{member.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <motion.h2
          className="text-2xl font-bold mb-8 gradient-text text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Départements
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden rounded-2xl shadow-md cursor-pointer h-full pt-0">
                <div className={`h-2 ${dept.color}`} />
                <CardContent className="p-6 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-700">{dept.name}</h3>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Card className="rounded-2xl shadow-lg overflow-hidden border-0 pt-0">
          <div className="h-2 gradient-red" />
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-8 gradient-text">Équipe de Direction</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {managementTeam.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
                  className="flex flex-col"
                >
                  <div className="bg-red-50 rounded-xl p-4 mb-2">
                    <h3 className="font-bold text-red-600">{member.role}</h3>
                    <p className="text-gray-700">{member.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
