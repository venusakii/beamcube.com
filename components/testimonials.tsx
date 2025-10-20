import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "I didn't think a device this small could fill my wall — stunning quality!",
    author: "Chris W.",
    role: "Traveler",
  },
  {
    quote: "Perfect for outdoor cinema nights. Absolutely worth it.",
    author: "Sarah P.",
    role: "Designer",
  },
  {
    quote: "The portability is unmatched. I take it everywhere!",
    author: "Mike R.",
    role: "Content Creator",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">What People Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-card to-muted/50 border-border hover:border-primary transition-colors duration-300"
            >
              <CardContent className="p-8">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-lg text-foreground mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
