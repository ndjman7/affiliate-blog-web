"use client";

import Script from "next/script";

export default function GoogleAd() {
  return (
    <Script
      id="adsbygoogle-init"
      strategy="afterInteractive"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6091372837465624"
      crossOrigin="anonymous"
    />
  );
}