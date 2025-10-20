import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductsCarousel } from "@/components/products-carousel"
import { HowItWorks } from "@/components/how-it-works"
import { GallerySection } from "@/components/gallery-section"
import { ComparisonTable } from "@/components/comparison-table"
import { VideoReviews } from "@/components/video-reviews"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProductsCarousel />
      <HowItWorks />
      <GallerySection />
      <ComparisonTable />
      <VideoReviews />
      <Testimonials />
      <Newsletter />
      <FAQSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
