import { MetadataRoute } from "next";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ujjwal Bansal — Native Android Developer",
    short_name: "Ujjwal Bansal",
    description: PERSONAL_INFO.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#050816",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      }
    ]
  };
}
