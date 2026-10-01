import { PageShell, Prose } from "@/components/PageShell";
import { agb, agbFooter } from "@/lib/agb";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Allgemeine Geschäftsbedingungen",
  description: `Allgemeine Geschäftsbedingungen der ${site.name}: Behandlungsvertrag, Honorierung nach GebüH, Terminabsagen, Vertraulichkeit und Rechnungsstellung.`,
  path: "/agb",
});

export default function AgbPage() {
  return (
    <PageShell title="Allgemeine Geschäfts­bedingungen">
      <Prose>
        {agb.map((paragraph) => (
          <section key={paragraph.title} className="mt-10 first:mt-0">
            <h2>{paragraph.title}</h2>
            {paragraph.clauses.map((clause) => (
              <p key={clause}>{clause}</p>
            ))}
          </section>
        ))}
        <div className="mt-12 text-[15px] text-muted">
          {agbFooter.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </Prose>
    </PageShell>
  );
}
