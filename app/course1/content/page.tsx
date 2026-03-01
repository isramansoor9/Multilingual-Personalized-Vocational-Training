"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useAuth } from "@/contexts/AuthContext";

type ContentState = {
  title: string | null;
  content: string | null;
  loading: boolean;
  error: string | null;
};

function ContentView() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isLoggedIn, isLoading: authLoading } = useAuth();
  const titleParam = searchParams.get("title");

  const [state, setState] = useState<ContentState>({
    title: null,
    content: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (authLoading) return;
    if (!isLoggedIn) {
      const returnTo = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
      router.replace(`/login?returnTo=${encodeURIComponent(returnTo)}`);
      return;
    }
  }, [authLoading, isLoggedIn, pathname, router, searchParams]);

  useEffect(() => {
    if (!titleParam || !isLoggedIn) {
      if (!isLoggedIn && !authLoading) return;
      setState({ title: null, content: null, loading: false, error: null });
      return;
    }

    setState((s) => ({ ...s, loading: true, error: null }));

    fetch(`/api/course1/content?title=${encodeURIComponent(titleParam)}`)
      .then((res) => {
        if (!res.ok) return res.json().then((d) => Promise.reject(d));
        return res.json();
      })
      .then((data: { title: string; content: string }) => {
        setState({
          title: data.title,
          content: data.content,
          loading: false,
          error: null,
        });
      })
      .catch(() => {
        setState({
          title: decodeURIComponent(titleParam),
          content: null,
          loading: false,
          error: "Content not found",
        });
      });
  }, [titleParam, isLoggedIn, authLoading]);

  if (!authLoading && !isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Redirecting to login...</p>
      </div>
    );
  }

  if (!titleParam) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-gray-500 mb-4">No subtopic selected.</p>
          <button
            onClick={() => router.push("/course1/learn")}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Back to Curriculum
          </button>
        </div>
      </div>
    );
  }

  if (state.loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading content...</p>
      </div>
    );
  }

  if (state.error || !state.content) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <p className="text-gray-700 font-medium mb-2">Content not found</p>
          <p className="text-gray-500 text-sm mb-4">
            No content found for &quot;{state.title || titleParam}&quot;.
          </p>
          <button
            onClick={() => router.push("/course1/learn")}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Back to Curriculum
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <p className="text-sm font-bold text-gray-900">
              Course 1 · Content
            </p>
          </div>
          <button
            onClick={() => router.push("/course1/learn")}
            className="px-4 py-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back to Curriculum
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <article className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
            {state.title}
          </h1>
          <div className="content-body text-gray-700 leading-relaxed [&_h1]:text-2xl [&_h1]:font-bold [&_h2]:text-xl [&_h2]:font-bold [&_h3]:text-lg [&_h3]:font-semibold [&_h1,h2,h3]:mt-6 [&_h1,h2,h3]:mb-3 [&_p]:my-3 [&_ul]:my-4 [&_li]:ml-6 [&_li]:my-1 [&_strong]:font-semibold [&_strong]:text-gray-900">
            <ReactMarkdown>{state.content}</ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
}

export default function Course1ContentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      }
    >
      <ContentView />
    </Suspense>
  );
}
