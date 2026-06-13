import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07111F",
          borderRadius: 40,
        }}
      >
        <svg width="128" height="128" viewBox="0 0 256 256" fill="none">
          <circle cx="128" cy="128" r="92" stroke="#F4E7D1" strokeWidth="6" />
          <circle cx="128" cy="128" r="72" stroke="#F4E7D1" strokeWidth="4" opacity="0.95" />
          <circle cx="128" cy="128" r="24" stroke="#F4E7D1" strokeWidth="4" />
          <circle cx="128" cy="128" r="7" fill="#F4E7D1" />
          <path
            d="M128 61L136 108L183 95L148 128L183 161L136 148L128 195L120 148L73 161L108 128L73 95L120 108L128 61Z"
            stroke="#F4E7D1"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          <path
            d="M128 36V61M128 195V220M36 128H61M195 128H220M57 57L73 73M183 183L199 199M57 199L73 183M183 73L199 57"
            stroke="#F4E7D1"
            strokeWidth="4"
            opacity="0.9"
          />
        </svg>
      </div>
    ),
    size
  );
}
