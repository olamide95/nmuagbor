'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'

export function KidsSection() {
  const reasons = [
    {
      icon: '🎨',
      title: 'Learn Cool Traditions',
      description:
        'Discover colorful beads, beautiful clothes, and amazing outfits worn by Agbor people. Each pattern and color tells a story!',
    },
    {
      icon: '🗣️',
      title: 'Speak Like a Champion',
      description:
        'Master Agbor words that make your mouth dance! Say “Ofe wa nma” like a true Agbor child.',
    },
    {
      icon: '🤝',
      title: 'Connect with Your Roots',
      description:
        'Meet kids like you learning about their heritage. Make new friends who speak Agbor and celebrate the same culture!',
    },
    {
      icon: '🏆',
      title: 'Be Proud of Your Identity',
      description:
        'Learn to speak confidently. Be proud of who you are and where you come from.',
    },
  ]

  const bodyParts = [
    { english: 'Head', agbor: 'Ishi', icon: '🧑' },
    { english: 'Eye', agbor: 'Enyan', icon: '👁️' },
    { english: 'Ear', agbor: 'Ntin', icon: '👂' },
    { english: 'Nose', agbor: 'Imi', icon: '👃' },
    { english: 'Mouth', agbor: 'Ọ̀nu', icon: '👄' },
    { english: 'Hair', agbor: 'Ntutu', icon: '💇' },
    { english: 'Hand', agbor: 'Eka', icon: '✋' },
    { english: 'Leg', agbor: 'Ọ̀ku', icon: '🦵' },
    { english: 'Finger', agbor: 'Nkpisi-eka', icon: '☝️' },
    { english: 'Toe', agbor: 'Nkpisi-ọ̀ku', icon: '🦶' },
    { english: 'Stomach', agbor: 'Efọ̀', icon: '🤰' },
  ]

  return (
    <section
      id="why-agbor"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5"
    >
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/girl-traditional-outfit.png"
              alt="Girl in traditional Agbor outfit"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/boy-traditional-outfit.png"
              alt="Boy in traditional Agbor clothing"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reasons.map((reason, idx) => (
            <Card
              key={idx}
              className="p-6 border border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-card/70 overflow-hidden"
            >
              <div className="flex items-start gap-5">
                <div className="w-20 h-20 shrink-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl shadow-sm">
                  {reason.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-3xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Body Parts in Agbọ̀r — can you learn them all?
              </h3>
              <p className="text-muted-foreground">
                Point to each part of your body as you say the word!
              </p>
            </div>

            <div className="hidden md:flex w-28 h-28 rounded-full bg-background/70 border border-primary/20 items-center justify-center text-6xl shadow-sm">
              🧒
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {bodyParts.map((part, idx) => (
              <div
                key={idx}
                className="group bg-background/70 rounded-2xl p-5 border border-primary/15 hover:border-primary/50 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-primary/15 to-accent/20 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                  {part.icon}
                </div>

                <p className="text-sm text-muted-foreground mb-1">
                  {part.english}
                </p>

                <p className="text-xl font-extrabold text-primary">
                  {part.agbor}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-foreground mb-6">
            Ready to start your Agbor journey?
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg transition-colors shadow-lg"
          >
            Let&apos;s Learn Agbor Together
          </a>
        </div>
      </div>
    </section>
  )
}