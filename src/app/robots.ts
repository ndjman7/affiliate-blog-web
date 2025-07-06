import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.SITE_URL || "https://picksight.kr";
  const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";
  return {
    rules: {
      userAgent: "*",
      allow: isProduction ? "/" : [],
      disallow: isProduction ? [] : "/",
    },
    sitemap: isProduction ? [`${siteUrl}/sitemap.xml`] : [], // 단일 sitemap으로 변경
  };
}
