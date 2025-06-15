"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/loading-screen"
import IntroSection from "@/components/intro-section"
import PhotoGallery from "@/components/photo-gallery"

export default function FathersDayPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
        {!isLoading && showIntro && <IntroSection key="intro" onComplete={handleIntroComplete} />}
        {!isLoading && !showIntro && <PhotoGallery key="gallery" />}
      </AnimatePresence>
    </div>
  )
}
