"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isChecking, setIsChecking] = useState(true);
  const isProduction = process.env.NODE_ENV === "production";

  // 광고 로드 완료 처리
  const handleAdsLoaded = () => {
    console.log("Google AdSense script has loaded");
    // 약간의 지연 후 콘텐츠 표시
    setTimeout(() => {
      setIsChecking(false);
    }, 500);
  };

  // 시간 초과 처리 또는 개발 환경에서 즉시 콘텐츠 표시
  useEffect(() => {
    // 개발 환경에서는 즉시 콘텐츠 표시
    if (!isProduction) {
      setIsChecking(false);
      return;
    }

    // 프로덕션 환경에서는 최대 3초 후에 콘텐츠 표시
    const timer = setTimeout(() => {
      if (isChecking) {
        console.log("Ads loading timeout, showing content anyway");
        setIsChecking(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isChecking, isProduction]);

  return (
    <>
      {/* 구글 애드센스 스크립트 (프로덕션 환경에서만 로드) */}
      {isProduction && (
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7086279730997994"
          crossOrigin="anonymous"
          strategy="afterInteractive"
          onLoad={handleAdsLoaded}
        />
      )}

      {/* 로딩 중이면 로딩 표시, 아니면 콘텐츠 표시 */}
      {isChecking ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-lg">사이트를 불러오는 중입니다...</p>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
