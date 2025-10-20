import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const reviews = [
  {
    title: "Anker Nebula Capsule II Review",
    thumbnail: "/anker-nebula-capsule-ii-review-thumbnail.jpg",
    slug: "anker-nebula-capsule-ii-review",
  },
  {
    title: "Best Budget Projectors 2025",
    thumbnail: "/budget-mini-projectors-comparison.jpg",
    slug: "best-budget-projectors-2025",
  },
  {
    title: "ViewSonic M1+ Unboxing",
    thumbnail: "/viewsonic-m1-plus-unboxing.jpg",
    slug: "viewsonic-m1-plus-unboxing",
  },
]

export function VideoReviews() {
  return (
    <section className="py-24 px-4 relative bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">Video Reviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden group hover:border-primary transition-colors duration-300"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={review.thumbnail || "/placeholder.svg"}
                    alt={review.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-foreground">{review.title}</h3>
                  <Link href={`/reviews/${review.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      Read the Full Review →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
