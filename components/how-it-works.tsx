"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Express Your Interest",
    description: "Fill out a quick form to express interest in Agbor or Igbo classes for your child",
    icon: "📝",
  },
  {
    number: "02",
    title: "Choose Your Language",
    description: "Select Agbor or Igbo and pick a class schedule that works for your family",
    icon: "🎯",
  },
  {
    number: "03",
    title: "Join Live Classes",
    description: "Attend interactive classes with certified instructors and other learners your age",
    icon: "👥",
  },
  {
    number: "04",
    title: "Progress & Master",
    description: "Track progress with assignments, quizzes, and cultural activities. Earn certificates!",
    icon: "🏆",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to start your child's language learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-accent" />
              )}
              <Card className="p-6 h-full border border-border/50 bg-background hover:bg-card transition-colors">
                <div className="space-y-4">
                  <div className="text-5xl">{step.icon}</div>
                  <p className="text-sm font-bold text-primary">{step.number}</p>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border/50">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0" />
                <span className="text-foreground">Live interactive classes 2-3 times per week</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0" />
                <span className="text-foreground">Recorded lessons for flexible learning</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0" />
                <span className="text-foreground">Cultural immersion activities</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0" />
                <span className="text-foreground">Certified instructors from Nigeria</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0" />
                <span className="text-foreground">Progress reports for parents</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0" />
                <span className="text-foreground">Community of learners worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
