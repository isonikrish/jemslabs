import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseURL = "https://jemslabs.xyz";

  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: [],
    },
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
