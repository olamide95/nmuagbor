"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { db } from "@/lib/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

export function InterestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      console.log("[v0] Submitting form data:", formData)
      
      // Add to Firestore
      const docRef = await addDoc(collection(db, "interest_submissions"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        timestamp: serverTimestamp(),
        date: new Date().toISOString(),
      })
      
      console.log("[v0] Document added with ID:", docRef.id)
      setSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", location: "" })
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      console.error("[v0] Error submitting form:", err)
      setError("Failed to submit. Please try again.")
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card/50 backdrop-blur border border-border rounded-2xl p-8 md:p-12 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Express Your Interest</h2>
            <p className="text-xl text-muted-foreground">
              Join the Nmuagbor community and preserve your Agbor heritage. Fill out the form below to get started.
            </p>
          </div>

          {submitted ? (
            <div className="bg-primary/20 border border-primary/50 rounded-lg p-8 text-center space-y-3">
              <p className="text-2xl font-bold text-primary">Thank You!</p>
              <p className="text-lg text-foreground">Your interest has been received. We will contact you soon with class details.</p>
              <p className="text-sm text-muted-foreground">Nmu Agbor alua ni - Learning Agbor is beautiful</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12"
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
                  className="h-12"
                />
                <Input
                  type="text"
                  name="location"
                  placeholder="Location / City"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>

              <Button type="submit" disabled={loading} size="lg" className="w-full h-12 text-lg font-bold">
                {loading ? "Submitting..." : "Express Interest Now"}
              </Button>
            </form>
          )}

          <p className="text-sm text-muted-foreground text-center italic">
            "Ihien ri nma bia ni enyi le" - Knowledge is wealth that cannot be stolen
          </p>
        </div>
      </div>
    </section>
  )
}
