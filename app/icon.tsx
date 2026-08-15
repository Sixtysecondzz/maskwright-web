import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0d0e11",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 100 100">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#ff6a3d"
            d="M22 26C22 19 33 15 50 15C67 15 78 19 78 26C78 44 72 64 50 88C28 64 22 44 22 26ZM31 42L45 46L44 53L30 48L31 42ZM69 42L55 46L56 53L70 48L69 42Z"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
