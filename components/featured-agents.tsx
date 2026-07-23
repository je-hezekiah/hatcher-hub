import { ArrowUpRight, LineChart, Users, Telescope, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const agents = [
  {
    name: 'Momentum Trader',
    tagline: 'Autonomous on-chain execution',
    description:
      'Automated dual-direction trading agent inspired by tools like Trojan and BonkBot. Monitors Solana memecoins and major pairs, executes momentum entries, and manages risk with dynamic stop-losses.',
    icon: LineChart,
    category: 'DeFi',
    tags: ['Trading', 'Solana', 'Automation'],
  },
  {
    name: 'Community Ops',
    tagline: 'Always-on community ops',
    description:
      'AI community manager inspired by tools used by projects like Jito and Tensor. Handles scheduled GM posts, engagement tracking, auto-moderation, and reply assistance across Discord and X.',
    icon: Users,
    category: 'Social',
    tags: ['Community', 'Social', 'Growth'],
  },
  {
    name: 'Alpha Scout',
    tagline: 'Signal from the noise',
    description:
      'On-chain and social intelligence agent in the style of Nansen and Arkham. Aggregates Solana news, wallet activity, and Twitter signals into short, actionable research briefs.',
    icon: Telescope,
    category: 'Research',
    tags: ['Research', 'Analytics', 'Solana'],
  },
]
export function FeaturedAgents() {
  return (
    <section id="agents" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-primary">Featured</p>
          <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Hand-picked agents ready to deploy
          </h2>
        </div>
        <a
          href="#categories"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Browse all categories
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {agents.map((agent) => {
          const Icon = agent.icon
          return (
            <article
              key={agent.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  {agent.category}
                </span>
              </div>

              <h3 className="mt-5 flex items-center gap-1.5 text-lg font-semibold">
                {agent.name}
                <CheckCircle2 className="h-4 w-4 text-primary" aria-label="Verified" />
              </h3>
              <p className="text-sm font-medium text-primary/90">{agent.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {agent.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {agent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                className="mt-6 w-full"
                nativeButton={false}
                render={<a href="#deploy" />}
              >
                Deploy on Hatcher
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </article>
          )
        })}
      </div>
    </section>
  )
}
