import Link from "next/link";
import { site } from "@/lib/site";

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 text-[15px] text-ink-soft md:grid-cols-12 md:px-8">
        <p className="md:col-span-5">
          <span className="font-semibold text-ink">{site.name}</span>
          <br />
          {site.owner}, {site.profession}
        </p>
        <p className="md:col-span-4">
          {site.address.street}
          <br />
          {site.address.postalCode} {site.address.city} ({site.district})
          <br />
          <a href={site.phone.href} className="link-reveal tabular-nums text-ink">
            {site.phone.display}
          </a>
        </p>
        <nav aria-label="Rechtliches" className="md:col-span-3 md:text-right">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 md:flex-col md:items-end">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-reveal hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
