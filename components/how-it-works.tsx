import { Search, MousePointerClick, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description:
      'Browse agents by category and capability, and explore example templates to see how Hatcher-native agents are built.',
  },
  {
    icon: MousePointerClick,
    title: 'Configure',
    description:
      'Connect your wallet, set parameters, and preview behavior. Agents run natively on OpenClaw and Hermes.',
  },
  {
    icon: Rocket,
    title: 'Build & Ship',
    description:
      'Create your agent on Hatcher and ship it to the Solana ecosystem, then monitor performance as it runs.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">How it works</p>
        <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          From discovery to deployment in three steps
        </h2>
      </div>

      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <li
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <span className="absolute right-5 top-5 text-4xl font-semibold text-muted/60">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
