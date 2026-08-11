import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ferbertero-coach.vercel.app/sitemap.xml", // TODO: mismo dominio que en sitemap.ts
  };
}
