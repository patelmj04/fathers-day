"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface Photo {
  id: number
  src: string
  alt: string
  height: number
}

export default function PhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const fixedPhotos = generatePhotos()
    setPhotos(fixedPhotos)
  }, [])

  const generatePhotos = (): Photo[] => {
    return Array.from({ length: 12 }, (_, i) => {
      const id = i + 1
      const height = 300 + Math.floor(Math.random() * 200)
      return {
        id,
        src: `/${id}.jpg`, // your images are expected in public/photos/
        alt: `Father's Day Memory ${id}`,
        height,
      }
    })
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4 font-['Poppins']">Memories with Dad</h1>
        <p className="text-lg text-slate-600 font-light">Every moment is precious ❤️</p>
        {/* <p className="text-sm text-slate-500 mt-2">12 Special Moments</p> */}
      </motion.div>

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="break-inside-avoid"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="relative group overflow-hidden rounded-3xl"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Glassmorphism Container */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-white/30">
                  {/* Abstract Background Overlay */}
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20" />
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-300/30 to-orange-400/30 rounded-full blur-2xl transform -translate-x-8 -translate-y-8" />
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-400/30 to-cyan-300/30 rounded-full blur-2xl transform translate-x-8 translate-y-8" />
                    <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl transform -translate-x-12 -translate-y-12" />
                  </div>

                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={400}
                      height={photo.height}
                      className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />

                    {/* Gradient Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />

                    {/* Floating Elements */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-pulse" />
                      <div className="absolute top-8 right-8 w-1 h-1 bg-blue-300/80 rounded-full animate-ping" />
                      <div className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-purple-300/70 rounded-full animate-bounce" />
                    </div>
                  </div>

                  {/* Glass Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/5 pointer-events-none" />

                  {/* Heart Icon with Glass Effect */}
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-red-400 text-lg">❤️</span>
                  </motion.div>

                  {/* Rim Light Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.1)]" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </motion.div>
  )
}
