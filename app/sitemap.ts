import type { MetadataRoute } from "next";

const base = "https://epping-dental.localsiteslab.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/treatments",
    "/treatments/nhs-and-private",
    "/treatments/invisalign",
    "/treatments/implants",
    "/treatments/emergency",
    "/treatments/specialist",
    "/treatments/cosmetic",
    "/new-patients",
    "/about",
    "/visit",
    "/testimonials",
    "/contact",
    "/privacy",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-09-16"),
  }));
}
