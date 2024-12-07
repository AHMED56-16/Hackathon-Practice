"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        {/* Breadcrumb Section */}
        <div className="pl-5 pt-[75px] sm:pl-[135px] w-full max-w-4xl mb-10 flex items-center">
          <Link href="/" className="text-gray-500 hover:text-gray-800 text-sm">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-800 text-sm font-medium">404 Error</span>
        </div>

          {/* 404 Text */}
          <h1 className="text-[110px] font-medium text-[#000000] text-center">
            404 Not Found
          </h1>

          {/* Subtext */}
          <p className="text-[16px] text-[#000000] mt-2 text-center">
            Your visited page not found. You may go home page.
          </p>
        <div className="flex pt-10 flex-col items-center mx-auto h-[179px] w-[829px]  px-5">
          {/* Back Button */}
          <button
            onClick={() => router.push("/")}
            className="mt-6 w-[254px] h-[56px] px-6 py-3 bg-red-500 text-white text-[16px] font-semibold rounded-[4px] hover:bg-red-600 transition-all duration-300"
          >
            Back to home page
          </button>
        </div>
      </div>
    </div>
  );
}
