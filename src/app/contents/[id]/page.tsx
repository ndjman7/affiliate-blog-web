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

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ContentDetailPage({ params }: PageProps) {
  let content: Content | null = null;
  const resolvedParams = await params;

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/contents/${resolvedParams.id}`
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
