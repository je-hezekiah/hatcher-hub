import type { Metadata } from 'next'
import { ShieldCheck } from 'lucide-react'
import { PageNavbar } from '@/components/page-navbar'
import { SiteFooter } from '@/components/site-footer'
import { SubmitForm } from '@/components/submit-form'

export const metadata: Metadata = {
  title: 'Submit Your Agent | Hatcher Hub',
  description:
    'List your Hatcher-native AI agent built on OpenClaw or Hermes in the Hatcher Hub directory.',
}

export default function SubmitPage() {
  return (
    <main className="min-h-dvh bg-background">
      <PageNavbar />

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <p className="text-sm font-medium text-primary">For builders</p>
          <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Submit Your Agent
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            List your Hatcher-native AI agent in the directory. This is for
            agents built on{' '}
            <span className="font-medium text-foreground">OpenClaw</span> or{' '}
            <span className="font-medium text-foreground">Hermes</span> in the
            Solana ecosystem. Fill out the details below and our team will take
            it from there.
          </p>
        </div>

        <div className="mt-10">
          <SubmitForm />
        </div>

        <div className="mt-6 flex items-start justify-center gap-2.5 rounded-xl border border-border/60 bg-card/40 px-4 py-3 text-center">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">
            All submissions are manually reviewed for quality and Hatcher
            compatibility.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
