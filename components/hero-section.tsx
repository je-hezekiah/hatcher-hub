import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, oklch(0.83 0.17 165 / 0.12), transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          Built on OpenClaw &amp; Hermes · Solana Ecosystem
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Discover &amp; Deploy{' '}
          <span className="text-primary">Hatcher-Native</span> AI Agents
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          A curated directory of production-ready agents for the Solana
          ecosystem. Explore vetted MVPs, deploy in minutes, and ship your own
          Hatcher-native agent to the community.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" className="h-11 px-6 text-sm" nativeButton={false} render={<a href="#agents" />}>
            Explore Agents
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 px-6 text-sm"
            nativeButton={false}
            render={<a href="#submit" />}
          >
            Submit an Agent
          </Button>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-border/60 pt-8">
          {[
            { value: '120+', label: 'Curated Agents' },
            { value: '8', label: 'Categories' },
            { value: '40+', label: 'Verified Builders' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <dt className="text-2xl font-semibold text-foreground sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
