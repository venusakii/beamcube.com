"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-primary/30 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left leading-relaxed">
          🍪 This website uses cookies to enhance your experience and analyze site usage. By continuing, you consent to
          our use of cookies.
        </p>
        <Button
          onClick={handleAccept}
          className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap glow-pulse"
        >
          Accept & Continue
        </Button>
      </div>
    </div>
  )
}
