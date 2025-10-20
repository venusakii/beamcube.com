import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
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

        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Terms of Service</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using BeamCube.com, you accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
            <p>
              Permission is granted to temporarily access the materials (information or software) on BeamCube.com for
              personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Affiliate Links Disclaimer</h2>
            <p>
              BeamCube.com contains affiliate links to Amazon and other retailers. When you click on these links and
              make a purchase, we may earn a commission at no additional cost to you. We only recommend products we
              believe will add value to our readers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Product Information</h2>
            <p>
              We strive to provide accurate product information, specifications, and pricing. However, errors may occur.
              We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information
              at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
            <p>
              BeamCube.com shall not be held liable for any damages arising from the use or inability to use the
              materials on our website, even if we have been notified of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Modifications</h2>
            <p>
              We may revise these terms of service at any time without notice. By using this website, you are agreeing
              to be bound by the current version of these terms of service.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
