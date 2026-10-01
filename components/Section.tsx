import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  index?: string;
  title: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
  tone?: "paper" | "ink";
};

export function Section({
  id,
  index,
  title,
  aside,
  children,
  className = "",
  tone = "paper",
}: SectionProps) {
  const isInk = tone === "ink";
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-titel` : undefined}
      className={`scroll-mt-16 md:scroll-mt-20 ${isInk ? "bg-ink text-paper" : "border-t border-line"} ${className}`}
    >
      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-8 px-5 py-16 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-4">
          {index ? (
            <p
              className={`text-[13px] font-medium tracking-[0.14em] tabular-nums ${isInk ? "text-paper/60" : "text-accent"}`}
            >
              {index}
            </p>
          ) : null}
          <h2
            id={id ? `${id}-titel` : undefined}
            className="mt-3 text-[32px] leading-[1.05] font-semibold tracking-[-0.03em] md:text-[44px]"
          >
            {title}
          </h2>
          {aside}
        </div>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}
