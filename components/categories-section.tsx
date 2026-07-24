import {
  Coins,
  MessagesSquare,
  Telescope,
  ShieldCheck,
  Gamepad2,
  ImageIcon,
  Bot,
  Wrench,
} from 'lucide-react'

const categories = [
  { name: 'DeFi & Trading', icon: Coins },
  { name: 'Community & Social', icon: MessagesSquare },
  { name: 'Research & Data', icon: Telescope },
  { name: 'Security & Audits', icon: ShieldCheck },
  { name: 'Gaming', icon: Gamepad2 },
  { name: 'NFT & Media', icon: ImageIcon },
  { name: 'Automation', icon: Bot },
  { name: 'Dev Tooling', icon: Wrench },
]

export function CategoriesSection() {
  return (
    <section
      id="categories"
      className="border-y border-border/60 bg-card/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Categories</p>
          <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Find the right agent for the job
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Every agent is organized by capability so you can go from idea to
            deployment without the guesswork.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <a
                key={cat.name}
                href="#agents"
                className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/25">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {cat.name}
                  </h3>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
