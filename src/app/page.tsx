import { Header } from "@/components/header";
import { SidebarAd } from "@/components/sidebar-ad";
import { InlineAd } from "@/components/inline-ad";
import GoogleAd from '@/components/google-ad';

export default function HomePage() {
  return (
    <>
      <GoogleAd />

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
                <h1 className="text-3xl font-bold text-gray-900 mb-4">제목</h1>
                <div className="text-sm text-gray-500 mb-6">2025-06-07</div>
                <p className="text-gray-700 text-lg leading-relaxed">제목</p>
              </header>

              {/* First Inline Ad */}
              <InlineAd type="banner" className="mb-8" />

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  다양한 커피 취향을 존중하는 분위기가 확산되면서, 카페에서는
                  고객 맞춤형 음료 주문이 일상이 되고 있습니다. 취향에 따라
                  선택할 수 있는 옵션이 많아지면서 커피 문화도 한층
                  다양해졌습니다.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  요즘 2030세대 사이에서는 중고 거래 앱을 통한 합리적인 소비가
                  하나의 라이프스타일로 자리잡고 있습니다. 단순한 소비를 넘어
                  환경과 경제를 동시에 고려하는 모습이 인상적입니다.
                </p>
                {/* Second Inline Ad */}
                <InlineAd type="native" className="my-8" />

                <p className="text-gray-700 leading-relaxed mb-6">
                  다양한 커피 취향을 존중하는 분위기가 확산되면서, 카페에서는
                  고객 맞춤형 음료 주문이 일상이 되고 있습니다. 취향에 따라
                  선택할 수 있는 옵션이 많아지면서 커피 문화도 한층
                  다양해졌습니다.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  요즘 2030세대 사이에서는 중고 거래 앱을 통한 합리적인 소비가
                  하나의 라이프스타일로 자리잡고 있습니다. 단순한 소비를 넘어
                  환경과 경제를 동시에 고려하는 모습이 인상적입니다.
                </p>

                {/* Third Inline Ad */}
                <InlineAd type="card" className="my-8" />

                <p className="text-gray-700 leading-relaxed mb-6">
                  다양한 커피 취향을 존중하는 분위기가 확산되면서, 카페에서는
                  고객 맞춤형 음료 주문이 일상이 되고 있습니다. 취향에 따라
                  선택할 수 있는 옵션이 많아지면서 커피 문화도 한층
                  다양해졌습니다.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  요즘 2030세대 사이에서는 중고 거래 앱을 통한 합리적인 소비가
                  하나의 라이프스타일로 자리잡고 있습니다. 단순한 소비를 넘어
                  환경과 경제를 동시에 고려하는 모습이 인상적입니다.
                </p>
              </div>

              {/* Final Inline Ad */}
              <InlineAd type="banner" className="mt-8" />
            </article>
          </main>
        </div>
      </div>
    </>
  );
}
