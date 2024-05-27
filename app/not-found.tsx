import Link from "next/link";
import { FaRegFaceFrown } from "react-icons/fa6";

export default function NotFoundRoot() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="space-y-4 text-center">
        <FaRegFaceFrown className="text-custom-emerald text-5xl mx-auto" />
        <h1 className="text-8xl font-bold text-gray-100">404</h1>
        <p className="text-lg text-gray-300">Page Not Found</p>
        <Link
          href="/"
          className="inline-flex h-10 capitalize items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-gray-50 text-gray-900 hover:bg-gray-50/90 focus-visible:ring-gray-300"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
