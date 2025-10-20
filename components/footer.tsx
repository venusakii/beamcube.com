import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        {/* Logo and tagline */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold gradient-text mb-2">BeamCube</h3>
          <p className="text-sm text-muted-foreground">
            Big-screen experiences, powered by something that fits in your hand. 📦🌈
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
            Terms
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
        </div>

        {/* Social icons */}
        

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2025 BeamCube.com — All rights reserved. Amazon Affiliate Partner.</p>
          <p>🛒 As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  )
}
