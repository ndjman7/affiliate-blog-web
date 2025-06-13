import Link from "next/link";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";

interface Content {
  id: number;
  title: string;
  thumbnail: string;
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

// 기존 더미 데이터는 제거
// const contents = [...];

export function Home() {
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<Content[] | { contents: Content[] }>(`${API_BASE_URL}/contents`)
      .then((res: AxiosResponse<Content[] | { contents: Content[] }>) => {
        // 실제 응답 구조 확인
        if (Array.isArray(res.data)) {
          setContents(res.data);
        } else if (Array.isArray(res.data.contents)) {
          setContents(res.data.contents);
        } else {
          setContents([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("콘텐츠를 불러오지 못했습니다.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full px-4">
      <h1 className="text-3xl font-bold mb-8 mt-12 text-blue-800">
        콘텐츠 목록
      </h1>
      <div className="w-full max-w-2xl space-y-4">
        {loading && (
          <div className="text-gray-500 text-center py-8">로딩 중...</div>
        )}
        {error && <div className="text-red-500 text-center py-8">{error}</div>}
        {!loading &&
          !error &&
          contents.map((content) => (
            <Link
              key={content.id}
              href={`/contents/${content.id}`}
              className="group block bg-white rounded-lg shadow hover:shadow-md transition p-4 border border-gray-100 hover:border-blue-300"
            >
              <div className="flex items-center">
                <Image
                  src={content.thumbnail}
                  alt={content.title || "콘텐츠 썸네일"}
                  width={96}
                  height={96}
                  className="w-24 h-24 object-cover rounded-md mr-4 transition-transform duration-300 group-hover:scale-110"
                  priority
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
