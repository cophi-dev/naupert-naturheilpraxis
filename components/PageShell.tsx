import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, lead, children }: PageShellProps) {
  return (
    <div className="mx-auto grid max-w-6xl gap-x-8 px-5 pt-10 pb-20 md:grid-cols-12 md:px-8 md:pt-20 md:pb-28">
      <header className="fade-up md:col-span-4">
        {eyebrow ? (
          <p className="text-[13px] font-medium tracking-[0.14em] text-accent uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 text-[36px] leading-[1.02] font-semibold tracking-[-0.035em] text-balance md:text-[52px]">
          {title}
        </h1>
        {lead ? (
          <div className="mt-4 text-[17px] leading-[1.55] text-ink-soft">{lead}</div>
        ) : null}
      </header>
      <div className="mt-10 md:col-span-8 md:mt-0">{children}</div>
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-2xl text-[17px] leading-[1.65] text-ink-soft [&_a]:text-ink [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-[3px] [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:text-[22px] [&_h2]:leading-tight [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_h2:first-child]:mt-0 [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-[17px] [&_h3]:font-semibold [&_h3]:text-ink [&_li]:mt-1 [&_p]:mt-3 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
      {children}
    </div>
  );
}
