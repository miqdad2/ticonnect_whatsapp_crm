import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius: 6,
        }}
      >
        <svg width="27" height="23" viewBox="0 0 96 80" fill="#1f4f7a">
          <path d="M10 10h35l-8 11H18z" />
          <path d="M51 10h35l-8 11H58L40 40v25L29 52V35z" />
          <path d="M22 29h27l-8 11H30z" />
          <path d="M57 29h29l-8 11H64l-7 7v18L48 76l-9-11V43z" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
