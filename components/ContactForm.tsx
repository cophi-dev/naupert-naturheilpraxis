"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";
type ErrorKind = "validation" | "send";

const fieldClass =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[17px] text-ink outline-none transition-colors duration-200 focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorKind, setErrorKind] = useState<ErrorKind>("validation");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent");
    const hp = String(data.get("hp") || "").trim();
    if (!name || !email || !message || !consent) {
      setErrorKind("validation");
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, phone, message, consent: true, hp }),
      });
      const payload = (await response.json().catch(() => null)) as { ok?: boolean } | null;
      if (!response.ok || !payload?.ok) {
        setErrorKind("send");
        setStatus("error");
        return;
      }
      setStatus("ok");
    } catch {
      setErrorKind("send");
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div role="status" aria-live="polite" className="py-4 md:py-8">
        <p className="text-[26px] leading-tight font-semibold tracking-[-0.02em] text-ink md:text-[34px]">
          Vielen Dank — Ihre Nachricht wurde gesendet.
        </p>
        <p className="mt-3 max-w-md text-[17px] leading-[1.6] text-muted">
          Ich melde mich so bald wie möglich bei Ihnen. Für Termine erreichen Sie mich auch telefonisch
          unter{" "}
          <a href={site.phone.href} className="link font-semibold text-ink tabular-nums">
            {site.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="E-Mail" name="email" type="email" autoComplete="email" required />
      </div>
      <Field label="Telefon" name="phone" type="tel" autoComplete="tel" hint="optional, für einen Rückruf" />
      <label className="block">
        <span className="mb-2 block text-[15px] font-medium">Ihre Nachricht *</span>
        <textarea name="message" required rows={5} className={`${fieldClass} resize-y`} />
        <span className="mt-2 block text-[14px] text-muted">
          Bitte nur kurz Ihr Anliegen – Gesundheitliches besprechen wir lieber persönlich.
        </span>
      </label>
      <label className="flex items-start gap-3 text-[15px] leading-[1.55] text-muted">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 accent-accent" />
        <span>
          Ich bin einverstanden, dass meine Angaben (ggf. auch Angaben zur Gesundheit) zur Beantwortung
          meiner Anfrage verarbeitet werden. Die Einwilligung kann ich jederzeit widerrufen. Mehr in der{" "}
          <Link href="/datenschutz" className="link text-ink">
            Datenschutzerklärung
          </Link>
          . *
        </span>
      </label>
      <div hidden aria-hidden="true">
        <label>
          Firma
          <input type="text" name="hp" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      {status === "error" && errorKind === "validation" ? (
        <p role="alert" className="text-[15px] font-medium text-red-800">
          Bitte füllen Sie Name, E-Mail und Nachricht aus und bestätigen Sie die Einwilligung.
        </p>
      ) : null}
      {status === "error" && errorKind === "send" ? (
        <p role="alert" className="text-[15px] font-medium text-red-800">
          Die Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es noch einmal oder rufen
          Sie an:{" "}
          <a href={site.phone.href} className="underline tabular-nums">
            {site.phone.display}
          </a>
          .
        </p>
      ) : null}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          aria-busy={status === "sending"}
          className="group flex h-13 items-center gap-2.5 rounded-full bg-accent px-7 text-[17px] font-semibold text-paper transition-colors duration-200 hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </button>
        <span className="text-[14px] text-muted">* Pflichtfelder</span>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  hint,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  hint?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[15px] font-medium">
        {label}
        {required ? " *" : null}
        {hint ? <span className="ml-1.5 font-normal text-muted">({hint})</span> : null}
      </span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} className={fieldClass} />
    </label>
  );
}
