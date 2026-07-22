import { SiteNavbar } from '@/components/site-navbar'
import { HeroSection } from '@/components/hero-section'
import { FeaturedAgents } from '@/components/featured-agents'
import { CategoriesSection } from '@/components/categories-section'
import { HowItWorks } from '@/components/how-it-works'
import { DeployCta } from '@/components/deploy-cta'
import { BuilderSubmission } from '@/components/builder-submission'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <main>
        <HeroSection />
        <FeaturedAgents />
        <CategoriesSection />
        <HowItWorks />
        <DeployCta />
        <BuilderSubmission />
      </main>
      <SiteFooter />
    </div>
  )
}
