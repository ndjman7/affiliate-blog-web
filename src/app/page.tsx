"use client";

import { Header } from "@/components/header";
import { Home } from "@/components/home";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Home />
    </div>
  );
}
