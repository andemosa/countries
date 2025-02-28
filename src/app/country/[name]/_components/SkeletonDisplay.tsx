import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const SkeletonDisplay = () => {
  return (
    <div className="space-y-8 animate-pulse">
    <Link href="/">
      <Button variant="outline" className="gap-2">
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
    </Link>

    <div className="grid gap-8 md:grid-cols-2">
      <div className="relative aspect-[3/2] w-full animate-pulse">
        <div className="w-full h-[200px] bg-gray-300 rounded" />
      </div>

      <div className="space-y-6 animate-pulse">
        <div className="h-8 w-3/4 bg-gray-300 rounded" />
        <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-6 w-1/2 bg-gray-300 rounded" />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="h-6 w-32 bg-gray-300 rounded" />
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-8 w-16 bg-gray-300 rounded-md" />
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}

export default SkeletonDisplay