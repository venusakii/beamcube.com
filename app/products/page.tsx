import { ProductsCarousel } from "@/components/products-carousel"
import { ComparisonTable } from "@/components/comparison-table"
import { ProductGrid } from "@/components/product-grid"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the perfect pocket projector for your lifestyle. From compact portability to powerful performance,
            find your ideal BeamCube.
          </p>
        </div>

        <div className="mb-24">
          <ProductGrid />
        </div>

        {/* Products Carousel */}
        <div className="mb-24">
          <ProductsCarousel />
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <ComparisonTable />
        </div>

        {/* CTA Section */}
        <div className="text-center gradient-border p-12 rounded-2xl">
          <div className="gradient-border-inner">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Need Help Choosing?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the perfect projector for your needs. Get in touch with us today.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary via-accent to-secondary text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform glow-effect"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
