import { fireEvent, render, screen } from "@testing-library/react";
import { MobileMenu } from "@/components/MobileMenu";

describe("MobileMenu", () => {
  it("opens, closes via Escape, and exposes state to assistive tech", () => {
    render(<MobileMenu />);
    const toggle = screen.getByRole("button", { name: "Menü öffnen" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(toggle);
    expect(screen.getByRole("button", { name: "Menü schließen" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByRole("link", { name: "Praxisangebot" })).toBeVisible();

    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.getByRole("button", { name: "Menü öffnen" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});
