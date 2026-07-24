import { Hexagon } from 'lucide-react'

const footerLinks = [
  {
    title: 'Directory',
    links: ['Agents', 'Categories', 'Submit', 'Builders'],
  },
  {
    title: 'Platform',
    links: ['OpenClaw', 'Hermes', 'Deploy', 'Documentation'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                <Hexagon className="h-5 w-5" fill="currentColor" fillOpacity={0.2} />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Hatcher<span className="text-primary">Hub</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The curated directory for Hatcher-native AI agents in the Solana
              ecosystem.
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hatcher Hub. Built for the Solana ecosystem.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
