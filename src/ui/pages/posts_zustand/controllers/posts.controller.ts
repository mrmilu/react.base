import { usePostsStore } from "@/src/ui/pages/posts_zustand/state/posts.store";
import { useEffect } from "react";

export function usePostsController() {
  const loadPosts = usePostsStore((state) => state.loadPosts);
  useEffect(() => {
    void loadPosts();
  }, [loadPosts]);

  const hasError = usePostsStore((state) => state.hasError);
  const isLoading = usePostsStore((state) => state.isLoading);
  const posts = usePostsStore((state) => state.posts);
  return { hasError, isLoading, posts, loadPosts };
}
