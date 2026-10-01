import { welcome } from "@/lib/content";
import { site } from "@/lib/site";

export function Welcome() {
  return (
    <section aria-labelledby="willkommen-titel" className="border-t border-line bg-paper-deep/60">
      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-6 px-5 py-16 md:grid-cols-12 md:px-8 md:py-28">
        <h2
          id="willkommen-titel"
          className="text-[32px] leading-[1.05] font-semibold tracking-[-0.03em] md:col-span-4 md:text-[44px]"
        >
          {welcome.heading}
        </h2>
        <blockquote className="md:col-span-8">
          <p className="text-[22px] leading-[1.4] tracking-[-0.015em] text-ink-soft md:text-[32px] md:leading-[1.3]">
            {welcome.questions.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="mt-6 text-[22px] leading-[1.4] font-semibold tracking-[-0.015em] text-accent md:mt-8 md:text-[32px]">
            {welcome.closing}
          </p>
          <footer className="mt-6 text-[15px] text-muted md:mt-8">
            — {site.owner}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
