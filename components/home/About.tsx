import Image from "next/image";
import Link from "next/link";
import { vitaHighlights, vitaIntro } from "@/lib/content";
import { site } from "@/lib/site";
import { ArrowIcon } from "../icons";
import { Section } from "../Section";
import { VitaList } from "../VitaList";
import portrait from "@/public/images/reinhard-naupert.jpg";

export function About() {
  return (
    <Section
      id="person"
      index="02"
      title="Person"
      aside={
        <Image
          src={portrait}
          alt={`${site.owner}, ${site.profession} in Hamburg-${site.district}`}
          sizes="(min-width: 768px) 300px, 240px"
          className="mt-8 aspect-[4/5] w-full max-w-[240px] object-cover object-top md:max-w-[300px]"
        />
      }
    >
      <p className="text-[24px] leading-tight font-semibold tracking-[-0.02em] md:text-[28px]">
        {vitaIntro.name}
      </p>
      <p className="mt-1 text-[17px] text-ink-soft">
        {site.profession} · {vitaIntro.details}
      </p>

      <div className="mt-8">
        <VitaList entries={vitaHighlights} />
      </div>

      <Link
        href="/person"
        className="group mt-8 inline-flex items-center gap-2 text-[17px] font-medium"
      >
        <span className="link">Vollständige Vita</span>
        <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </Link>
    </Section>
  );
}
