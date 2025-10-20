"use client"

import { useState } from "react"

const galleryImages = [
  {
    src: "/living-room-movie-night-with-projector.jpg",
    alt: "Living room movie night",
    title: "Movie Nights",
  },
  {
    src: "/outdoor-camping-projector-setup.jpg",
    alt: "Outdoor camping setup",
    title: "Outdoor Cinema",
  },
  {
    src: "/business-presentation-with-portable-projector.jpg",
    alt: "Presentations on the go",
    title: "On-the-Go Presentations",
  },
  {
    src: "/backyard-movie-night-projector.jpg",
    alt: "Backyard entertainment",
    title: "Backyard Entertainment",
  },
  {
    src: "/gaming-setup-with-mini-projector.jpg",
    alt: "Gaming setup",
    title: "Gaming Experience",
  },
  {
    src: "/travel-projector-hotel-room.jpg",
    alt: "Travel entertainment",
    title: "Travel Companion",
  },
]

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 relative bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">Lifestyle Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110"
                style={{
                  transform: hoveredIndex === index ? "scale(1.1) translateY(-10px)" : "scale(1) translateY(0)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-xl font-bold text-foreground">{image.title}</h3>
              </div>
              <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
