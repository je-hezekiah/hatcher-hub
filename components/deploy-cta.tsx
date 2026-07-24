import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function DeployCta() {
  return (
    <section id="deploy" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 text-center sm:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(70% 80% at 50% 0%, oklch(0.83 0.17 165 / 0.16), transparent 70%)',
          }}
        />
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
          <Zap className="h-3.5 w-3.5" />
          Build on Hatcher
        </span>
        <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Ready to build your next agent?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Start from an example template and create your own Hatcher-native agent
          for the Solana ecosystem.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" className="h-11 px-6 text-sm" nativeButton={false} render={<a href="https://hatcher.host/create" target="_blank" rel="noopener noreferrer" />}>
            Create on Hatcher
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="h-11 px-6 text-sm"
            nativeButton={false}
            render={<a href="#how-it-works" />}
          >
            See how it works
          </Button>
        </div>
      </div>
    </section>
  )
}
