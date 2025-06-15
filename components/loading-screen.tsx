"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-center">
        {/* Animated Heart */}
        <motion.div
          className="mb-8 flex justify-center"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Heart className="w-16 h-16 text-red-400 fill-red-400" />
        </motion.div>

        {/* Loading Spinner */}
        <motion.div
          className="w-12 h-12 border-4 border-blue-200 border-t-blue-400 rounded-full mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Loading Text */}
        <motion.p
          className="text-white text-lg font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Preparing a surprise for the best dad...
        </motion.p>
      </div>
    </motion.div>
  )
}
