import { Header } from "@/components/header";
import { DetailPage } from "@/components/detail-page";
import { notFound } from "next/navigation";
import axios from "axios";

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
  params: { id: string };
}) {
  let content: Content | null = null;

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/contents/${params.id}`
    );
    content = res.data;
  } catch {
    return notFound();
  }

  if (!content) return notFound();

  // DetailPage에 content를 props로 전달
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <DetailPage content={content} />
    </div>
  );
}
