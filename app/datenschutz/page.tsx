import { PageShell, Prose } from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung der ${site.name}: Hosting bei Vercel, keine Cookies, keine Tracking- oder Analysedienste, Ihre Rechte nach der DSGVO.`,
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <PageShell title="Datenschutz­erklärung">
      <Prose>
        <h2>Datenschutz</h2>
        <p>
          Die {site.name}, vertreten durch {site.owner}, nimmt den Schutz Ihrer
          persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen
          Daten vertraulich und entsprechend der gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <p>
          Die Nutzung unserer Website ist ohne Angabe personenbezogener Daten
          möglich.
        </p>

        <h2>Verantwortlicher</h2>
        <p>
          {site.profession} {site.owner}
          <br />
          {site.name}
          <br />
          {site.address.street}, {site.address.postalCode} {site.address.city}
          <br />
          Telefon: <a href={site.phone.href}>{site.phone.display}</a>
          <br />
          E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>

        <h2>Keine Cookies, kein Tracking</h2>
        <p>
          Diese Website setzt keine Cookies, verwendet keine Analyse- oder
          Tracking-Dienste, keine Werbenetzwerke, keine eingebetteten Karten
          und keine Social-Media-Plugins. Die Schriftart wird von unserem
          eigenen Server ausgeliefert; beim Aufruf der Seiten wird keine
          Verbindung zu Google oder anderen Schriftanbietern aufgebaut.
        </p>

        <h2>Hosting bei Vercel</h2>
        <p>
          Diese Website wird bei der Vercel Inc., 440 N Barranca Ave #4133,
          Covina, CA 91723, USA, gehostet. Beim Aufruf der Website verarbeitet
          Vercel technisch notwendige Zugriffsdaten (sogenannte
          Server-Logfiles), insbesondere:
        </p>
        <ul>
          <li>IP-Adresse des anfragenden Geräts</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>aufgerufene Seite bzw. Datei</li>
          <li>übertragene Datenmenge und Statusmeldung</li>
          <li>Browsertyp und Betriebssystem</li>
          <li>Referrer-URL (die zuvor besuchte Seite)</li>
        </ul>
        <p>
          Die Verarbeitung erfolgt, um die Website sicher und stabil
          auszuliefern und Missbrauch abzuwehren. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in einem
          sicheren und funktionsfähigen Internetauftritt. Die Daten werden nur
          so lange gespeichert, wie es für diese Zwecke erforderlich ist.
        </p>
        <p>
          Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28
          DSGVO. Eine Übermittlung in die USA wird auf die
          Standardvertragsklauseln der EU-Kommission sowie auf die
          Zertifizierung von Vercel nach dem EU-US Data Privacy Framework
          gestützt. Weitere Informationen:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzerklärung von Vercel
          </a>
          .
        </p>

        <h2>Kontakt per Telefon oder E-Mail</h2>
        <p>
          Wenn Sie uns anrufen oder eine E-Mail schreiben, verarbeiten wir Ihre
          Angaben (zum Beispiel Name, Telefonnummer, E-Mail-Adresse und Ihr
          Anliegen), um Ihre Anfrage zu beantworten und Termine zu vereinbaren.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO; soweit
          Gesundheitsdaten betroffen sind, Art. 9 Abs. 2 lit. h DSGVO. Wir
          weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B.
          bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
          Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
          nicht möglich.
        </p>

        <h2>Externe Links</h2>
        <p>
          Diese Website enthält Links zu externen Angeboten, etwa zur
          Verbindungsauskunft des HVV oder zur Routenplanung bei Google Maps.
          Daten werden an diese Anbieter erst übertragen, wenn Sie einen
          solchen Link anklicken. Ab dann gelten die Datenschutzbestimmungen
          des jeweiligen Anbieters.
        </p>

        <h2>SSL- bzw. TLS-Verschlüsselung</h2>
        <p>
          Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der
          Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
          Eine verschlüsselte Verbindung erkennen Sie daran, dass die
          Adresszeile des Browsers mit „https://“ beginnt, und an dem
          Schloss-Symbol in Ihrer Browserzeile.
        </p>

        <h2>Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
          gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
          und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung,
          Einschränkung der Verarbeitung oder Löschung dieser Daten, sofern
          nicht andere gesetzliche Vorgaben (10 Jahre Aufbewahrungspflicht aus
          Patientenrechtegesetz oder steuerrechtlichen Gründen) einer Löschung
          entgegenstehen. Außerdem haben Sie das Recht auf
          Datenübertragbarkeit und das Recht, einer Verarbeitung auf Grundlage
          von Art. 6 Abs. 1 lit. f DSGVO zu widersprechen (Art. 15 bis 21
          DSGVO).
        </p>
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
          können Sie sich jederzeit unter der im Impressum angegebenen Adresse
          an uns wenden.
        </p>
        <p>
          Sie haben zudem das Recht, sich bei einer Aufsichtsbehörde zu
          beschweren. Zuständig ist der Hamburgische Beauftragte für
          Datenschutz und Informationsfreiheit, Ludwig-Erhard-Straße 22, 20459
          Hamburg.
        </p>

        <h2>Widerspruch Werbe-Mails</h2>
        <p>
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
          Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
          Werbung und Informationsmaterialien wird hiermit widersprochen. Die
          Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte
          im Falle der unverlangten Zusendung von Werbeinformationen, etwa
          durch Spam-E-Mails, vor.
        </p>
      </Prose>
    </PageShell>
  );
}
