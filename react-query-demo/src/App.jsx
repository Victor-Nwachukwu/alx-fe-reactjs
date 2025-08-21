import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,

      retry: 1,

      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <h1>React + TanStack Query — Posts demo</h1>
        <p style={{ marginTop: 0, color: "#555" }}>
          Fetching posts from JSONPlaceholder. Try toggling the component to see
          caching.
        </p>

        <PostsComponent />

        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}