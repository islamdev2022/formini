"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motion } from "framer-motion"

const rewards = [
  {
    name: "Journée OFF (repos offert)",
    description: "Une journée de repos bien méritée",
    points: 1000,
  },
  {
    name: "Dîner à la carte gratuit",
    description: "Accès au restaurant avec menu spécial",
    points: 1200,
  },
  {
    name: "Amélioration de grade",
    description: "Possibilité d'être promu dans le classement",
    points: 5000,
  },
  {
    name: 'Badge "Expert Hôtelier"',
    description: "Badge spécial + Certificat interne",
    points: 7000,
  },
  {
    name: "Cadeau surprise",
    description: "Un petit cadeau utile au quotidien",
    points: 1500,
  },
]

export default function Achats() {
  return (
    <div className="max-w-6xl mx-auto py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Achats / Récompenses</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Échangez vos points contre des récompenses exclusives</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="overflow-x-auto">
          <Table className="border rounded-2xl shadow-lg overflow-hidden">
            <TableHeader className="gradient-red">
              <TableRow>
                <TableHead className="text-white font-medium">Récompense</TableHead>
                <TableHead className="text-white font-medium">Description</TableHead>
                <TableHead className="text-white font-medium text-right">Points nécessaires</TableHead>
                <TableHead className="text-white font-medium text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rewards.map((reward, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className={index % 2 === 0 ? "bg-white" : "bg-red-50"}
                >
                  <TableCell className="font-medium">{reward.name}</TableCell>
                  <TableCell>{reward.description}</TableCell>
                  <TableCell className="text-right font-bold text-red-600">{reward.points} pts</TableCell>
                  <TableCell className="text-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" className="border-red-300 hover:bg-red-50 rounded-xl">
                        Achat
                      </Button>
                    </motion.div>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 p-6 bg-white rounded-2xl shadow-md border border-red-100 text-center"
      >
        <p className="text-gray-700 mb-4">
          Vous avez actuellement <span className="font-bold text-red-600">320 points</span>
        </p>
        <p className="text-gray-500 mb-4">Continuez à participer aux quiz pour gagner plus de points</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="gradient-red rounded-full px-6">Participer aux quiz</Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
