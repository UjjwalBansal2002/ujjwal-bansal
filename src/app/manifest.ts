import { MetadataRoute } from "next";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ujjwal Bansal — Senior Android Developer",
    short_name: "Ujjwal Bansal",
    description: PERSONAL_INFO.bio,
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#050816",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
