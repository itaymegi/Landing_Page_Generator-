import { useEffect } from 'react'
import { MobileCtaBar } from './components/layout/MobileCtaBar'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { Benefits } from './components/sections/Benefits'
import { Contact } from './components/sections/Contact'
import { CtaBanner } from './components/sections/CtaBanner'
import { Faq } from './components/sections/Faq'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Testimonials } from './components/sections/Testimonials'
import { WhyUs } from './components/sections/WhyUs'
import { applyTheme, site } from './content/site'

export default function App() {
  useEffect(() => {
    document.title =
      site.meta?.title ?? `${site.brand.name} — ${site.brand.tagline}`
    const desc = document.querySelector('meta[name="description"]')
    if (desc && site.meta?.description) {
      desc.setAttribute('content', site.meta.description)
    }
    applyTheme(site.theme)
    return () => applyTheme(undefined)
  }, [site])

  return (
    <>
      <a
        href="#main"
        className="absolute left-[-9999px] top-0 z-[100] rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-page focus:left-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-page"
      >
        Skip to content
      </a>
      <SiteHeader brand={site.brand} nav={site.nav} />
      <main id="main" className="pb-24 sm:pb-0">
        <Hero hero={site.hero} proofStrip={site.proofStrip} />
        <Benefits benefits={site.benefits} />
        <Services services={site.services} />
        <WhyUs whyUs={site.whyUs} />
        <Testimonials testimonials={site.testimonials} />
        <CtaBanner ctaMid={site.ctaMid} />
        <Faq faq={site.faq} />
        <Contact contact={site.contact} />
      </main>
      <SiteFooter footer={site.footer} brand={site.brand} />
      <MobileCtaBar nav={site.nav} />
    </>
  )
}
