import Script from "next/script";

export default function GoogleAdsenseScript() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7086279730997994"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
