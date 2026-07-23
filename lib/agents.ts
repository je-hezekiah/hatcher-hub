import { LineChart, Users, Telescope, type LucideIcon } from 'lucide-react'

export type Framework = 'OpenClaw' | 'Hermes' | 'Both'

export type AgentFeature = {
  title: string
  description: string
}

export type AgentTemplate = {
  prompt: string
  configuration: string
}

export type Agent = {
  slug: string
  name: string
  tagline: string
  verified: boolean
  category: string
  tags: string[]
  framework: Framework
  description: string[]
  features: AgentFeature[]
  template: AgentTemplate
  icon: LucideIcon
}

export const agents: Agent[] = [
  {
    slug: 'momentum-trader',
    name: 'Momentum Trader',
    tagline: 'Autonomous on-chain execution',
    verified: true,
    category: 'DeFi & Trading',
    tags: ['Trading', 'Solana', 'Automation'],
    framework: 'OpenClaw',
    description: [
      'Momentum Trader is an autonomous dual-direction trading agent inspired by tools like Trojan and BonkBot. It continuously monitors Solana memecoins and major pairs, identifies momentum entries, and manages risk with dynamic stop-losses.',
      'Built to run unattended, the agent applies configurable position sizing, slippage guards, and cooldown windows so it can react to fast-moving markets while staying within the risk limits you define.',
    ],
    features: [
      {
        title: 'Momentum detection',
        description:
          'Scans price action and volume across Solana pairs to surface high-conviction entries in real time.',
      },
      {
        title: 'Dynamic risk management',
        description:
          'Automatic stop-losses, trailing exits, and per-trade position sizing keep drawdowns in check.',
      },
      {
        title: 'Dual-direction execution',
        description:
          'Enters both long and short setups with slippage protection and configurable cooldowns.',
      },
      {
        title: 'On-chain settlement',
        description:
          'Executes directly on Solana with fast confirmation and transparent, verifiable fills.',
      },
    ],
    template: {
      prompt: `You are Momentum Trader, an autonomous Solana trading agent.
Monitor the configured token pairs for momentum breakouts.
Enter positions only when volume and price confirm the trend.
Always attach a stop-loss and respect the max position size.
Report every action with the reasoning behind it.`,
      configuration: `{
  "network": "solana-mainnet",
  "pairs": ["SOL/USDC", "BONK/SOL"],
  "max_position_usd": 500,
  "stop_loss_pct": 8,
  "trailing_stop": true,
  "slippage_bps": 75,
  "cooldown_seconds": 120
}`,
    },
    icon: LineChart,
  },
  {
    slug: 'community-ops',
    name: 'Community Ops',
    tagline: 'Always-on community ops',
    verified: true,
    category: 'Community & Social',
    tags: ['Community', 'Social', 'Growth'],
    framework: 'Hermes',
    description: [
      'Community Ops is an AI community manager inspired by tooling used by projects like Jito and Tensor. It handles scheduled GM posts, engagement tracking, auto-moderation, and reply assistance across Discord and X.',
      'The agent keeps your community active around the clock, flags sentiment shifts, and drafts on-brand responses that your team can approve or send automatically.',
    ],
    features: [
      {
        title: 'Scheduled posting',
        description:
          'Automates GM posts, announcements, and recurring updates across Discord and X.',
      },
      {
        title: 'Auto-moderation',
        description:
          'Detects spam, scams, and toxic messages, and acts on them based on your rules.',
      },
      {
        title: 'Engagement tracking',
        description:
          'Monitors sentiment and activity trends, surfacing insights your team can act on.',
      },
      {
        title: 'Reply assistance',
        description:
          'Drafts on-brand responses to common questions for one-click approval.',
      },
    ],
    template: {
      prompt: `You are Community Ops, an AI community manager for a Solana project.
Post scheduled GM and update messages in the configured channels.
Moderate incoming messages against the community guidelines.
Draft friendly, on-brand replies to frequent questions.
Escalate anything sensitive to a human moderator.`,
      configuration: `{
  "platforms": ["discord", "x"],
  "gm_schedule": "0 9 * * *",
  "auto_moderation": true,
  "escalation_channel": "#mod-alerts",
  "tone": "friendly, concise, on-brand"
}`,
    },
    icon: Users,
  },
  {
    slug: 'alpha-scout',
    name: 'Alpha Scout',
    tagline: 'Signal from the noise',
    verified: true,
    category: 'Research & Data',
    tags: ['Research', 'Analytics', 'Solana'],
    framework: 'Both',
    description: [
      'Alpha Scout is an on-chain and social intelligence agent in the style of Nansen and Arkham. It aggregates Solana news, wallet activity, and Twitter signals into short, actionable research briefs.',
      'Instead of drowning in dashboards, you get concise summaries highlighting what changed, why it matters, and which wallets or narratives are worth watching.',
    ],
    features: [
      {
        title: 'Wallet intelligence',
        description:
          'Tracks smart-money wallets and flags notable accumulation or distribution events.',
      },
      {
        title: 'Social signal parsing',
        description:
          'Filters Twitter and news noise into the narratives gaining real traction.',
      },
      {
        title: 'Actionable briefs',
        description:
          'Delivers short, prioritized summaries on a schedule you control.',
      },
      {
        title: 'Multi-source aggregation',
        description:
          'Combines on-chain data, news, and social feeds into a single view.',
      },
    ],
    template: {
      prompt: `You are Alpha Scout, a Solana research analyst agent.
Aggregate on-chain activity, news, and social signals for the watchlist.
Summarize what changed and why it matters in a short brief.
Rank findings by relevance and confidence.
Avoid speculation that is not supported by data.`,
      configuration: `{
  "watchlist_wallets": ["...", "..."],
  "sources": ["onchain", "news", "twitter"],
  "brief_schedule": "0 */6 * * *",
  "max_items_per_brief": 5,
  "min_confidence": 0.6
}`,
    },
    icon: Telescope,
  },
]

export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find((agent) => agent.slug === slug)
}
