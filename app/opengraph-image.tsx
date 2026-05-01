import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 64,
        background: "linear-gradient(135deg, #0c1a14 0%, #0a0f0d 50%, #0b1f18 100%)",
        color: "#ecfdf5",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#6ee7b7",
          }}
        >
          Software engineer
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>{profile.name}</div>
        <div style={{ fontSize: 30, color: "#a7f3d0", maxWidth: 900, lineHeight: 1.3 }}>
          {profile.headline}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontSize: 24, color: "#9ca3af" }}>{profile.location}</div>
        <div
          style={{
            fontSize: 20,
            padding: "12px 20px",
            borderRadius: 999,
            border: "1px solid #34d399",
            color: "#6ee7b7",
          }}
        >
          o.emmanuelozioma@gmail.com
        </div>
      </div>
    </div>,
    { ...size },
  );
}
