"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Blessing Okafor",
    role: "Parent, Lagos",
    text: "My daughter now speaks Igbo fluently! Karl Heritage's teaching method is engaging and our whole family enjoys learning together.",
    rating: 5,
    image: "/smiling-nigerian-woman-portrait.jpg",
  },
  {
    name: "Chioma Nwankwo",
    role: "Parent, Abuja",
    text: "Finally, a platform that makes learning Agbor fun! The instructors are patient, knowledgeable, and truly connected to our Delta culture.",
    rating: 5,
    image: "/smiling-nigerian-woman-portrait-professional.jpg",
  },
  {
    name: "Amara Hassan",
    role: "Parent, Port Harcourt",
    text: "The cultural activities alongside Agbor lessons have been transformative. Our kids are now proud of their Agbor heritage.",
    rating: 5,
    image: "/smiling-nigerian-woman-professional-portrait.jpg",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Loved by Families</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of Nigerian families reconnecting with their linguistic roots
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="p-8 border border-border/50 bg-background hover:shadow-lg transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground text-lg leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
