import { ImageResponse } from "next/og";

export const alt = "MaskWright - the private anti-detect browser";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(900px 500px at 15% 0%, #1a1310, #0d0e11 60%)",
          padding: "72px",
          color: "#f3f3f4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <svg width="52" height="52" viewBox="0 0 100 100">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#ff6a3d"
              d="M22 26C22 19 33 15 50 15C67 15 78 19 78 26C78 44 72 64 50 88C28 64 22 44 22 26ZM31 42L45 46L44 53L30 48L31 42ZM69 42L55 46L56 53L70 48L69 42Z"
            />
          </svg>
          <div style={{ fontSize: 30, fontWeight: 600 }}>MaskWright</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 62, lineHeight: 1.05, fontWeight: 600, maxWidth: 940 }}>
            A new identity for every account.
          </div>
          <div style={{ fontSize: 27, color: "#9ca1a9", maxWidth: 820 }}>
            The private anti-detect browser. Nothing synced, nothing uploaded, 100% free.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
