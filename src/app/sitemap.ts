import type { MetadataRoute } from "next";

import axios, { AxiosResponse } from "axios";

interface ContentSchema {
  datetime: string;
  url: string;
}

interface SitemapResponseSchema {
  results: ContentSchema[];
}

const getSitemapContent = (): Promise<AxiosResponse<SitemapResponseSchema>> => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/sitemap/content`);
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const siteUrl = process.env.SITE_URL || "https://picksight.kr";
  const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";
  if (!isProduction) {
    return [];
  }
  // 기본적으로 포함할 정적 페이지들을 정의합니다.
  // const staticUrls = [
  //   {
  //     url: `${siteUrl}/login`,
  //     lastModified: new Date(),
  //   },
  // ];

  try {
    const { data } = await getSitemapContent();

    const dynamicUrls = data.results.map((content) => ({
      url: content.url,
      lastModified: new Date(content.datetime),
    }));

    // 정적 및 동적 URL을 합쳐서 반환합니다.
    return dynamicUrls;
  } catch (error) {
    console.error("사이트맵 데이터를 가져오는 중 오류 발생:", error);
    return []; // 오류 발생 시 빈 배열 반환
  }
}
