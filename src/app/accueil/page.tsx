"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CheckCircle2, Star, TrendingUp, Award } from "lucide-react"

export default function Accueil() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="max-w-5xl mx-auto py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Excellence en Formation Hôtelière</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez comment nos formations transforment le secteur de l&apos;hôtellerie
        </p>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div variants={item}>
          <Card className="overflow-hidden rounded-2xl shadow-lg card-hover h-full pt-0">
            <div className="h-2 gradient-red" />
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Notre Vision</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Le monde de l&apos;hôtellerie est en perpétuelle évolution, exigeant un personnel toujours plus compétent,
                attentif et polyvalent. La formation devient alors un outil stratégique, garantissant non seulement la
                qualité du service, mais aussi la satisfaction et la fidélisation des clients.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Qu&apos;il s&apos;agisse de l&apos;accueil, de la cuisine, de l&apos;entretien ou du service en chambre, chaque membre de
                l&apos;équipe mérite une montée en compétence adaptée à son rôle. Ce site vous plonge dans l&apos;univers de la
                formation hôtelière, ses enjeux, ses méthodes, et ses impacts concrets sur la performance des
                établissements.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="overflow-hidden rounded-2xl shadow-lg card-hover h-full pt-0">
            <div className="h-2 gradient-red" />
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Pourquoi former le personnel ?</h2>

              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-full mr-4">
                    <CheckCircle2 className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Professionnalisation du personnel</h3>
                    <p className="text-gray-600">Développez l&apos;expertise de vos équipes pour un service irréprochable</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-full mr-4">
                    <Star className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Réduction des erreurs</h3>
                    <p className="text-gray-600">
                      Minimisez les incidents et garantissez une expérience client optimale
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-full mr-4">
                    <TrendingUp className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Meilleure ambiance de travail</h3>
                    <p className="text-gray-600">Créez un environnement positif pour une équipe soudée et motivée</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-full mr-4">
                    <Award className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Image de marque renforcée</h3>
                    <p className="text-gray-600">Valorisez la réputation de votre établissement grâce à l&apos;excellence</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="bg-gradient-to-r from-red-600 to-red-400 p-1 rounded-2xl shadow-xl">
          <div className="bg-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Prêt à transformer votre établissement ?</h2>
            <p className="text-gray-700 mb-6">Découvrez nos formations et amenez votre équipe vers l&apos;excellence</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-red px-8 py-3 rounded-full font-medium shadow-md"
            >
              Contactez-nous
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
