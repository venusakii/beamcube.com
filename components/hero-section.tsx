"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import Link from "next/link"

export function HeroSection() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`
        spotlightRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cursor spotlight effect */}
      <div ref={spotlightRef} className="cursor-spotlight" />

      {/* Animated background beams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent beam-animation"
            style={{
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Floating cube animation */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-20 float-animation">
        <div className="w-full h-full border-2 border-primary/50 rounded-lg transform rotate-45" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 inline-block">
          <div className="text-6xl mb-4">📦</div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Pocket Projectors.</span>
          <br />
          <span className="text-foreground">Boundless Vision.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Explore the world's smartest mini projectors — anytime, anywhere.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/products">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 glow-pulse"
            >
              Explore Products →
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
