"use client";

import { Loader } from "@/ui/loader";

export default function Loading() {
  return (
    <>
      <div className="min-h-[300px] flex items-center">
        <Loader className="w-8 h-8" />
      </div>
    </>
  );
}
