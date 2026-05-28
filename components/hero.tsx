"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Gradient Background */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <span className="text-sm font-semibold">🏛️ Nmuagbor - Learn Your Heritage</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-balance text-foreground leading-tight">
                Master{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Agbor Language
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Preserve your Delta State heritage with authentic Agbor language instruction. Nmuagbor offers expertly-crafted classes with Chief Instructor Chuks Emefiele, building linguistic mastery while honoring your cultural identity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg h-12 px-8">
                Express Interest
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Active Learners</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">1</p>
                <p className="text-sm text-muted-foreground">Language Focus</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">95%</p>
                <p className="text-sm text-muted-foreground">Parent Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-full min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src="/nigerian-children-learning-tribal-language-in-mode.jpg"
                alt="Children learning tribal languages"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
