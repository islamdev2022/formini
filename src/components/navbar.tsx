"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, User, X } from "lucide-react"
import { motion } from "framer-motion"

const routes = [
  { name: "Accueil", path: "/accueil" },
  { name: "Types de formations", path: "/types-de-formations" },
  { name: "Quiz & Jeux", path: "/quiz-et-jeux" },
  { name: "Achats", path: "/achats" },
  { name: "Notre équipe", path: "/notre-equipe" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Add body lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-red-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-bold text-2xl bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text"
            >
              Formini
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {routes.map((route) => {
              const isActive = pathname === route.path

              return (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    "relative py-2 text-gray-700 hover:text-red-600 transition-colors",
                    isActive && "text-red-600 font-medium",
                  )}
                >
                  {route.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeRoute"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Profile Icon */}
          <div className="flex items-center">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" className="text-gray-700 rounded-full hover:bg-red-50">
                <User className="h-5 w-5" />
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="z-10">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden ml-2 rounded-full z-10"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden fixed inset-0 pt-20"
        >
          <div className="flex flex-col space-y-2 p-4 bg-white rounded-lg shadow-lg max-w-sm mx-auto">
            {routes.map((route) => {
              const isActive = pathname === route.path

              return (
                <motion.div key={route.path} whileHover={{ x: 10 }} className="overflow-hidden">
                  <Link
                    href={route.path}
                    className={cn(
                      "block text-gray-700 hover:text-red-600 py-2 text-lg rounded-xl px-4 transition-colors",
                      isActive
                        ? "bg-gradient-to-r from-red-50 to-transparent text-red-600 font-medium border-l-4 border-red-500"
                        : "",
                    )}
                  >
                    {route.name}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      )}
    </nav>
  )
}