import Link from "next/link";
import { useEffect, useState, useCallback, useRef } from "react";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import { getImageUrl } from "../utils/image";

interface Content {
  id: string;
  title: string;
  thumbnail: string;
  created_date: string;
}

interface ApiResponse {
  previous: string | null;
  next: string | null;
  results: Content[];
  is_empty: boolean;
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

// 기존 더미 데이터는 제거
// const contents = [...];

export function Home() {
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState("");
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  // 초기 데이터 로드
  useEffect(() => {
    loadContents(`${API_BASE_URL}/contents`);
  }, []);

  // 무한 스크롤을 위한 Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !loadingMore && nextUrl) {
          loadMoreContents();
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current = observer;

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, loadingMore, nextUrl]);

  const loadContents = async (url: string) => {
    try {
      setLoading(true);
      const response: AxiosResponse<ApiResponse> = await axios.get(url);

      setContents(response.data.results);
      setNextUrl(response.data.next);
      setHasMore(!response.data.is_empty && response.data.next !== null);
      setError("");
    } catch {
      setError("콘텐츠를 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const loadMoreContents = useCallback(async () => {
    if (!nextUrl || loadingMore) return;

    try {
      setLoadingMore(true);
      const response: AxiosResponse<ApiResponse> = await axios.get(nextUrl);

      setContents((prev) => [...prev, ...response.data.results]);
      setNextUrl(response.data.next);
      setHasMore(!response.data.is_empty && response.data.next !== null);
    } catch {
      setError("추가 콘텐츠를 불러오지 못했습니다.");
    } finally {
      setLoadingMore(false);
    }
  }, [nextUrl, loadingMore]);

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
              prefetch={false}
              className="group block bg-white rounded-lg shadow hover:shadow-md transition p-4 border border-gray-100 hover:border-blue-300"
            >
              <div className="flex items-center">
                <Image
                  src={getImageUrl(content.thumbnail)}
                  alt={content.title || "콘텐츠 썸네일"}
                  width={96}
                  height={96}
                  className="w-24 h-24 object-cover rounded-md mr-4 transition-transform duration-300 group-hover:scale-110"
                  priority={false}
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

        {/* 무한 스크롤 로딩 인디케이터 */}
        {hasMore && (
          <div ref={loadingRef} className="text-center py-4">
            {loadingMore && (
              <div className="text-gray-500">추가 콘텐츠 로딩 중...</div>
            )}
          </div>
        )}

        {/* 더 이상 로드할 콘텐츠가 없을 때 */}
        {/* {!hasMore && contents.length > 0 && (
          <div className="text-center py-8 text-gray-500">
            모든 콘텐츠를 불러왔습니다.
          </div>
        )} */}
      </div>
    </div>
  );
}
