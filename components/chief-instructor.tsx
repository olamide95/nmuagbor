"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

export function ChiefInstructor() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Chief Instructor
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from Chuks Emefiele, an experienced, dedicated instructor passionate about preserving Agbor heritage
          </p>
        </div>

        <Card className="overflow-hidden border-2 border-primary/30 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 lg:p-12 items-center">
            {/* Instructor Image */}
            <div className="relative h-96 w-full">
              <Image
                src="/chief-instructor.jpg"
                alt="Chief Instructor"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            {/* Instructor Details */}
            <div className="space-y-6">
              <div>
                <p className="text-primary font-semibold text-lg mb-2">Chief Language Instructor</p>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Chuks Emefiele</h3>
                <p className="text-muted-foreground text-base">Dedicated to Cultural Heritage & Linguistic Excellence</p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground mb-1">Expertise</p>
                  <p className="text-muted-foreground">
                    Specializing in Agbor and Igbo languages with years of experience teaching both children and adults
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground mb-1">Teaching Philosophy</p>
                  <p className="text-muted-foreground">
                    Combining authentic cultural immersion with modern interactive teaching methods to make language learning engaging and meaningful
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground mb-1">Mission</p>
                  <p className="text-muted-foreground">
                    Committed to ensuring the next generation preserves and celebrates their tribal linguistic heritage
                  </p>
                </div>
              </div>

              <button className="w-full mt-6 py-3 px-6 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-bold text-lg">
                Learn From Our Instructor
              </button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
