import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const socialImageSize = { width: 1200, height: 630 };

export function renderSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          color: "#eaf3ff",
          backgroundColor: "#04122b",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, #0d2d63 0%, rgba(4,18,43,0) 55%), radial-gradient(circle at 10% 100%, #082049 0%, rgba(4,18,43,0) 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#2de08a",
          }}
        >
          Remote-first web studio
        </div>
        <div style={{ display: "flex", fontSize: 104, fontWeight: 800, marginTop: 24 }}>
          {site.legalName}
        </div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 24, color: "#9db6dd" }}>
          Fast, modern websites that orbit your brand goals.
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 56, color: "#5cc8ff" }}>
          satelliting.space
        </div>
      </div>
    ),
    socialImageSize,
  );
}
