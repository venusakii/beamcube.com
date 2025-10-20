"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-24 px-4 relative bg-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Join the Cube Community</h2>

        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Get tips, new releases, and exclusive Amazon deals in your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground"
            required
          />
          <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-pulse">
            Subscribe 🚀
          </Button>
        </form>

        {/* Floating cubes animation */}
        <div className="mt-12 flex justify-center gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 border-2 border-primary/30 rounded float-animation"
              style={{
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
