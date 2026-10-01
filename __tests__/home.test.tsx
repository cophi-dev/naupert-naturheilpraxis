import { render, screen, within } from "@testing-library/react";
import HomePage from "@/app/page";
import { Hero } from "@/components/home/Hero";
import { site } from "@/lib/site";

describe("Hero (first screen)", () => {
  it("shows practice, practitioner, phone, appointment note and address", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: site.name }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(site.owner).length).toBeGreaterThan(0);
    expect(screen.getByText(site.profession)).toBeInTheDocument();
    expect(screen.getByText("Termine nach Vereinbarung")).toBeInTheDocument();
    expect(screen.getByText("Hausbesuche möglich")).toBeInTheDocument();
    expect(screen.getByText(/Bilser Straße 9/)).toBeInTheDocument();
    expect(screen.getByText(/22297 Hamburg-Alsterdorf/)).toBeInTheDocument();

    const callLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href") === "tel:+494027800176");
    expect(callLinks.length).toBeGreaterThanOrEqual(2);
    expect(screen.getByRole("link", { name: site.phone.display })).toBeInTheDocument();
  });
});

describe("Home page", () => {
  const banned = [
    /buchen/i,
    /online-termin/i,
    /kontaktformular/i,
    /sie sind hier/i,
    /startseite/i,
    /\bKI\b/,
    /künstliche intelligenz/i,
    /assistent/i,
    /\bdemo\b/i,
    /agentur/i,
    /cookie-banner/i,
  ];

  it("has exactly one h1", () => {
    const { container } = render(<HomePage />);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
  });

  it("contains no booking, agency or assistant wording", () => {
    const { container } = render(<HomePage />);
    const text = container.textContent ?? "";
    for (const pattern of banned) {
      expect(text).not.toMatch(pattern);
    }
  });

  it("gives every image a meaningful alt text", () => {
    const { container } = render(<HomePage />);
    const images = Array.from(container.querySelectorAll("img"));
    expect(images.length).toBeGreaterThan(0);
    for (const img of images) {
      expect(img.getAttribute("alt")?.trim().length ?? 0).toBeGreaterThan(5);
    }
  });

  it("lists the full Praxisangebot from the source site", () => {
    render(<HomePage />);
    const section = screen.getByRole("region", { name: "Praxisangebot" });
    for (const item of [
      "Altersbedingte Makula-Degeneration (AMD)",
      "Heuschnupfen",
      "Irisdiagnose",
      "Acunova (Augenakupunktur nach Boel)",
      "Ohr-Akupunktur nach Nogier",
      "Flugangst",
    ]) {
      expect(within(section).getByText(item)).toBeInTheDocument();
    }
  });

  it("embeds MedicalBusiness JSON-LD with the real NAP", () => {
    const { container } = render(<HomePage />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script?.innerHTML ?? "{}");
    expect(data["@type"]).toBe("MedicalBusiness");
    expect(data.name).toBe("Naturheilpraxis Naupert");
    expect(data.telephone).toBe("+49 40 27800176");
    expect(data.address.streetAddress).toBe("Bilser Straße 9");
    expect(data.address.postalCode).toBe("22297");
  });
});
