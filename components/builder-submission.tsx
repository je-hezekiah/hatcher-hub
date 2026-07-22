'use client'

import { useState } from 'react'
import { Check, CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

const benefits = [
  'Reach builders and teams across the Solana ecosystem',
  'Get a verified badge after a quick compatibility review',
  'Native OpenClaw & Hermes support out of the box',
]

export function BuilderSubmission() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="submit" className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium text-primary">For builders</p>
          <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Submit your Hatcher-native agent
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Built something great on OpenClaw or Hermes? List it in the
            directory and get it in front of the community.
          </p>
          <ul className="mt-6 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">Submission received</h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Thanks! Our team will review your agent and reach out about
                verification shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Agent name" htmlFor="agent-name">
                  <input
                    id="agent-name"
                    name="agentName"
                    required
                    placeholder="e.g. Trading Agent"
                    className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
                  />
                </Field>
                <Field label="Category" htmlFor="agent-category">
                  <input
                    id="agent-category"
                    name="category"
                    required
                    placeholder="e.g. DeFi"
                    className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
                  />
                </Field>
              </div>
              <Field label="Repository or demo URL" htmlFor="agent-url">
                <input
                  id="agent-url"
                  name="url"
                  type="url"
                  required
                  placeholder="https://github.com/..."
                  className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
                />
              </Field>
              <Field label="Description" htmlFor="agent-desc">
                <textarea
                  id="agent-desc"
                  name="description"
                  required
                  rows={4}
                  placeholder="What does your agent do?"
                  className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
                />
              </Field>
              <Button type="submit" className="h-11 w-full">
                Submit agent
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
