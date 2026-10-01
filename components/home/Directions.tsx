import Image from "next/image";
import { anfahrt } from "@/lib/content";
import { site } from "@/lib/site";
import { ArrowIcon } from "../icons";
import { Section } from "../Section";
import building from "@/public/images/praxis-bilser-strasse-9.jpg";

export function Directions() {
  return (
    <Section
      id="anfahrt"
      index="03"
      title="Anfahrt"
      aside={
        <address className="mt-6 text-[17px] leading-[1.6] not-italic text-ink-soft">
          <span className="font-semibold text-ink">{site.name}</span>
          <br />
          {site.address.street} ({site.address.floor})
          <br />
          {site.address.postalCode} {site.address.city} ({site.district})
        </address>
      }
    >
      <h3 className="text-[22px] leading-tight font-semibold tracking-[-0.02em] md:text-[26px]">
        {anfahrt.heading}
      </h3>

      <div className="mt-6 grid gap-8 md:grid-cols-8">
        <div className="md:col-span-5">
          <p className="text-[17px] leading-[1.6] text-ink-soft">
            {anfahrt.parking.join(" ")}
          </p>
          <p className="mt-4 text-[17px] leading-[1.6] text-ink-soft">
            {anfahrt.recommendation}
          </p>
          <ul className="mt-5 flex flex-col gap-3 text-[17px] font-medium">
            <li>
              <a
                href={site.links.hvv}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2"
              >
                <span className="link">Verbindung beim HVV anzeigen</span>
                <ArrowIcon className="h-4 w-4 -rotate-45" />
              </a>
            </li>
            <li>
              <a
                href={site.links.route}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2"
              >
                <span className="link">Route planen</span>
                <ArrowIcon className="h-4 w-4 -rotate-45" />
              </a>
            </li>
          </ul>

          <p className="mt-10 text-[15px] font-medium text-muted">
            {anfahrt.walkIntro}
          </p>
          <div className="mt-3 divide-y divide-line border-y border-line">
            {anfahrt.routes.map((route) => (
              <div key={route.from} className="py-4">
                <p className="text-[15px] font-medium text-accent">{route.from}</p>
                <ul className="mt-1.5 text-[17px] leading-[1.6]">
                  {route.options.map((option, i) => (
                    <li key={option}>
                      {i > 0 ? (
                        <span className="block text-[14px] text-muted">oder</span>
                      ) : null}
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[19px] leading-snug font-medium tracking-[-0.01em]">
            {anfahrt.closing}
          </p>
        </div>

        <figure className="md:col-span-3">
          <Image
            src={building}
            alt="Hausansicht Bilser Straße 9 in Hamburg-Alsterdorf mit Eingang und Praxisschildern"
            sizes="(min-width: 768px) 280px, 100vw"
            className="aspect-[3/4] w-full object-cover"
          />
          <figcaption className="mt-3 text-[14px] text-muted">
            Bilser Straße 9 – die Praxis liegt in der 1. Etage.
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
