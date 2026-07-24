'use client'

import { useState } from 'react'
import { Check, Send, ChevronDown, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
  'DeFi & Trading',
  'Community & Social',
  'Research & Data',
  'Security & Audits',
  'Gaming',
  'NFT & Media',
  'Automation',
  'Dev Tooling',
]

const inputClass =
  'h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40'

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSfbEIdHlUOkhQotg8z-BMYoxsWVD-3QALP5yAjpk8aGawoY1Q/formResponse'

const ENTRY_IDS = {
  agentName: 'entry.1500326162',
  category: 'entry.430037924',
  framework: 'entry.1274725885',
  description: 'entry.1702318038',
  url: 'entry.576209773',
  contact: 'entry.73604618',
} as const

export function SubmitForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(false)

    const data = new FormData(e.currentTarget)
    const body = new URLSearchParams()

    body.append(ENTRY_IDS.agentName, String(data.get('agentName') ?? ''))
    body.append(ENTRY_IDS.category, String(data.get('category') ?? ''))
    body.append(ENTRY_IDS.framework, String(data.get('framework') ?? ''))
    body.append(ENTRY_IDS.description, String(data.get('description') ?? ''))
    body.append(ENTRY_IDS.url, String(data.get('url') ?? ''))
    body.append(ENTRY_IDS.contact, String(data.get('contact') ?? ''))

    setSubmitting(true)

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      setSubmitted(true)
    } catch (err) {
      console.error('Submission error:', err)
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
            <Check className="h-6 w-6" />
          </span>
          <h3 className="mt-4 text-lg font-semibold">Submission received</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Thanks for submitting your agent. Submissions are manually reviewed. We will contact you if your agent is selected for listing.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => setSubmitted(false)}
          >
            Submit another agent
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <Field label="Agent Name" htmlFor="agent-name">
          <input
            id="agent-name"
            name="agentName"
            required
            placeholder="e.g. Trading Agent"
            className={inputClass}
          />
        </Field>

        <Field label="Category" htmlFor="agent-category">
          <div className="relative">
            <select
              id="agent-category"
              name="category"
              required
              defaultValue=""
              className={`${inputClass} appearance-none pr-9`}
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </Field>

        <Field label="Short Description" htmlFor="agent-desc">
          <textarea
            id="agent-desc"
            name="description"
            required
            rows={4}
            placeholder="What does your agent do? Keep it to a sentence or two."
            className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
          />
        </Field>

        <fieldset className="space-y-2">
          <legend className="text-sm font-medium text-foreground">Framework</legend>
          <div className="grid grid-cols-3 gap-3">
            {['OpenClaw', 'Hermes', 'Both'].map((fw, i) => (
              <label
                key={fw}
                className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-input bg-background px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:text-foreground"
              >
                <input
                  type="radio"
                  name="framework"
                  value={fw}
                  required
                  defaultChecked={i === 0}
                  className="sr-only"
                />
                {fw}
              </label>
            ))}
          </div>
        </fieldset>

        <Field label="Repository or Demo URL" htmlFor="agent-url">
          <input
            id="agent-url"
            name="url"
            type="url"
            required
            placeholder="https://github.com/..."
            className={inputClass}
          />
        </Field>

        <Field label="Contact (Twitter or Email)" htmlFor="agent-contact">
          <input
            id="agent-contact"
            name="contact"
            required
            placeholder="@handle or you@example.com"
            className={inputClass}
          />
        </Field>

        {error && (
          <div className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>Something went wrong while submitting. Please try again.</p>
          </div>
        )}

        <Button type="submit" className="h-11 w-full" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit Agent'}
          {!submitting && <Send className="h-4 w-4" />}
        </Button>

        <p className="text-xs leading-relaxed text-muted-foreground">
          By submitting, you agree that your contact details and agent information will be reviewed by the Hatcher Hub team. Submissions are stored via Google Forms and are not shared publicly without your consent.
        </p>
      </form>
    </div>
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
