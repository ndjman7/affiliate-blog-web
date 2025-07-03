import Image from "next/image";
import { getImageUrl } from "../utils/image";

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

export function DetailPage({ content }: { content: Content }) {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-8">
      {/* Left Sidebar Ad */}
      {/* <div className="hidden xl:block fixed left-4 top-1/2 -translate-y-1/2 w-48"> */}
      {/* <SidebarAd position="left" /> */}
      {/* </div> */}

      {/* Right Sidebar Ad */}
      {/* <div className="hidden xl:block fixed right-4 top-1/2 -translate-y-1/2 w-48"> */}
      {/* <SidebarAd position="right" /> */}
      {/* </div> */}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        <article className="bg-white rounded-lg shadow-sm p-8">
          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {content.title}
            </h1>
          </header>

          {/* Article Content */}

          <div className="prose prose-lg max-w-none">
            {content.bodies.map((item, idx) => {
              if (item.type === "text") {
                const html = item.body.replace(/\n/g, "<br />");
                return (
                  <p
                    key={idx}
                    className="text-gray-700 leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                );
              }
              if (item.type === "image") {
                return (
                  <div
                    key={idx}
                    className="my-6 relative w-full min-h-[200px]"
                    style={{ minHeight: 200 }}
                  >
                    <Image
                      src={getImageUrl(item.body)}
                      alt={content.title}
                      fill
                      style={{ objectFit: "contain" }}
                      className="rounded-lg"
                    />
                  </div>
                );
              }
              if (item.type === "youtube") {
                return (
                  <div
                    key={idx}
                    className="my-6 w-full aspect-video min-h-[240px]"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${item.body}`}
                      allowFullScreen
                      className="w-full h-full block"
                    />
                  </div>
                );
              }
              return null;
            })}

            {/* Second Inline Ad */}
            {/* <InlineAd type="native" className="my-8" /> */}
          </div>

          {/* First Inline Ad */}
          {/* <InlineAd type="banner" className="mb-8" /> */}
          {/* Third Inline Ad */}
          {/* <InlineAd type="card" className="my-8" /> */}
          {/* Final Inline Ad */}
          {/* <InlineAd type="banner" className="mt-8" /> */}
        </article>
      </main>
    </div>
  );
}
