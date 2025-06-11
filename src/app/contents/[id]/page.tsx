"use client";
import { Header } from "@/components/header";
import { DetailPage } from "@/components/detail-page";

export default function Detail() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <DetailPage />
    </div>
  );
}
