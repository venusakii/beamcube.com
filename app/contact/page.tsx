import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
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

        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Contact Us</h1>
        <p className="text-muted-foreground mb-12">
          Have questions about pocket projectors? Want to suggest a product review? We'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-primary" />
              Get in Touch
            </h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input id="name" placeholder="Your name" className="bg-card border-border" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" className="bg-card border-border" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="What's this about?" className="bg-card border-border" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us more..." rows={6} className="bg-card border-border" />
              </div>

              <Button className="w-full glow-pulse">Send Message</Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6 text-primary" />
              Other Ways to Reach Us
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">General Inquiries</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  For general questions about BeamCube or our content
                </p>
                <a href="mailto:hello@beamcube.com" className="text-primary hover:underline">
                  hello@beamcube.com
                </a>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">Product Reviews</h3>
                <p className="text-muted-foreground text-sm mb-2">Want us to review a specific projector?</p>
                <a href="mailto:reviews@beamcube.com" className="text-primary hover:underline">
                  reviews@beamcube.com
                </a>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">Business Partnerships</h3>
                <p className="text-muted-foreground text-sm mb-2">Interested in collaborating with us?</p>
                <a href="mailto:partners@beamcube.com" className="text-primary hover:underline">
                  partners@beamcube.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
