import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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

        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <p>
              At BeamCube.com, we collect information that you provide directly to us, including when you sign up for
              our newsletter, make a purchase through our affiliate links, or contact us for support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to process your
              transactions, to send you technical notices and support messages, and to communicate with you about
              products, services, and events.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Amazon Affiliate Disclosure</h2>
            <p>
              BeamCube.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
              program designed to provide a means for sites to earn advertising fees by advertising and linking to
              Amazon.com. We may earn a commission from qualifying purchases.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized
              access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us through our contact page.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
