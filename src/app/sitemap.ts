import type { MetadataRoute } from "next";

const URL_BASE = "https://ferbertero-coach.vercel.app"; // TODO: reemplazar por el dominio definitivo cuando el cliente lo tenga

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: URL_BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${URL_BASE}/terminos-servicio`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${URL_BASE}/politica-privacidad`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
