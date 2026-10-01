"use client";

import { useEffect } from "react";
import { logger } from "@/lib/log";

const log = logger("error-boundary");

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    log("render error %o", { message: error.message, digest: error.digest });
  }, [error]);

  return (
    <div className="mx-auto max-w-6xl px-5 pt-16 pb-24 md:px-8 md:pt-24">
      <h1 className="text-[36px] leading-[1.05] font-semibold tracking-[-0.035em] md:text-[52px]">
        Die Seite konnte nicht geladen werden.
      </h1>
      <p className="mt-4 max-w-xl text-[17px] leading-[1.6] text-ink-soft">
        Bitte versuchen Sie es erneut. Termine vereinbaren Sie jederzeit
        telefonisch unter{" "}
        <a href="tel:+494027800176" className="link text-ink tabular-nums">
          040 278 00 176
        </a>
        .
      </p>
      <button
        type="button"
        onClick={() => retry()}
        className="mt-8 h-12 rounded-full bg-accent px-6 text-[16px] font-semibold text-paper transition-colors duration-200 hover:bg-accent-deep"
      >
        Erneut laden
      </button>
    </div>
  );
}
