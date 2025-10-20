import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: "💡",
    title: "Smart Connectivity",
    description: "Wi-Fi, Android, Bluetooth",
  },
  {
    icon: "🔋",
    title: "Long Battery Life",
    description: "Up to 3 hours",
  },
  {
    icon: "🎬",
    title: "HD Resolution",
    description: "Up to 1080p",
  },
  {
    icon: "📦",
    title: "Compact Design",
    description: "Fits in your palm",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">Top Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="gradient-border group hover:scale-105 transition-transform duration-300">
              <Card className="gradient-border-inner border-0 h-full">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
