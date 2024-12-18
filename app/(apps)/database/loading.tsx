"use client";

import { Loader } from "@/ui/loader";

export default function Loading() {
  return (
    <div className="flex h-full flex-col items-center justify-center flex-1 border-r border-border gap-6">
      <Loader className="min-h-screen m-auto w-24 h-24" />
    </div>
  );
}
