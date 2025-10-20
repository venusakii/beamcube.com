export function AboutSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">About BeamCube</h2>

        <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
          At BeamCube, we believe big experiences come in small packages.
        </p>

        {/* Animated infographic */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 glow-pulse">
              <span className="text-4xl">📦</span>
            </div>
            <p className="text-sm text-muted-foreground">Compact Cube</p>
          </div>

          <div className="text-primary text-4xl">→</div>

          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-4">
              <span className="text-4xl">💡</span>
            </div>
            <p className="text-sm text-muted-foreground">Light Projection</p>
          </div>

          <div className="text-primary text-4xl">→</div>

          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4">
              <span className="text-4xl">🎬</span>
            </div>
            <p className="text-sm text-muted-foreground">Cinematic Frame</p>
          </div>
        </div>
      </div>
    </section>
  )
}
