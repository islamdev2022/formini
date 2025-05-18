"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from 'lucide-react'

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="w-full max-w-2xl mx-auto mt-8 mb-12"
    >
      <div
        className={`
          relative flex items-center bg-white rounded-full shadow-md 
          border transition-all duration-300 overflow-hidden
          ${isFocused ? "border-red-300 shadow-lg ring-2 ring-red-100" : "border-gray-200"}
        `}
      >
        <div className="pl-5">
          <Search
            className={`h-5 w-5 transition-colors duration-300 ${
              isFocused ? "text-red-500" : "text-gray-400"
            }`}
          />
        </div>
        <input
          type="text"
          placeholder="Rechercher une formation, un quiz..."
          className="w-full py-4 px-4 outline-none text-gray-700"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="gradient-red m-1 py-3 px-6 rounded-full font-medium text-sm"
        >
          Rechercher
        </motion.button>
      </div>
    </motion.div>
  )
}
