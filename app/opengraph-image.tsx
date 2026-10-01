import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} – ${site.owner}, ${site.profession} in Hamburg-${site.district}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f5f1",
          color: "#16191b",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#1f5c55",
          }}
        >
          {`Hamburg-${site.district} · seit ${site.founded}`}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            {site.name}
          </div>
          <div style={{ marginTop: 24, fontSize: 40, color: "#3d4246" }}>
            {`${site.owner}, ${site.profession}`}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "4px solid #16191b",
            paddingTop: 28,
            fontSize: 34,
          }}
        >
          <div style={{ display: "flex" }}>Termine nach Vereinbarung</div>
          <div style={{ display: "flex", fontWeight: 700, color: "#1f5c55" }}>
            {site.phone.display}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
