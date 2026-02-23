'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'

export function KidsSection() {
  const reasons = [
    {
      emoji: '🎨',
      title: 'Learn Cool Traditions',
      description: 'Discover the colorful beads, beautiful cloths, and amazing outfits worn by Agbor people. Each pattern and color tells a story!',
    },
    {
      emoji: '🎭',
      title: 'Speak Like a Champion',
      description: 'Master Agbor words that make your mouth dance! Say "Ofe wa nma" (Welcome to our home) like a true Agbor child.',
    },
    {
      emoji: '👨‍👩‍👧‍👦',
      emoji: '🎪',
      title: 'Connect with Your Roots',
      description: 'Meet kids like you learning about their heritage. Make new friends who speak Agbor and celebrate the same culture!',
    },
    {
      emoji: '🏆',
      title: 'Become a Culture Ambassador',
      description: 'Learn secrets only Agbor speakers know. Be proud when you can speak your ancestors\' language better than anyone!',
    },
  ]

  return (
    <section id="why-agbor" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Kids{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Love Nmuagbor
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learning Agbor is fun, exciting, and makes you feel proud of who you are!
          </p>
        </div>

        {/* Hero Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/girl-traditional-outfit.png"
              alt="Girl in traditional Agbor outfit"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/boy-traditional-outfit.png"
              alt="Boy in traditional Agbor clothing"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Cool Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reasons.map((reason, idx) => (
            <Card key={idx} className="p-6 border border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card/50">
              <div className="space-y-3">
                <p className="text-5xl">{reason.emoji}</p>
                <h3 className="text-2xl font-bold text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Fun Facts */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30">
          <h3 className="text-2xl font-bold text-foreground mb-6">Agbor Language Fun Facts for Kids!</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-lg font-bold text-primary">Did You Know?</p>
              <p className="text-foreground">The Agbor people have been speaking their language for hundreds of years! When you learn it, you become part of a long, amazing history.</p>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-bold text-primary">Cool Words!</p>
              <p className="text-foreground">"Nmu Agbor alua ni" means learning Agbor is beautiful. When you speak these words, you honor your ancestors.</p>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-bold text-primary">You Are Special</p>
              <p className="text-foreground">Not every kid speaks Agbor. When you learn it, you become special and unique. You carry your culture with pride!</p>
            </div>
          </div>
        </Card>

        {/* CTA for Kids */}
        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-foreground mb-6">Ready to start your Agbor journey?</p>
          <a href="#contact" className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg transition-colors">
            Let's Learn Agbor Together
          </a>
        </div>
      </div>
    </section>
  )
}
