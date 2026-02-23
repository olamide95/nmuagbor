import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Languages } from "@/components/languages"
import { KidsSection } from "@/components/kids-section"
import { ChiefInstructor } from "@/components/chief-instructor"
import { InterestForm } from "@/components/interest-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Languages />
      <KidsSection />
      <ChiefInstructor />
      <InterestForm />
      <Footer />
    </main>
  )
}
