interface SidebarAdProps {
  position: "left" | "right";
}

export function SidebarAd({ position }: SidebarAdProps) {
  return (
    <div className="sticky top-20">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="text-xs text-gray-400 mb-2">광고</div>
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white text-center">
          <div className="text-sm font-semibold mb-2">
            {position === "left"
              ? "왼쪽 사이드바 광고"
              : "오른쪽 사이드바 광고"}
          </div>
          <div className="text-xs opacity-90">
            여기에 광고 콘텐츠가 들어갑니다
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="text-xs text-gray-400 mb-2">추천</div>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">
                인기 콘텐츠 1
              </div>
              <div className="text-xs text-gray-500">조회수 1.2만</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">
                인기 콘텐츠 2
              </div>
              <div className="text-xs text-gray-500">조회수 8.5천</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="text-xs text-gray-400 mb-2">광고</div>
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-4 text-white text-center">
          <div className="text-sm font-semibold mb-1">특별 할인</div>
          <div className="text-xs">지금 바로 확인하세요!</div>
        </div>
      </div>
    </div>
  );
}
