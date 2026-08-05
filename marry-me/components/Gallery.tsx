import { GalleryInteractive } from "@/components/GalleryInteractive";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { galleryItems } from "@/config/gallery";
import { site } from "@/config/site";

export function Gallery() {
  const { gallery } = site;

  return (
    <SectionShell id="gallery" tone="warm-white" hairline>
      <div className="container-marry">
        <Reveal>
          <SectionTitle
            eyebrow={gallery.eyebrow}
            title={gallery.title}
            subtitle={gallery.subtitle}
          />
        </Reveal>

        <GalleryInteractive images={galleryItems} />
      </div>
    </SectionShell>
  );
}
