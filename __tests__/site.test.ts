import { site, SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

const digits = (value: string) => value.replace(/\D/g, "");

describe("site config", () => {
  it("keeps displayed numbers and tel: links in sync", () => {
    for (const phone of [site.phone, site.mobile]) {
      const national = `0${digits(phone.href).slice(2)}`;
      expect(digits(phone.display)).toBe(national);
      expect(digits(phone.e164)).toBe(digits(phone.href));
    }
  });

  it("uses one canonical base URL", () => {
    expect(SITE_URL).toBe("https://naupert.vercel.app");
    expect(site.url).toBe(SITE_URL);
  });

  it("builds per-page canonical and Open Graph metadata", () => {
    const meta = pageMetadata({
      title: "Impressum",
      description: "x",
      path: "/impressum",
    });
    expect(meta.alternates?.canonical).toBe("/impressum");
    expect(meta.openGraph?.title).toBe("Impressum | Naturheilpraxis Naupert");
  });
});
