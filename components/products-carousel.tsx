"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

const products = [
  {
    name: "Anker Nebula Capsule II",
    image: "/anker-nebula-capsule-ii-mini-projector.jpg",
    specs: "200 ANSI Lumens • Android TV • 2.5h Battery",
    price: "$499",
    slug: "beamcube-mini",
  },
  {
    name: "ViewSonic M1 Mini Plus",
    image: "/viewsonic-m1-mini-plus-portable-projector.jpg",
    specs: "300 ANSI Lumens • Linux OS • 3h Battery",
    price: "$349",
    slug: "beamcube-pro",
  },
  {
    name: "Kodak Luma 350",
    image: "/kodak-luma-350-pocket-projector.jpg",
    specs: "150 ANSI Lumens • Android • 2h Battery",
    price: "$299",
    slug: "beamcube-lite",
  },
]

export function ProductsCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 relative bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">Product Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="gradient-border group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="gradient-border-inner border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      style={{
                        transform: hoveredIndex === index ? "rotate(5deg) scale(1.1)" : "rotate(0deg) scale(1)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.specs}</p>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href="/products" className="w-full">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      View Review →
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
