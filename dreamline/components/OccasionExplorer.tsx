import { site, creationItem, type CreationItem } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { OccasionExplorerInteractive } from "@/components/OccasionExplorerInteractive";

export function OccasionExplorer() {
  const { occasionExplorer } = site;
  const previews: Record<string, CreationItem> = {};
  for (const option of occasionExplorer.items) {
    previews[option.id] = creationItem(option.previewItemId);
  }

  return (
    <section className="section-py bg-powder-blue/25">
      <div className="container-dreamline">
        <Reveal>
          <SectionHeading
            eyebrow={occasionExplorer.eyebrow}
            title={occasionExplorer.title}
            subtitle={occasionExplorer.subtitle}
            align="center"
          />
        </Reveal>

        <OccasionExplorerInteractive items={occasionExplorer.items} previews={previews} />
      </div>
    </section>
  );
}
