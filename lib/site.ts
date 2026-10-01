import { z } from "zod";

export const SITE_URL = "https://naupert.vercel.app";

const phoneSchema = z.object({
  display: z.string().min(1),
  href: z.string().regex(/^tel:\+49\d{6,}$/),
  e164: z.string().regex(/^\+49 \d+ \d+$/),
});

const siteSchema = z.object({
  url: z.url(),
  name: z.string().min(1),
  owner: z.string().min(1),
  profession: z.string().min(1),
  district: z.string().min(1),
  founded: z.string().regex(/^\d{4}$/),
  phone: phoneSchema,
  mobile: phoneSchema,
  email: z.email(),
  address: z.object({
    street: z.string().min(1),
    floor: z.string().min(1),
    postalCode: z.string().regex(/^\d{5}$/),
    city: z.string().min(1),
    country: z.literal("DE"),
  }),
  links: z.object({
    hvv: z.url(),
    route: z.url(),
  }),
});

export const site = siteSchema.parse({
  url: SITE_URL,
  name: "Naturheilpraxis Naupert",
  owner: "Reinhard Naupert",
  profession: "Heilpraktiker",
  district: "Alsterdorf",
  founded: "1988",
  phone: {
    display: "040 278 00 176",
    href: "tel:+494027800176",
    e164: "+49 40 27800176",
  },
  mobile: {
    display: "0179 390 43 01",
    href: "tel:+491793904301",
    e164: "+49 179 3904301",
  },
  email: "praxis@naupert.de",
  address: {
    street: "Bilser Straße 9",
    floor: "1. Etage",
    postalCode: "22297",
    city: "Hamburg",
    country: "DE",
  },
  links: {
    hvv: "https://www.hvv.de/linking-service/show/3a7dc39e7aee414c91d44eaa0b6acc66",
    route:
      "https://www.google.com/maps/dir/?api=1&destination=Bilser+Stra%C3%9Fe+9%2C+22297+Hamburg",
  },
});

export type Site = typeof site;

export const offerSummary =
  "Naturheilverfahren, Diagnostik und Beratung – mit Schwerpunkt auf Augen- und Hals-Nasen-Ohren-Erkrankungen.";

export const homeDescription = `${site.owner}, ${site.profession} in Hamburg-${site.district} seit ${site.founded}: ${offerSummary.replace(" – mit", ", mit")} Termine nach Vereinbarung unter ${site.phone.display}, Hausbesuche möglich.`;
