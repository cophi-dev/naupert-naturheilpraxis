import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-16 pb-24 md:px-8 md:pt-24">
      <h1 className="text-[36px] leading-[1.05] font-semibold tracking-[-0.035em] md:text-[52px]">
        Diese Seite gibt es nicht.
      </h1>
      <p className="mt-4 max-w-xl text-[17px] leading-[1.6] text-ink-soft">
        Termine vereinbaren Sie telefonisch unter{" "}
        <a href={site.phone.href} className="link text-ink tabular-nums">
          {site.phone.display}
        </a>
        .
      </p>
      <Link href="/" className="link mt-8 inline-block text-[17px] font-medium">
        Zur Praxis-Übersicht
      </Link>
    </div>
  );
}
