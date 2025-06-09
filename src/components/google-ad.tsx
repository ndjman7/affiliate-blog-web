import Script from 'next/script';
import { useEffect } from 'react';

export default function GoogleAd() {
  useEffect(() => {
    try {
      // 광고 스크립트를 초기화
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error', e);
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