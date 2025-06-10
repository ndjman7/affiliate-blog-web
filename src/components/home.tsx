import Link from "next/link";

const contents = [
  {
    id: 1,
    title: "오늘의 이슈: AI가 바꾼 세상",
    thumbnail: "/og-image.png",
  },
  {
    id: 2,
    title: "유머: 개발자의 하루",
    thumbnail: "/og-image.png",
  },
  {
    id: 3,
    title: "트렌드: 2030세대의 소비 패턴",
    thumbnail: "/og-image.png",
  },
  {
    id: 4,
    title: "트렌드: 2030세대의 소비 패턴",
    thumbnail: "/og-image.png",
  },
  {
    id: 5,
    title: "트렌드: 2030세대의 소비 패턴",
    thumbnail: "/og-image.png",
  },
];

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full px-4">
      <h1 className="text-3xl font-bold mb-8 mt-12 text-blue-800">
        콘텐츠 목록
      </h1>
      <div className="w-full max-w-2xl space-y-4">
        {contents.map((content) => (
          <Link
            key={content.id}
            href="/detail"
            className="group block bg-white rounded-lg shadow hover:shadow-md transition p-4 border border-gray-100 hover:border-blue-300"
          >
            <div className="flex items-center">
              <img
                src={content.thumbnail}
                alt={content.title}
                className="w-24 h-24 object-cover rounded-md mr-4 transition-transform duration-300 group-hover:scale-110"
              />
              <h2
                className="flex-1 text-xl font-semibold text-blue-800 text-left whitespace-nowrap overflow-hidden text-ellipsis"
                title={content.title}
              >
                {content.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
