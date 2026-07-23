import { CheckCircle2 } from 'lucide-react'
import { SubmitForm } from '@/components/submit-form'

const benefits = [
  'Reach builders and teams across the Solana ecosystem',
  'Get a verified badge after a quick compatibility review',
  'Native OpenClaw & Hermes support out of the box',
]

export function BuilderSubmission() {
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

        <SubmitForm />
      </div>
    </section>
  )
}
