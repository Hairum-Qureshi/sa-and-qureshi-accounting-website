import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Error 404
        </p>

        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Page Not Found
        </h1>

        <p className="mt-4 text-slate-600">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
