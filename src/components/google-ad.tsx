"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function GoogleAd() {
  useEffect(() => {
    try {
      // 광고 스크립트를 초기화
      // @ts-expect-error: adsbygoogle는 글로벌 스코프에 존재하지만 타입 정의가 없음
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <>
      {/* AdSense 스크립트 */}
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6091372837465624"
        crossOrigin="anonymous"
      />
    </>
  );
}
