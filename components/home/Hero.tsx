import Image from "next/image";
import { offerSummary, site } from "@/lib/site";
import { PhoneIcon } from "../icons";
import portrait from "@/public/images/reinhard-naupert.jpg";

export function Hero() {
  return (
    <section aria-labelledby="hero-titel" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-x-8 px-5 pt-7 pb-12 md:grid-cols-12 md:px-8 md:pt-20 md:pb-24">
        <div className="fade-up md:col-span-7">
          <p className="text-[12.5px] font-medium tracking-[0.14em] text-accent uppercase md:text-[13px]">
            Hamburg-{site.district} · seit {site.founded}
          </p>

          <h1
            id="hero-titel"
            className="mt-4 text-[44px] leading-[0.98] font-semibold tracking-[-0.04em] text-balance md:mt-6 md:text-[76px]"
          >
            {site.name}
          </h1>

          <div className="mt-5 flex items-center gap-3.5 md:mt-7">
            <Image
              src={portrait}
              alt={`Porträt ${site.owner}`}
              width={56}
              height={56}
              sizes="56px"
              priority
              className="h-14 w-14 shrink-0 rounded-full object-cover object-top md:hidden"
            />
            <p className="text-[19px] leading-snug md:text-[24px]">
              <span className="font-semibold">{site.owner}</span>
              <span className="block text-ink-soft md:inline">
                <span className="hidden md:inline">, </span>
                {site.profession}
              </span>
            </p>
          </div>

          <p className="mt-5 max-w-xl text-[17px] leading-[1.55] text-ink-soft md:mt-6 md:text-[20px]">
            {offerSummary}
          </p>

          <div className="mt-7 border-t-2 border-ink pt-5 md:mt-10 md:max-w-xl md:pt-6">
            <p className="text-[17px] font-semibold md:text-[18px]">
              Termine nach Vereinbarung
            </p>
            <p className="mt-0.5 text-[15px] text-ink-soft md:text-[16px]">
              Bitte vereinbaren Sie Ihren Termin telefonisch.
            </p>

            <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
              <a
                href={site.phone.href}
                className="text-[38px] leading-none font-semibold tracking-[-0.03em] tabular-nums md:text-[44px]"
              >
                {site.phone.display}
              </a>
              <a
                href={site.phone.href}
                className="flex h-13 items-center justify-center gap-2.5 rounded-full bg-accent px-7 text-[17px] font-semibold text-paper transition-colors duration-200 hover:bg-accent-deep"
              >
                <PhoneIcon className="h-[18px] w-[18px]" />
                Anrufen
              </a>
            </div>

            <p className="mt-4 text-[15px] font-medium text-ink md:text-[16px]">
              <span
                className="mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle"
                aria-hidden="true"
              />
              Hausbesuche möglich
            </p>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-ink-soft md:mt-8 md:text-[16px]">
            {site.address.street} ({site.address.floor})
            <br />
            {site.address.postalCode} {site.address.city}-{site.district}
            <span aria-hidden="true"> · </span>
            <a href="#anfahrt" className="link text-ink">
              Anfahrt
            </a>
          </p>
        </div>

        <figure className="fade-up fade-up-delay hidden md:col-span-5 md:block md:pl-6">
          <Image
            src={portrait}
            alt={`${site.owner}, ${site.profession}, im Porträt`}
            sizes="(min-width: 768px) 380px, 0px"
            priority
            className="ml-auto aspect-[4/5] w-full max-w-[380px] object-cover object-top"
          />
          <figcaption className="mt-3 ml-auto max-w-[380px] text-[14px] text-muted">
            {site.owner}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
