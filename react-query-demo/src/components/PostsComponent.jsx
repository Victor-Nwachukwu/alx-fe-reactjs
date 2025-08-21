import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

async function createPost(newPost) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to create post");
  }
  return res.json();
}

export default function PostsComponent() {
  const queryClient = useQueryClient();

  const [mounted, setMounted] = useState(true);

  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: 1,
  });

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onMutate: async (newPost) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      const previous = queryClient.getQueryData(["posts"]);

      if (previous) {
        queryClient.setQueryData(["posts"], (old) => [
          {
            id: Date.now(),
            ...newPost,
          },
          ...old,
        ]);
      }

      return { previous };
    },
    onError: (err, newPost, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["posts"], context.previous);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  if (!mounted) {
    return (
      <div className="card">
        <p>You navigated away from the posts component.</p>
        <button onClick={() => setMounted(true)}>Go back to Posts</button>
      </div>
    );
  }

  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <button onClick={() => setMounted(false)}>
          Simulate navigate away
        </button>
        <button onClick={() => refetch()}>Refetch posts now</button>
        <span style={{ marginLeft: "auto", fontSize: 12 }}>
          {isFetching ? "Background fetching..." : ""}
        </span>
      </div>

      <section style={{ marginBottom: 12 }}>
        <h3>Add a post</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!title.trim() || !body.trim()) return;
            createPostMutation.mutate({ title, body, userId: 1 });
            setTitle("");
            setBody("");
          }}
        >
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ display: "block", width: "100%", marginBottom: 6 }}
          />
          <textarea
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              marginBottom: 6,
              minHeight: 60,
            }}
          />
          <button type="submit" disabled={createPostMutation.isLoading}>
            {createPostMutation.isLoading ? "Adding..." : "Add post"}
          </button>
        </form>
        {createPostMutation.isError && (
          <div style={{ color: "red" }}>Error creating post</div>
        )}
      </section>

      <section>
        <h3>Posts</h3>

        {isLoading && <div>Loading posts...</div>}
        {isError && <div style={{ color: "red" }}>Error: {error.message}</div>}

        {posts && posts.length > 0 && (
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            {posts.slice(0, 20).map((p) => (
              <li key={p.id} className="post">
                <strong>{p.title}</strong>
                <p style={{ margin: "6px 0" }}>{p.body}</p>
                <small>id: {p.id}</small>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}