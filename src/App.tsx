import { useEffect } from 'react'
import { MobileCtaBar } from './components/layout/MobileCtaBar'
import { BrandSocialStrip } from './components/layout/BrandSocialStrip'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { Benefits } from './components/sections/Benefits'
import { Contact, ContactBelowFormBand } from './components/sections/Contact'
import { CtaBanner } from './components/sections/CtaBanner'
import { Faq } from './components/sections/Faq'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Testimonials } from './components/sections/Testimonials'
import { WhyUs } from './components/sections/WhyUs'
import { applyTheme, locale, site } from './content/site'

export default function App() {
  useEffect(() => {
    document.title =
      site.meta?.title ?? `${site.brand.name} — ${site.brand.tagline}`
    const desc = document.querySelector('meta[name="description"]')
    if (desc && site.meta?.description) {
      desc.setAttribute('content', site.meta.description)
    }
    document.documentElement.lang = locale === 'he' ? 'he' : 'en'
    document.documentElement.dir = locale === 'he' ? 'rtl' : 'ltr'
    applyTheme(site.theme)
    return () => {
      applyTheme(undefined)
      document.documentElement.lang = 'en'
      document.documentElement.dir = 'ltr'
    }
  }, [])

  return (
    <>
      <a
        href="#main"
        className="absolute start-[-9999px] top-0 z-[100] rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground focus:start-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-page"
      >
        {site.ui.skipToContent}
      </a>
      <SiteHeader brand={site.brand} nav={site.nav} ui={site.ui} />
      <main id="main" className="pb-[calc(5.75rem+env(safe-area-inset-bottom))] sm:pb-0">
        <Hero hero={site.hero} proofStrip={site.proofStrip} />
        <Benefits benefits={site.benefits} />
        <Services services={site.services} eyebrow={site.ui.eyebrowServices} />
        <WhyUs whyUs={site.whyUs} eyebrow={site.ui.eyebrowProcess} />
        <Testimonials
          testimonials={site.testimonials}
          eyebrow={site.ui.eyebrowTestimonials}
        />
        <CtaBanner ctaMid={site.ctaMid} nav={site.nav} />
        <Faq faq={site.faq} />
        <Contact
          contact={site.contact}
          ui={site.ui}
          deferBelowForm={site.footer.layout === 'legalOnly'}
          leadMeta={{
            clientId: site.clientId,
            locale,
            brandName: site.brand.name,
          }}
        />
        {site.footer.layout === 'legalOnly' ? (
          <>
            <BrandSocialStrip
              brand={site.brand}
              footer={site.footer}
              ui={site.ui}
              tone="contactBand"
            />
            <ContactBelowFormBand contact={site.contact} />
          </>
        ) : null}
      </main>
      <SiteFooter footer={site.footer} brand={site.brand} ui={site.ui} />
      <MobileCtaBar nav={site.nav} />
    </>
  )
}
