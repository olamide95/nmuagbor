"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const classes = [
  {
    language: "Agbor",
    level: "Beginner",
    age: "6-8 years",
    title: "Agbor Foundations",
    description: "Learn basic Agbor greetings, vocabulary, and authentic pronunciation from native speakers",
    schedule: "Sat & Sun, 10:00 AM WAT",
    image: "/young-children-in-colorful-classroom-learning-lang.jpg",
    phrase: "Ofe wa nma - Welcome to our home",
  },
  {
    language: "Agbor",
    level: "Intermediate",
    age: "9-12 years",
    title: "Agbor Conversations",
    description: "Build sentences, engage in conversations, and explore Agbor cultural stories and traditions",
    schedule: "Tue & Thu, 4:00 PM WAT",
    image: "/kids-in-classroom-practicing-language-speaking-wit.jpg",
    phrase: "Nwẹ́ nwa - How are you",
  },
  {
    language: "Igbo",
    level: "Beginner",
    age: "6-8 years",
    title: "Igbo Foundations",
    description: "Master basic Igbo greetings, essential vocabulary, and proper tonal pronunciation",
    schedule: "Mon & Wed, 3:00 PM WAT",
    image: "/teenagers-learning-traditional-culture-and-languag.jpg",
    phrase: "Kedu ka i mere? - How are you",
  },
  {
    language: "Igbo",
    level: "Intermediate",
    age: "9-12 years",
    title: "Igbo Expressions",
    description: "Build complex sentences, practice dialogues, and learn through Igbo proverbs and stories",
    schedule: "Wed & Fri, 5:00 PM WAT",
    image: "/nigerian-children-learning-tribal-language-in-mode.jpg",
    phrase: "Ọ dị mma - It is good/well",
  },
]

export function ClassShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Class Levels for Every Age</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Structured curriculum designed by language experts for different proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classes.map((cls) => (
            <Card
              key={`${cls.language}-${cls.level}`}
              className="overflow-hidden border border-border/50 hover:shadow-xl transition-shadow duration-300 bg-card"
            >
              <div className="relative h-48 w-full">
                <Image src={cls.image || "/placeholder.svg"} alt={cls.title} fill className="object-cover" />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-primary">
                    {cls.language} • {cls.level} • Ages {cls.age}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground mt-2">{cls.title}</h3>
                </div>
                <p className="text-muted-foreground">{cls.description}</p>
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
                  <p className="text-sm font-semibold text-primary mb-1">Sample Phrase:</p>
                  <p className="text-base text-foreground font-medium">{cls.phrase}</p>
                </div>
                <p className="text-sm text-foreground/70">📅 {cls.schedule}</p>
                <Button className="w-full">Express Interest</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
