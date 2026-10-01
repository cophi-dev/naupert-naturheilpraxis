import { offers } from "@/lib/content";
import { Section } from "../Section";

export function Offers() {
  return (
    <Section id="praxisangebot" index="01" title="Praxisangebot">
      <div className="divide-y divide-line border-y border-line">
        {offers.map((section) => (
          <div
            key={section.id}
            className="grid gap-x-8 gap-y-4 py-7 md:grid-cols-8 md:py-9"
          >
            <h3 className="text-[19px] font-semibold tracking-[-0.01em] md:col-span-3 md:text-[20px]">
              {section.title}
            </h3>
            <div className="grid gap-y-6 md:col-span-5">
              {section.groups.map((group) => (
                <div key={group.title}>
                  {group.title !== section.title ? (
                    <h4 className="text-[15px] font-medium tracking-[0.01em] text-accent">
                      {group.title}
                    </h4>
                  ) : null}
                  {group.intro ? (
                    <p className="text-[17px] text-ink-soft">{group.intro}</p>
                  ) : null}
                  <ul
                    className={`text-[17px] leading-[1.7] md:text-[18px] ${group.title !== section.title || group.intro ? "mt-1.5" : ""}`}
                  >
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
