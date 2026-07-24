'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Hexagon, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Agents', href: '/#agents' },
  { label: 'Categories', href: '/#categories' },
  { label: 'Submit', href: '/submit' },
]

export function PageNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
            <Hexagon className="h-5 w-5" fill="currentColor" fillOpacity={0.2} />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Hatcher<span className="text-primary">Hub</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="lg" nativeButton={false} render={<Link href="/#agents" />}>
            Explore
          </Button>
          <Button size="lg" nativeButton={false} render={<a href="https://hatcher.host/create" target="_blank" rel="noopener noreferrer" />}>
            Create on Hatcher
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-2 w-full" nativeButton={false} render={<a href="https://hatcher.host/create" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} />}>
              Create on Hatcher
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
