import Link from "next/link";

const contents = [
  {
    id: 1,
    title: "오늘의 이슈: AI가 바꾼 세상",
    summary:
      "AI 기술이 우리의 일상과 산업을 어떻게 변화시키고 있는지 알아봅니다.",
  },
  {
    id: 2,
    title: "유머: 개발자의 하루",
    summary: "개발자라면 공감할 수밖에 없는 유쾌한 에피소드 모음!",
  },
  {
    id: 3,
    title: "트렌드: 2030세대의 소비 패턴",
    summary: "2030세대가 주목하는 새로운 소비 트렌드와 그 배경을 소개합니다.",
  },
  {
    id: 4,
    title: "트렌드: 2030세대의 소비 패턴",
    summary: "2030세대가 주목하는 새로운 소비 트렌드와 그 배경을 소개합니다.",
  },
  {
    id: 5,
    title: "트렌드: 2030세대의 소비 패턴",
    summary: "2030세대가 주목하는 새로운 소비 트렌드와 그 배경을 소개합니다.",
  },
];

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full px-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">콘텐츠 목록</h1>
      <div className="w-full max-w-2xl space-y-4">
        {contents.map((content) => (
          <Link
            key={content.id}
            href="/detail"
            className="block bg-white rounded-lg shadow hover:shadow-md transition p-6 border border-gray-100 hover:border-blue-300"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-800">
              {content.title}
            </h2>
            <p className="text-gray-600">{content.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
