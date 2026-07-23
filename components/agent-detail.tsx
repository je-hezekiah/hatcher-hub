import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  FileCode2,
  Sparkles,
  Terminal,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Agent } from '@/lib/agents'

export function AgentDetail({ agent }: { agent: Agent }) {
  const Icon = agent.icon

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/#agents"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Agents
      </Link>

      {/* Header */}
      <header className="mt-8">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/25">
            <Icon className="h-7 w-7" />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {agent.name}
              </h1>
              {agent.verified && (
                <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Verified
                </span>
              )}
            </div>
            <p className="mt-1.5 text-pretty text-base font-medium text-primary/90">
              {agent.tagline}
            </p>
          </div>
        </div>

        {/* Category + tags */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
            {agent.category}
          </span>
          <span className="hidden text-border sm:inline" aria-hidden="true">
            |
          </span>
          {agent.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Framework */}
      <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
          <Cpu className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Framework
          </p>
          <p className="text-sm font-semibold text-foreground">
            {agent.framework === 'Both'
              ? 'OpenClaw + Hermes'
              : agent.framework}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold tracking-tight">Overview</h2>
        <div className="mt-3 space-y-4">
          {agent.description.map((paragraph, i) => (
            <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Key features */}
      <div className="mt-10">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold tracking-tight">Key features</h2>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {agent.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <h3 className="flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Example template */}
      <div className="mt-10">
        <div className="flex items-center gap-2">
          <FileCode2 className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold tracking-tight">Example template</h2>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          A starting point you can customize when deploying this agent on Hatcher.
        </p>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <CodePanel
            label="Prompt"
            icon={<Terminal className="h-4 w-4" />}
            content={agent.template.prompt}
          />
          <CodePanel
            label="Configuration"
            icon={<FileCode2 className="h-4 w-4" />}
            content={agent.template.configuration}
          />
        </div>
      </div>

      {/* Deploy CTA */}
      <div className="relative mt-12 overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 text-center sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(70% 80% at 50% 0%, oklch(0.83 0.17 165 / 0.16), transparent 70%)',
          }}
        />
        <h2 className="mx-auto max-w-xl text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          Deploy {agent.name} on Hatcher
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Launch this agent with built-in monitoring, guardrails, and scaling —
          no infrastructure required.
        </p>
        <div className="mt-6 flex justify-center">
          <Button size="lg" className="h-11 px-6 text-sm" nativeButton={false} render={<Link href="/#deploy" />}>
            Deploy on Hatcher
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function CodePanel({
  label,
  icon,
  content,
}: {
  label: string
  icon: React.ReactNode
  content: string
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background/60">
      <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-4 py-2.5">
        <span className="text-primary">{icon}</span>
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-xs leading-relaxed text-foreground/90">
        <code className="font-mono">{content}</code>
      </pre>
    </div>
  )
}
