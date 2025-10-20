export function HowItWorks() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text">How It Works</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-card border-2 border-primary rounded-lg flex items-center justify-center mb-4 glow-pulse">
              <span className="text-5xl">👋</span>
            </div>
            <p className="text-lg font-semibold text-foreground mb-2">From your pocket</p>
            <p className="text-sm text-muted-foreground max-w-xs">Compact and portable design</p>
          </div>

          <div className="flex items-center">
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
          </div>

          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-card border-2 border-secondary rounded-lg flex items-center justify-center mb-4">
              <span className="text-5xl">🏠</span>
            </div>
            <p className="text-lg font-semibold text-foreground mb-2">To your wall</p>
            <p className="text-sm text-muted-foreground max-w-xs">Project anywhere, anytime</p>
          </div>

          <div className="flex items-center">
            <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-primary" />
          </div>

          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-card border-2 border-accent rounded-lg flex items-center justify-center mb-4">
              <span className="text-5xl">🎬</span>
            </div>
            <p className="text-lg font-semibold text-foreground mb-2">To cinematic moments</p>
            <p className="text-sm text-muted-foreground max-w-xs">Big-screen experiences</p>
          </div>
        </div>
      </div>
    </section>
  )
}
