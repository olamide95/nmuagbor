"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    language: "Agbor"
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Interest form submitted:", formData)
    // Handle interest submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", language: "Agbor" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-background to-accent">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-8 md:p-12 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Express Your Interest</h2>
            <p className="text-xl text-muted-foreground">
              Let us know you're interested in our Agbor and Igbo language classes. We'll reach out with more details and class schedules.
            </p>
          </div>

          {submitted ? (
            <div className="bg-primary/20 border border-primary/50 rounded-lg p-6 text-center space-y-2">
              <p className="text-lg font-semibold text-primary">Thank you for your interest!</p>
              <p className="text-muted-foreground">We'll be in touch soon with more information about our classes.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (WhatsApp)"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                >
                  <option value="Agbor">Interested in Agbor</option>
                  <option value="Igbo">Interested in Igbo</option>
                  <option value="Both">Interested in Both</option>
                </select>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Express Interest Now
              </Button>
            </form>
          )}


        </div>
      </div>
    </section>
  )
}
