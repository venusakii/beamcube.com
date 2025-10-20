import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Star, Zap, Battery, Smartphone, Check, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
    resolution: "1080p",
    weight: "900g",
    dimensions: "8.3 x 8.3 x 16.7 cm",
    features: ["1080p HD", "Dolby Digital", "Autofocus", "Wi-Fi", "Portable", "Built-in Battery"],
    description:
      "The Nebula Anker Capsule 3 Laser offers a portable cinema experience with vibrant 1080p HD visuals and Dolby Digital sound. Its compact design and built-in battery make it perfect for home or travel entertainment.",
    amazonLink: "https://www.amazon.com/NEBULA-Projector-Officially-Licensed-Playtime/dp/B0CWV1S7B4",
    price: 579.99
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
    resolution: "1080p",
    weight: "1200g",
    dimensions: "14.6 x 11.5 x 17 cm",
    features: ["Auto Keystone", "Adjustable Stand", "Portable", "Bluetooth", "HDMI Input", "Wi-Fi"],
    description:
      "The XGIMI Portable Projector combines powerful 400 ANSI lumens with an adjustable stand for versatile setups. Its auto keystone correction ensures sharp visuals, ideal for presentations or movie nights.",
    amazonLink: "https://www.amazon.com/XGIMI-Portable-Projector-PowerBase-Adjustable/dp/B0F4WW648G",
    price: 599.99
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
    resolution: "1080p",
    weight: "950g",
    dimensions: "8.3 x 8.3 x 16.7 cm",
    features: ["120-Inch Picture", "Autofocus", "Built-in Battery", "Wi-Fi", "Portable", "Dolby Digital"],
    description:
      "Experience big-screen entertainment with the Nebula Capsule 3. This compact projector delivers a 120-inch picture with autofocus and a built-in battery, perfect for on-the-go movie enthusiasts.",
    amazonLink: "https://www.amazon.com/Projector-Portable-Autofocus-120-Inch-Playtime/dp/B0BCWNQPQ7",
    price: 549.99
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
    resolution: "1080p",
    weight: "800g",
    dimensions: "12 x 10 x 4 cm",
    features: ["270° Adjustable", "Bluetooth", "Keystone Correction", "Wi-Fi", "Portable", "HDMI Input"],
    description:
      "The Bluetooth Portable Projector offers flexible viewing with 270° adjustability and keystone correction. Connect via Bluetooth or Wi-Fi for seamless streaming in any setting.",
    amazonLink: "https://www.amazon.com/Projector-Bluetooth-Portable-270%C2%B0Adjustable-Keystone/dp/B0DSBHSSD6",
    price: 499.99
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
    resolution: "720p",
    weight: "700g",
    dimensions: "11 x 9 x 3.5 cm",
    features: ["Wireless", "Rechargeable", "Portable", "Screen Mirroring", "Built-in Speaker", "Compact"],
    description:
      "The Wireless Standard Projector is a lightweight, rechargeable option for entertainment on the go. With wireless connectivity and screen mirroring, enjoy hassle-free projection anywhere.",
    amazonLink: "https://www.amazon.com/Wireless-Projector-Standard-Supports-Rechargeable/dp/B0FKHJNMWY",
    price: 469.99
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
    resolution: "1080p",
    weight: "1000g",
    dimensions: "14 x 12 x 5 cm",
    features: ["Autofocus", "Keystone Correction", "Bluetooth", "Wi-Fi", "Portable", "HDMI Input"],
    description:
      "The Nebula Autofocus Projector delivers crystal-clear 1080p visuals with effortless setup. Autofocus and keystone correction ensure sharp images, while Bluetooth enhances audio connectivity.",
    amazonLink: "https://www.amazon.com/Projector-NEBULA-Autofocus-Correction-Bluetooth/dp/B09XMBR1NN",
    price: 629.99
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
    resolution: "1080p",
    weight: "1100g",
    dimensions: "15 x 13 x 5 cm",
    features: ["Netflix Licensed", "Bluetooth", "Keystone Correction", "Wi-Fi", "Dolby Audio", "Smart Streaming"],
    description:
      "Stream seamlessly with the Aurzen Netflix Projector, officially licensed for Netflix. With 500 ANSI lumens and Dolby Audio, it’s perfect for immersive home entertainment.",
    amazonLink: "https://www.amazon.com/Aurzen-Projector-Bluetooth-Netflix-Officially-Licensed-Keystone/dp/B0D3T44YZ2",
    price: 649.99
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
    resolution: "1080p",
    weight: "850g",
    dimensions: "13 x 11 x 4 cm",
    features: ["100-Inch Screen", "Smartphone Compatible", "Portable", "Wi-Fi", "Bluetooth", "Built-in Speaker"],
    description:
      "The 100-Inch Screen Projector offers smartphone compatibility for easy content sharing. With 350 ANSI lumens and a portable design, it’s ideal for home or outdoor use.",
    amazonLink: "https://www.amazon.com/Projector-Bluetooth-100Screen-Compatible-Smartphone/dp/B0B28G5Y4R",
    price: 479.99
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
    resolution: "1080p Supported",
    weight: "600g",
    dimensions: "10 x 8 x 3 cm",
    features: ["1080p Supported", "Portable", "Easy Setup", "Built-in Speaker", "HDMI Input", "Compact"],
    description:
      "The TMY Supported Projector is a budget-friendly option for big-screen entertainment. With easy setup and 1080p support, it’s perfect for casual movie nights at home.",
    amazonLink: "https://www.amazon.com/TMY-Projector-Supported-Projection-Compatible/dp/B082F13J55",
    price: 399.99
  }
]

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="gradient-border rounded-2xl overflow-hidden">
            <div className="gradient-border-inner">
              <div className="relative aspect-[4/3]">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-5xl font-bold mb-4 gradient-text">{product.name}</h1>
            <p className="text-2xl text-muted-foreground mb-6">{product.tagline}</p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

            {/* Key Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="gradient-border">
                <CardContent className="gradient-border-inner p-4">
                  <div className="flex items-center gap-3">
                    <Zap className="text-primary" size={24} />
                    <div>
                      <p className="text-sm text-muted-foreground">Brightness</p>
                      <p className="font-semibold">{product.brightness}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-border">
                <CardContent className="gradient-border-inner p-4">
                  <div className="flex items-center gap-3">
                    <Battery className="text-accent" size={24} />
                    <div>
                      <p className="text-sm text-muted-foreground">Battery</p>
                      <p className="font-semibold">{product.battery}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-border">
                <CardContent className="gradient-border-inner p-4">
                  <div className="flex items-center gap-3">
                    <Smartphone className="text-secondary" size={24} />
                    <div>
                      <p className="text-sm text-muted-foreground">OS</p>
                      <p className="font-semibold">{product.os}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-border">
                <CardContent className="gradient-border-inner p-4">
                  <div className="flex items-center gap-3">
                    <Star className="text-primary" size={24} />
                    <div>
                      <p className="text-sm text-muted-foreground">Resolution</p>
                      <p className="font-semibold">{product.resolution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Button */}
            <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="block mb-4">
              <Button className="w-full bg-gradient-to-r from-primary via-accent to-secondary text-white hover:scale-105 transition-transform glow-effect text-lg py-6">
                <ShoppingCart className="mr-2" size={20} />
                Buy on Amazon
              </Button>
            </a>

            
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.features.map((feature) => (
              <Card key={feature} className="gradient-border">
                <CardContent className="gradient-border-inner p-4">
                  <div className="flex items-center gap-3">
                    <Check className="text-primary flex-shrink-0" size={20} />
                    <span className="font-medium">{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div>
          <h2 className="text-4xl font-bold mb-8 gradient-text">Specifications</h2>
          <Card className="gradient-border">
            <CardContent className="gradient-border-inner p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground mb-2">Weight</p>
                  <p className="text-lg font-semibold">{product.weight}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Dimensions</p>
                  <p className="text-lg font-semibold">{product.dimensions}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Resolution</p>
                  <p className="text-lg font-semibold">{product.resolution}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Operating System</p>
                  <p className="text-lg font-semibold">{product.os}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Brightness</p>
                  <p className="text-lg font-semibold">{product.brightness} Lumens</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Battery Life</p>
                  <p className="text-lg font-semibold">{product.battery}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
