import { cn } from "@/lib/utils";

interface InlineAdProps {
  type: "banner" | "native" | "card";
  className?: string;
}

export function InlineAd({ type, className }: InlineAdProps) {
  if (type === "banner") {
    return (
      <div className={cn("w-full", className)}>
        <div className="text-xs text-gray-400 mb-2 text-center">광고</div>
        <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg p-8 text-white text-center">
          <div className="text-lg font-bold mb-2">배너 광고</div>
          <div className="text-sm opacity-90">
            여기에 배너 광고 콘텐츠가 들어갑니다
          </div>
        </div>
      </div>
    );
  }

  if (type === "native") {
    return (
      <div
        className={cn(
          "bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500",
          className
        )}
      >
        <div className="text-xs text-gray-400 mb-3">추천 콘텐츠</div>
        <div className="flex items-start space-x-4">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex-shrink-0"></div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              관련 추천 상품
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              이 콘텐츠와 관련된 추천 상품을 확인해보세요. 특별 할인 혜택도 함께
              제공됩니다.
            </p>
            <button className="mt-3 text-blue-600 text-sm font-medium hover:text-blue-800">
              자세히 보기 →
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (type === "card") {
    return (
      <div
        className={cn(
          "bg-white rounded-lg shadow-md overflow-hidden",
          className
        )}
      >
        <div className="text-xs text-gray-400 p-4 pb-0">광고</div>
        <div className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                카드형 광고
              </h3>
              <p className="text-gray-600 mb-4">
                자연스럽게 본문에 삽입되는 카드형 광고입니다.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                클릭하기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
