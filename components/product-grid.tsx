"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Zap, Battery, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    slug: "nebula-anker-capsule-3",
    name: "Nebula Anker Capsule 3 Laser",
    tagline: "Portable Cinema Experience",
    image: "https://m.media-amazon.com/images/I/71c0366magL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    rating: 4.7,
    reviews: 450,
    brightness: "300 ANSI",
    battery: "2.5 hours",
    os: "Android",
    features: ["1080p HD", "Dolby Digital", "Autofocus", "Wi-Fi"],
    price: 579.99,
    url: "https://www.amazon.com/NEBULA-Projector-Officially-Licensed-Playtime/dp/B0CWV1S7B4"
  },
  {
    slug: "xgimi-portable",
    name: "XGIMI Portable Projector",
    tagline: "Adjustable PowerBase",
    image: "https://m.media-amazon.com/images/I/61KTs9stkoL._AC_SX679_.jpg",
    rating: 4.8,
    reviews: 320,
    brightness: "400 ANSI",
    battery: "3 hours",
    os: "Android",
    features: ["Auto Keystone", "Adjustable Stand", "Portable"],
    price: 599.99,
    url: "https://www.amazon.com/XGIMI-Portable-Projector-PowerBase-Adjustable/dp/B0F4WW648G"
  },
  {
    slug: "nebula-capsule-3-120",
    name: "Nebula Capsule 3 120-Inch",
    tagline: "Big Screen, Small Package",
    image: "https://m.media-amazon.com/images/I/713XRr1E1mL._AC_SX679_.jpg",
    rating: 4.6,
    reviews: 280,
    brightness: "350 ANSI",
    battery: "2.5 hours",
    os: "Android",
    features: ["120-Inch Picture", "Autofocus", "Built-in Battery"],
    price: 549.99,
    url: "https://www.amazon.com/Projector-Portable-Autofocus-120-Inch-Playtime/dp/B0BCWNQPQ7"
  },
  {
    slug: "projector-bluetooth",
    name: "Bluetooth Portable Projector",
    tagline: "Flexible Viewing Angles",
    image: "https://m.media-amazon.com/images/I/71ZDVEEptlL._AC_SX679_.jpg",
    rating: 4.5,
    reviews: 210,
    brightness: "300 ANSI",
    battery: "2 hours",
    os: "Android",
    features: ["270° Adjustable", "Bluetooth", "Keystone Correction"],
    price: 499.99,
    url: "https://www.amazon.com/Projector-Bluetooth-Portable-270%C2%B0Adjustable-Keystone/dp/B0DSBHSSD6"
  },
  {
    slug: "wireless-standard",
    name: "Wireless Standard Projector",
    tagline: "Rechargeable Entertainment",
    image: "https://m.media-amazon.com/images/I/81ZuklqZtKL._AC_SX679_.jpg",
    rating: 4.4,
    reviews: 180,
    brightness: "250 ANSI",
    battery: "2.5 hours",
    os: "Android",
    features: ["Wireless", "Rechargeable", "Portable"],
    price: 469.99,
    url: "https://www.amazon.com/Wireless-Projector-Standard-Supports-Rechargeable/dp/B0FKHJNMWY"
  },
  {
    slug: "nebula-autofocus",
    name: "Nebula Autofocus Projector",
    tagline: "Sharp and Smart Projection",
    image: "https://m.media-amazon.com/images/I/81MEF5ouO4L._AC_SX679_.jpg",
    rating: 4.7,
    reviews: 390,
    brightness: "400 ANSI",
    battery: "3 hours",
    os: "Android",
    features: ["Autofocus", "Keystone Correction", "Bluetooth"],
    price: 629.99,
    url: "https://www.amazon.com/Projector-NEBULA-Autofocus-Correction-Bluetooth/dp/B09XMBR1NN"
  },
  {
    slug: "aurzen-netflix",
    name: "Aurzen Netflix Projector",
    tagline: "Officially Licensed Streaming",
    image: "https://m.media-amazon.com/images/I/81epu+tNPHL._AC_SX679_.jpg",
    rating: 4.9,
    reviews: 260,
    brightness: "500 ANSI",
    battery: "2.5 hours",
    os: "Android",
    features: ["Netflix Licensed", "Bluetooth", "Keystone Correction"],
    price: 649.99,
    url: "https://www.amazon.com/Aurzen-Projector-Bluetooth-Netflix-Officially-Licensed-Keystone/dp/B0D3T44YZ2"
  },
  {
    slug: "projector-100screen",
    name: "100-Inch Screen Projector",
    tagline: "Smartphone Compatible",
    image: "https://m.media-amazon.com/images/I/71MHnBYHUlL._AC_SX679_.jpg",
    rating: 4.5,
    reviews: 340,
    brightness: "350 ANSI",
    battery: "2 hours",
    os: "Android",
    features: ["100-Inch Screen", "Smartphone Compatible", "Portable"],
    price: 479.99,
    url: "https://www.amazon.com/Projector-Bluetooth-100Screen-Compatible-Smartphone/dp/B0B28G5Y4R"
  },
  {
    slug: "tmy-supported",
    name: "TMY Supported Projector",
    tagline: "Affordable Big Screen",
    image: "https://m.media-amazon.com/images/I/819JoBGrPEL._AC_SX679_.jpg",
    rating: 4.3,
    reviews: 500,
    brightness: "200 ANSI",
    battery: "1.5 hours",
    os: "Android",
    features: ["1080p Supported", "Portable", "Easy Setup"],
    price: 399.99,
    url: "https://www.amazon.com/TMY-Projector-Supported-Projection-Compatible/dp/B082F13J55"
  }
]

export function ProductGrid() {
  return (
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">All Products</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Explore our complete range of pocket projectors, each designed for different needs and lifestyles
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.slug} className="gradient-border overflow-hidden hover:scale-105 transition-transform">
            <div className="gradient-border-inner">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 gradient-text">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.tagline}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Specs */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Zap size={16} className="text-primary" />
                    <span>{product.brightness} Lumens</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Battery size={16} className="text-accent" />
                    <span>{product.battery} Battery</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Smartphone size={16} className="text-secondary" />
                    <span>{product.os}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Link href={`/products/${product.slug}`} className="w-full">
                  <Button className="w-full bg-gradient-to-r from-primary via-accent to-secondary text-white hover:scale-105 transition-transform glow-effect">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
