"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
              🌍
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">Nmuagbor</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#why-agbor" className="text-foreground hover:text-primary transition-colors">
              Why Agbor
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Express Interest
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">
              About
            </a>
            <a href="#why-agbor" className="text-foreground hover:text-primary transition-colors py-2">
              Why Agbor
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">
              Express Interest
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
