import { PageShell, Prose } from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Impressum",
  description: `Impressum der ${site.name}: ${site.profession} ${site.owner}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}. Berufsbezeichnung, Erlaubnis, zuständige Behörde und Berufsverband.`,
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <PageShell title="Impressum">
      <Prose>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          <strong>
            {site.profession} {site.owner}
          </strong>
          <br />
          {site.name}
          <br />
          {site.address.street} ({site.address.floor})
          <br />
          {site.address.postalCode} {site.address.city} ({site.district})
        </p>
        <p>
          Telefon: <a href={site.phone.href}>(040) 278 00 176</a>
          <br />
          E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>

        <h2>Wirtschafts-Identifikationsnummer</h2>
        <p>DE 429337194</p>

        <h2>Berufsbezeichnung und berufsrechtliche Angaben</h2>
        <p>
          Berufsbezeichnung: Heilpraktiker (verliehen in der Bundesrepublik
          Deutschland)
        </p>
        <p>
          Als Heilpraktiker tätig auf Grund der „Erlaubnis zur Ausübung der
          Heilkunde ohne Bestallung“ gemäß § 1 Abs. 1 des Heilpraktikergesetzes
          vom 17.02.1939. Die Erlaubnis vom 16.09.1987 wurde von der
          Gesundheitsbehörde Hamburg erteilt.
        </p>

        <h3>Zuständige Aufsichtsbehörde</h3>
        <p>
          Das Gesundheitsamt Hamburg-Nord ist die zuständige Behörde für die
          Praxis Bilser Straße&nbsp;9.
        </p>
        <p>
          Gesundheits- und Umweltamt Hamburg-Nord
          <br />
          Eppendorfer Landstraße 59
          <br />
          20249 Hamburg
        </p>

        <h3>Mitglied des Berufsverbandes</h3>
        <p>
          Fachverband Deutscher Heilpraktiker
          <br />
          Landesverband Hamburg e.V.
          <br />
          Conventstr. 14
          <br />
          22089 Hamburg
          <br />
          Mitgliedsnummer: 11526
        </p>

        <h3>Berufsrechtliche Regelungen</h3>
        <p>Berufsständische Regelungen befinden sich in der</p>
        <ul>
          <li>Berufsordnung für Heilpraktiker</li>
          <li>Ethikerklärung des Fachverbandes Deutscher Heilpraktiker</li>
          <li>Gebührenordnung für Heilpraktiker</li>
        </ul>
        <p>
          Alle Regelungen können auf der Homepage des{" "}
          <a href="https://www.heilpraktiker.org" target="_blank" rel="noopener noreferrer">
            Fachverbandes Deutscher Heilpraktiker e.V.
          </a>{" "}
          eingesehen werden. Das{" "}
          <a
            href="https://www.gesetze-im-internet.de/heilprg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Heilpraktikergesetz
          </a>{" "}
          ist im Internet frei zugänglich.
        </p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          {site.profession} {site.owner}
          <br />
          {site.address.street}, {site.address.postalCode} {site.address.city}
        </p>

        <h2>Hinweis zu Links</h2>
        <p>
          Für die Inhalte verlinkter Seiten Dritter sind ausschließlich deren
          Betreiber verantwortlich. Auf die Gestaltung und die Inhalte der
          verlinkten Seiten besteht keinerlei Einfluss. Sobald rechtswidrige
          Inhalte bekannt werden, wird der entsprechende Link entfernt.
        </p>
      </Prose>
    </PageShell>
  );
}
