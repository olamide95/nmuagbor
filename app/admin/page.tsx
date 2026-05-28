"use client"

import { useState, useEffect } from "react"
import { db } from "@/lib/firebase"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"

interface Submission {
  id: string
  name: string
  email: string
  phone: string
  location: string
  date: string
}

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, "interest_submissions"), orderBy("date", "desc"))
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: Submission[] = []
      snapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          name: doc.data().name || "",
          email: doc.data().email || "",
          phone: doc.data().phone || "",
          location: doc.data().location || "",
          date: doc.data().date || "",
        })
      })
      setSubmissions(data)
      setLoading(false)
      console.log("[v0] Loaded submissions:", data)
    })

    return () => unsubscribe()
  }, [])

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-2">Nmuagbor Interest Submissions</h1>
        <p className="text-muted-foreground mb-8">View all interest form submissions from potential students</p>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Loading submissions...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <p className="text-lg text-muted-foreground">No submissions yet</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 font-bold text-foreground">Name</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Email</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Phone</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Location</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Date</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission) => (
                  <tr key={submission.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                    <td className="py-4 px-4 text-foreground font-semibold">{submission.name}</td>
                    <td className="py-4 px-4 text-muted-foreground">{submission.email}</td>
                    <td className="py-4 px-4 text-muted-foreground">{submission.phone}</td>
                    <td className="py-4 px-4 text-muted-foreground">{submission.location}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">
                      {new Date(submission.date).toLocaleDateString()} {new Date(submission.date).toLocaleTimeString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-8 p-6 bg-secondary/30 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            <strong>Total Submissions:</strong> {submissions.length}
          </p>
        </div>
      </div>
    </div>
  )
}
