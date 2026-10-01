import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { VitaList } from "@/components/VitaList";
import { vita, vitaIntro } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import portrait from "@/public/images/reinhard-naupert.jpg";

export const metadata = pageMetadata({
  title: `${site.owner} – Vita`,
  description: `Vita von ${site.owner}, ${site.profession} in Hamburg-${site.district}: Ausbildung 1984–1987, Heilpraktiker-Erlaubnis 1987, Praxisgründung 1988, Augenakupunktur nach Boel, Dozententätigkeit seit 1989.`,
  path: "/person",
});

export default function PersonPage() {
  return (
    <PageShell
      eyebrow="Person"
      title={vitaIntro.name}
      lead={
        <>
          <p>{site.profession}</p>
          <p>{vitaIntro.details}</p>
          <Image
            src={portrait}
            alt={`${site.owner}, ${site.profession}, im Porträt`}
            sizes="(min-width: 768px) 300px, 240px"
            priority
            className="mt-8 aspect-[4/5] w-full max-w-[240px] object-cover object-top md:max-w-[300px]"
          />
        </>
      }
    >
      <h2 className="sr-only">Vita</h2>
      <div className="grid gap-12">
        {vita.map((group) => (
          <section key={group.title} aria-label={group.title}>
            <h3 className="mb-4 text-[19px] font-semibold tracking-[-0.01em] md:text-[20px]">
              {group.title}
            </h3>
            <VitaList entries={group.entries} />
          </section>
        ))}
      </div>
    </PageShell>
  );
}
