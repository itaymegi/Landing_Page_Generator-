import Image from "next/image";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { PremiumSection } from "@/components/ui/PremiumSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SoftGlowImage } from "@/components/ui/SoftGlowImage";

export function About() {
  const { about } = site;

  return (
    <PremiumSection id="about" tone="ivory" editorialWord="OLGA" floral="corners">
      <div className="container-olga">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative lg:order-1">
            <div className="mx-auto max-w-[16rem] sm:max-w-[18rem] lg:mx-0 lg:max-w-[20rem]">
              <SoftGlowImage>
                <div
                  className="absolute -bottom-3 -start-3 -z-10 h-full w-full rounded-[20px] bg-sage/15"
                  aria-hidden="true"
                />
                <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-border">
                  <Image
                    src={about.image}
                    alt={about.imageAlt}
                    fill
                    className="scale-[1.35] object-cover"
                    sizes="(max-width: 1024px) 280px, 320px"
                    style={
                      about.objectPosition
                        ? { objectPosition: about.objectPosition }
                        : undefined
                    }
                  />
                </div>
              </SoftGlowImage>
            </div>
          </Reveal>

          <Reveal className="lg:order-2" delay={120}>
            <SectionHeader
              label={about.title}
              title={about.headline}
              variant="label-first"
              delay={120}
            />
            <p className="mt-5 max-w-xl text-sm leading-[1.85] text-text-muted sm:text-base">
              {about.body}
            </p>
            <p className="mt-4 text-sm font-medium text-sage-deep sm:text-base">
              עיצוב מותאם אישית · הערכה ראשונית בלבד
            </p>
          </Reveal>
        </div>
      </div>
    </PremiumSection>
  );
}
