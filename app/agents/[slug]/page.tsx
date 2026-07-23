import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageNavbar } from '@/components/page-navbar'
import { SiteFooter } from '@/components/site-footer'
import { AgentDetail } from '@/components/agent-detail'
import { agents, getAgentBySlug } from '@/lib/agents'

export function generateStaticParams() {
  return agents.map((agent) => ({ slug: agent.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const agent = getAgentBySlug(slug)

  if (!agent) {
    return { title: 'Agent not found | Hatcher Hub' }
  }

  return {
    title: `${agent.name} | Hatcher Hub`,
    description: agent.description[0],
  }
}

export default async function AgentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const agent = getAgentBySlug(slug)

  if (!agent) {
    notFound()
  }

  return (
    <main className="min-h-dvh bg-background">
      <PageNavbar />
      <AgentDetail agent={agent} />
      <SiteFooter />
    </main>
  )
}
