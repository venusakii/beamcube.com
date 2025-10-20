import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Target, Heart, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">About BeamCube</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to BeamCube.com – your ultimate guide to the world of pocket projectors! We're passionate about
              helping people discover the freedom of big-screen entertainment that fits in the palm of your hand.
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-6 my-12">
            <div className="p-6 rounded-lg bg-card border border-border">
              <Target className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground text-sm">
                To help you find the perfect pocket projector for your lifestyle, whether it's for camping trips,
                backyard movies, or presentations on the go.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <Heart className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-muted-foreground text-sm">
                Honest reviews, thorough testing, and transparent recommendations. We only suggest products we'd use
                ourselves.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
              <p className="text-muted-foreground text-sm">
                We combine hands-on testing, expert analysis, and real user feedback to give you the complete picture.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">What We Do</h2>
            <p className="text-muted-foreground">
              At BeamCube, we're dedicated to testing and reviewing the latest pocket projectors on the market. From
              ultra-portable pico projectors to feature-packed mini projectors, we cover it all. Our team spends
              countless hours testing brightness, battery life, image quality, and real-world performance so you don't
              have to.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Why Trust Us?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Independent reviews based on hands-on testing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Detailed comparisons to help you make informed decisions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Regular updates as new models hit the market</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Transparent affiliate disclosure – we earn from qualifying purchases</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Join Our Community</h2>
            <p className="text-muted-foreground">
              Whether you're a tech enthusiast, outdoor adventurer, or just someone who loves movie nights, BeamCube is
              here to help you find your perfect portable projection solution. Subscribe to our newsletter for the
              latest reviews, buying guides, and exclusive deals!
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
