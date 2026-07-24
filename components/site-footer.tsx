import { Hexagon } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                <Hexagon className="h-5 w-5" fill="currentColor" fillOpacity={0.2} />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Hatcher<span className="text-primary">Hub</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              An independent, community-built directory for Hatcher-native AI agents in the Solana ecosystem.
            </p>
            <p className="mt-2 max-w-xs text-xs text-muted-foreground/80">
              Not operated by Hatcher Labs.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()}Hatcher Hub · Independent community project · Not operated by Hatcher Labs
          </p>
          </p>
        </div>
      </div>
    </footer>
  )
}
