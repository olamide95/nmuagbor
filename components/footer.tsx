"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                🌍
              </div>
              <span className="font-bold text-foreground">Nmuagbor</span>
            </div>
            <p className="text-muted-foreground">
              Master authentic Agbor language and preserve your Delta State heritage.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Focus</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  Agbor Language
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Express Interest
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-primary transition-colors">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2026 Nmuagbor. All rights reserved. Nmu Agbor alua ni - Learning Agbor is beautiful.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Instagram
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
