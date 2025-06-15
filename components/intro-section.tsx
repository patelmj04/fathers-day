"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

interface IntroSectionProps {
  onComplete: () => void
}

export default function IntroSection({ onComplete }: IntroSectionProps) {
  const [showMessage, setShowMessage] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)

  const handleButtonClick = () => {
    setShowMessage(true)

    // Show first line immediately
    setTimeout(() => setCurrentLine(1), 500)
    // Show second line after 2 seconds
    setTimeout(() => setCurrentLine(2), 2500)
    // Transition to gallery after 4 seconds
    setTimeout(() => onComplete(), 5000)
  }

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center px-4">
        {!showMessage ? (
          <motion.button
            onClick={handleButtonClick}
            className="relative px-12 py-6 text-xl font-semibold text-slate-700 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                  "linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <span className="relative z-10">Do you know who you are?</span>
          </motion.button>
        ) : (
          <div className="space-y-6">
            {/* Sparkle Animation */}
            <motion.div
              className="flex justify-center space-x-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </motion.div>
              ))}
            </motion.div>

            {/* Message Lines */}
            <div className="space-y-4">
              {currentLine >= 1 && (
                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-slate-800 font-['Poppins']"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  You are the best dad.
                </motion.h1>
              )}

              {currentLine >= 2 && (
                <motion.h2
                  className="text-3xl md:text-5xl font-semibold text-blue-600 font-['Poppins']"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Happy Father's Day!
                </motion.h2>
              )}
            </div>

            {/* Heart Animation */}
            {currentLine >= 2 && (
              <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="text-6xl"
                >
                  ❤️
                </motion.div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
