import { Header } from "@/components/header";
import { SidebarAd } from "@/components/sidebar-ad";
import { InlineAd } from "@/components/inline-ad";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="relative max-w-7xl mx-auto px-4 py-8">
        {/* Left Sidebar Ad */}
        <div className="hidden xl:block fixed left-4 top-1/2 -translate-y-1/2 w-48">
          <SidebarAd position="left" />
        </div>

        {/* Right Sidebar Ad */}
        <div className="hidden xl:block fixed right-4 top-1/2 -translate-y-1/2 w-48">
          <SidebarAd position="right" />
        </div>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg shadow-sm p-8">
            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                최신 MZ들 사이에서 유행한다는 소주.mp4
              </h1>
              <div className="text-sm text-gray-500 mb-6">2025-06-07</div>
              <p className="text-gray-700 text-lg leading-relaxed">
                최신 MZ들 사이에서 유행한다는 소주.mp4
              </p>
            </header>

            {/* Video Content */}
            <div className="mb-8">
              <video
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                controls
                preload="metadata"
                poster="/placeholder.svg?height=400&width=600"
              >
                <source src="/sample-video.mp4" type="video/mp4" />
                <track
                  src="/captions.vtt"
                  kind="subtitles"
                  srcLang="ko"
                  label="한국어"
                />
                브라우저가 비디오를 지원하지 않습니다.
              </video>
            </div>

            {/* First Inline Ad */}
            <InlineAd type="banner" className="mb-8" />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                최근 MZ세대 사이에서 새로운 소주 트렌드가 화제가 되고 있습니다.
                전통적인 소주 마시는 방법과는 다른 새로운 스타일이 SNS를 통해
                빠르게 확산되고 있어 주목받고 있습니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                이 트렌드는 특히 20대 초반부터 30대 초반까지의 젊은 층에서
                인기를 끌고 있으며, 기존의 소주 문화와는 확연히 다른 모습을
                보여주고 있습니다.
              </p>

              {/* Second Inline Ad */}
              <InlineAd type="native" className="my-8" />

              <p className="text-gray-700 leading-relaxed mb-6">
                전문가들은 이러한 변화가 단순한 유행을 넘어서 한국의 음주 문화
                자체에 변화를 가져올 수 있다고 분석하고 있습니다. 특히 개인의
                취향과 개성을 중시하는 MZ세대의 특성이 반영된 결과라는 의견이
                지배적입니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                이와 관련해 주류업계에서도 새로운 마케팅 전략을 수립하고 있으며,
                젊은 소비자층의 니즈에 맞춘 제품 개발에도 박차를 가하고 있는
                상황입니다.
              </p>

              {/* Third Inline Ad */}
              <InlineAd type="card" className="my-8" />

              <p className="text-gray-700 leading-relaxed mb-6">
                하지만 일부에서는 과도한 음주 문화 확산에 대한 우려의 목소리도
                나오고 있어, 건전한 음주 문화 정착을 위한 사회적 관심과 노력이
                필요하다는 지적도 제기되고 있습니다.
              </p>

              <p className="text-gray-700 leading-relaxed">
                앞으로 이러한 트렌드가 어떻게 발전해 나갈지, 그리고 우리 사회의
                음주 문화에 어떤 영향을 미칠지 지켜볼 필요가 있겠습니다.
              </p>
            </div>

            {/* Final Inline Ad */}
            <InlineAd type="banner" className="mt-8" />
          </article>
        </main>
      </div>
    </div>
  );
}
