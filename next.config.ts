import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
      domains: [
          "localhost",
          "picksight.kr",
          "cdn.picksight.kr",
      ],
    },
};

export default nextConfig;
