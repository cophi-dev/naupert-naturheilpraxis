import { site } from "@/lib/site";
import { PhoneIcon } from "../icons";
import { Section } from "../Section";

export function Contact() {
  const rows = [
    {
      label: "Telefon",
      content: (
        <a href={site.phone.href} className="link-reveal tabular-nums">
          {site.phone.display}
        </a>
      ),
    },
    {
      label: "Mobil",
      content: (
        <a href={site.mobile.href} className="link-reveal tabular-nums">
          {site.mobile.display}
        </a>
      ),
    },
    {
      label: "E-Mail",
      content: (
        <a href={`mailto:${site.email}`} className="link-reveal">
          {site.email}
        </a>
      ),
    },
    {
      label: "Adresse",
      content: (
        <>
          {site.address.street} ({site.address.floor})
          <br />
          {site.address.postalCode} {site.address.city} ({site.district})
        </>
      ),
    },
  ];

  return (
    <Section id="kontakt" index="04" title="Kontakt" tone="ink">
      <p className="text-[19px] font-semibold md:text-[22px]">
        Termine nach Vereinbarung
      </p>
      <p className="mt-1 text-[17px] text-paper/70">
        Bitte vereinbaren Sie Ihren Termin telefonisch. Hausbesuche sind möglich.
      </p>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
        <a
          href={site.phone.href}
          className="text-[44px] leading-none font-semibold tracking-[-0.03em] tabular-nums md:text-[64px]"
        >
          {site.phone.display}
        </a>
        <a
          href={site.phone.href}
          className="flex h-13 items-center justify-center gap-2.5 rounded-full bg-paper px-7 text-[17px] font-semibold text-ink transition-colors duration-200 hover:bg-accent-soft"
        >
          <PhoneIcon className="h-[18px] w-[18px]" />
          Anrufen
        </a>
      </div>

      <dl className="mt-12 divide-y divide-paper/15 border-y border-paper/15">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid gap-x-6 gap-y-1 py-4 sm:grid-cols-[8.5rem_1fr]"
          >
            <dt className="text-[15px] font-medium text-paper/60">{row.label}</dt>
            <dd className="text-[17px] leading-[1.55]">{row.content}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
