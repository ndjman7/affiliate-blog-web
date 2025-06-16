import { Header } from "@/components/header";
import { DetailPage } from "@/components/detail-page";
import { notFound } from "next/navigation";
import axios from "axios";
import { Metadata } from "next";

interface ContentBody {
  type: "text" | "image" | "youtube";
  body: string;
}

interface Content {
  id: string;
  title: string;
  thumbnail: string;
  created_date?: string;
  bodies: ContentBody[];
}

export default async function ContentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let content: Content | null = null;

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/contents/${id}`
    );
    content = res.data;
  } catch {
    return notFound();
  }

  if (!content) return notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <DetailPage content={content} />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  let content: Content | null = null;
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/contents/${id}`
    );
    content = res.data;
  } catch {
    return {
      title: "Picksight - 콘텐츠 상세",
      description: "Picksight의 콘텐츠 상세 페이지입니다.",
    };
  }

  if (!content) {
    return {
      title: "Picksight - 콘텐츠 상세",
      description: "Picksight의 콘텐츠 상세 페이지입니다.",
    };
  }

  // bodies에서 type이 text인 첫 번째 body 추출
  const textBody = content.bodies.find((b) => b.type === "text")?.body || "";

  return {
    title: content.title,
    description: textBody.slice(0, 120),
    openGraph: {
      title: content.title,
      description: textBody.slice(0, 120),
      images: content.thumbnail
        ? [
            {
              url: content.thumbnail,
              width: 1200,
              height: 630,
              alt: content.title,
            },
          ]
        : undefined,
    },
  };
}
