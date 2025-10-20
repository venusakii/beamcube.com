import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, Calendar, User } from "lucide-react"
import Link from "next/link"

const reviews = [
  {
    slug: "anker-nebula-capsule-ii-review",
    title: "Anker Nebula Capsule II Review",
    author: "Tech Review Pro",
    date: "March 15, 2025",
    rating: 4.5,
    thumbnail: "/anker-nebula-capsule-ii-review-thumbnail.jpg",
    summary:
      "The Anker Nebula Capsule II is a portable powerhouse that delivers impressive image quality in a compact form factor.",
    content: `
      <h2>Design and Build Quality</h2>
      <p>The Anker Nebula Capsule II features a sleek cylindrical design that's both portable and stylish. Weighing just 740g, it's easy to carry anywhere. The aluminum body feels premium and durable, making it perfect for both indoor and outdoor use.</p>
      
      <h2>Image Quality</h2>
      <p>With 720p native resolution and 200 ANSI lumens brightness, the Capsule II delivers surprisingly sharp and vibrant images. The DLP technology ensures smooth motion handling, making it great for movies and gaming. While it won't replace a dedicated home theater projector, it's exceptional for its size.</p>
      
      <h2>Smart Features</h2>
      <p>Running Android TV 9.0, the Capsule II gives you access to thousands of apps including Netflix, YouTube, and Prime Video. The interface is smooth and responsive, and voice control via Google Assistant works flawlessly.</p>
      
      <h2>Battery Life</h2>
      <p>The built-in 9,700mAh battery provides up to 2.5 hours of video playback, which is enough for most movies. You can also use it as a Bluetooth speaker when not projecting, extending the battery life significantly.</p>
      
      <h2>Verdict</h2>
      <p>The Anker Nebula Capsule II is an excellent portable projector that balances performance, features, and portability. It's perfect for movie nights, presentations, or outdoor entertainment. Highly recommended for anyone seeking a versatile pocket projector.</p>
    `,
    pros: [
      "Excellent portability and build quality",
      "Android TV with extensive app support",
      "Good image quality for the size",
      "Built-in battery and speaker",
      "Easy setup and use",
    ],
    cons: [
      "Limited brightness in well-lit rooms",
      "720p resolution may not satisfy 4K enthusiasts",
      "Battery life could be longer",
    ],
  },
  {
    slug: "best-budget-projectors-2025",
    title: "Best Budget Projectors 2025",
    author: "Budget Tech Reviews",
    date: "March 10, 2025",
    rating: 4.0,
    thumbnail: "/budget-mini-projectors-comparison.jpg",
    summary: "A comprehensive comparison of the best budget-friendly pocket projectors available in 2025.",
    content: `
      <h2>Introduction</h2>
      <p>Finding a quality projector on a budget doesn't mean compromising on essential features. In 2025, several manufacturers offer excellent pocket projectors under $300 that deliver impressive performance for casual viewing and presentations.</p>
      
      <h2>Top Budget Picks</h2>
      <p>We've tested over 15 budget projectors and narrowed down the list to the top 5 that offer the best value for money. These projectors balance brightness, resolution, battery life, and smart features without breaking the bank.</p>
      
      <h2>Key Features to Consider</h2>
      <p>When shopping for a budget projector, focus on brightness (at least 100 ANSI lumens), native resolution (720p minimum), battery life (2+ hours), and connectivity options. Smart features like built-in streaming apps are a bonus but not essential.</p>
      
      <h2>Performance Comparison</h2>
      <p>We tested each projector in various lighting conditions, measured color accuracy, and evaluated ease of use. The results show that even budget models can deliver satisfying performance for movies, gaming, and presentations.</p>
      
      <h2>Final Recommendations</h2>
      <p>For most users, we recommend prioritizing brightness and battery life over smart features. A simple projector with good fundamentals will serve you better than a feature-packed model with poor image quality.</p>
    `,
    pros: [
      "Affordable options under $300",
      "Decent image quality for the price",
      "Portable and lightweight designs",
      "Good for casual viewing and presentations",
    ],
    cons: [
      "Lower brightness than premium models",
      "Limited smart features on some models",
      "Shorter battery life compared to high-end options",
    ],
  },
  {
    slug: "viewsonic-m1-plus-unboxing",
    title: "ViewSonic M1+ Unboxing",
    author: "Unbox Everything",
    date: "March 5, 2025",
    rating: 4.3,
    thumbnail: "/viewsonic-m1-plus-unboxing.jpg",
    summary:
      "First impressions and unboxing of the ViewSonic M1+ portable projector with built-in battery and smart stand.",
    content: `
      <h2>Unboxing Experience</h2>
      <p>The ViewSonic M1+ arrives in premium packaging that reflects its quality positioning. Inside, you'll find the projector, power adapter, remote control, quick start guide, and a protective carrying case.</p>
      
      <h2>First Impressions</h2>
      <p>The M1+ immediately impresses with its unique design featuring an integrated smart stand that doubles as a lens cover. The build quality feels solid, and the compact size makes it incredibly portable.</p>
      
      <h2>Design Highlights</h2>
      <p>The innovative 360-degree smart stand allows for flexible positioning and automatic keystone correction. The projector can be placed at various angles without manual adjustments, which is a game-changer for portable projectors.</p>
      
      <h2>Initial Setup</h2>
      <p>Setup is straightforward - power on, connect to WiFi, and you're ready to go. The interface is intuitive, and the included remote makes navigation easy. The built-in speakers provide surprisingly good audio quality.</p>
      
      <h2>Quick Test</h2>
      <p>A quick test reveals sharp 854x480 resolution with 300 LED lumens brightness. Colors are vibrant, and the image remains clear even in moderately lit rooms. The dual-band WiFi ensures smooth streaming without buffering.</p>
      
      <h2>Initial Verdict</h2>
      <p>The ViewSonic M1+ makes an excellent first impression with its innovative design, solid build quality, and user-friendly features. Full review coming soon with detailed performance testing.</p>
    `,
    pros: [
      "Innovative 360-degree smart stand",
      "Excellent build quality and design",
      "Easy setup and intuitive interface",
      "Good brightness and color accuracy",
      "Includes carrying case",
    ],
    cons: ["Resolution limited to 854x480", "Battery life could be better", "Remote could be more premium"],
  },
]

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const review = reviews.find((r) => r.slug === params.slug)

  if (!review) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Review Header */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="gradient-border mb-8">
          <div className="gradient-border-inner">
            <img
              src={review.thumbnail || "/placeholder.svg"}
              alt={review.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">{review.title}</h1>

        <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <User size={18} />
            <span>{review.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{review.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={18} className="fill-primary text-primary" />
            <span className="font-bold text-foreground">{review.rating}/5</span>
          </div>
        </div>

        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">{review.summary}</p>
      </div>

      {/* Review Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="prose prose-lg max-w-none text-foreground">
          <div dangerouslySetInnerHTML={{ __html: review.content }} />
        </div>
      </div>

      {/* Pros and Cons */}
      <div className="max-w-4xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="gradient-border">
            <div className="gradient-border-inner p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Pros</h3>
              <ul className="space-y-3">
                {review.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-foreground">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="gradient-border">
            <div className="gradient-border-inner p-8">
              <h3 className="text-2xl font-bold mb-6 text-accent">Cons</h3>
              <ul className="space-y-3">
                {review.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent text-xl">✗</span>
                    <span className="text-foreground">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return reviews.map((review) => ({
    slug: review.slug,
  }))
}
