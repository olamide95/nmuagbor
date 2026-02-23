"use client"

import { Card } from "@/components/ui/card"

const agborPhrases = [
  { phrase: "Nmu Agbor alua ni", translation: "Learning Agbor is beautiful" },
  { phrase: "Nmu Agbor ekelem onu", translation: "Learning Agbor opens mouths/voices" },
  { phrase: "Nmu Agbor mbele ni", translation: "Agbor learning is important" },
  { phrase: "Ali agbor ri nma", translation: "Agbor language is good" },
  { phrase: "Ihien ri nma bia ni enyi le", translation: "Knowledge is wealth that cannot be stolen" },
  { phrase: "Oselobue nonye ni onu le", translation: "A person who doesn't speak their language has lost their identity" },
]

export function Languages() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Master{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Agbor Language</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Preserve your Delta State heritage with authentic Agbor language instruction from Chief Instructor Chuks Emefiele
          </p>
        </div>

        {/* Main Agbor Card */}
        <Card className="p-8 lg:p-12 border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-accent/5 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-12">
          <div className="space-y-8">
            <div>
              <p className="text-6xl mb-4">🏛️</p>
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">Ẹ̀sọ̀n Ágbọ̀r</h3>
              <p className="text-lg text-primary font-semibold mb-4">The Agbor Language of Delta State</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Agbor is the beautiful and distinctive language spoken by the Agbor people of Delta State, Nigeria. 
                With over 500,000 speakers, it carries centuries of cultural wisdom, traditions, and identity. 
                Through Nmuagbor, your child will learn not just vocabulary, but the living heritage of their ancestors.
              </p>
            </div>

            <div className="border-t border-primary/20 pt-8">
              <h4 className="text-2xl font-bold text-foreground mb-6">Agbor Language Proverbs & Sayings</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {agborPhrases.map((item, idx) => (
                  <div key={idx} className="bg-card border border-primary/20 rounded-lg p-5 space-y-2">
                    <p className="text-xl font-bold text-primary">{item.phrase}</p>
                    <p className="text-sm text-muted-foreground italic">"{item.translation}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
