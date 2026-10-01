import Link from "next/link";
import { navItems } from "@/lib/nav";
import { site } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";
import { PhoneIcon } from "./icons";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center gap-3 px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className="mr-auto flex flex-col leading-none"
          aria-label={`${site.name} – zur Startseite`}
        >
          <span className="text-[12px] font-medium tracking-[0.02em] text-muted md:text-[13px]">
            Naturheilpraxis
          </span>
          <span className="mt-1 text-[19px] font-semibold tracking-[-0.02em] md:text-[22px]">
            Naupert
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden md:block">
          <ul className="flex items-center gap-7 text-[15px] text-ink-soft">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-reveal hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={site.phone.href}
          className="flex h-11 items-center gap-2 rounded-full bg-accent px-4 text-[15px] font-semibold tracking-[-0.01em] whitespace-nowrap text-paper tabular-nums transition-colors duration-200 hover:bg-accent-deep md:ml-4 md:px-5 md:text-base"
          aria-label={`Anrufen: ${site.phone.display}`}
        >
          <PhoneIcon className="h-4 w-4 shrink-0" />
          {site.phone.display}
        </a>

        <MobileMenu />
      </div>
    </header>
  );
}
