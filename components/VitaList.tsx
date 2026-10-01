import type { VitaEntry } from "@/lib/content";

export function VitaList({ entries }: { entries: VitaEntry[] }) {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {entries.map((entry) => (
        <div
          key={`${entry.year}-${entry.text}`}
          className="grid gap-x-6 gap-y-1 py-4 sm:grid-cols-[8.5rem_1fr]"
        >
          <dt className="text-[15px] font-medium text-accent tabular-nums">
            {entry.year}
          </dt>
          <dd className="text-[17px] leading-[1.55]">{entry.text}</dd>
        </div>
      ))}
    </dl>
  );
}
