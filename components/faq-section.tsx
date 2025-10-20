import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do these projectors work with iPhone/Android?",
    answer:
      "Yes! Most modern mini projectors support both iOS and Android devices through wireless connectivity (Wi-Fi, Bluetooth) or direct HDMI connection. Many models also have built-in Android TV or casting capabilities.",
  },
  {
    question: "Can they play Netflix natively?",
    answer:
      "Projectors with Android TV (like the Anker Nebula Capsule II) can run Netflix and other streaming apps natively. For other models, you can cast from your phone or connect a streaming device.",
  },
  {
    question: "How to mount a mini projector?",
    answer:
      'Most mini projectors come with a standard tripod mount (1/4" thread). You can use a camera tripod, ceiling mount, or portable stand. Many models also work great on a flat surface like a table or shelf.',
  },
  {
    question: "What is the ideal projection distance?",
    answer:
      'Most mini projectors work best at 3-10 feet from the wall, creating screen sizes from 40" to 120". Check your specific model\'s throw ratio for optimal placement.',
  },
  {
    question: "How bright should a projector be?",
    answer:
      "For dark rooms, 150-200 ANSI lumens is sufficient. For rooms with ambient light, look for 250+ ANSI lumens. Outdoor use typically requires 300+ lumens for best visibility.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">Frequently Asked Questions</h2>

        <div className="gradient-border">
          <div className="gradient-border-inner">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary px-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
