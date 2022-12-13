import { usePostsStore } from "@/src/ui/pages/posts_zustand/state/posts.store";
import { useEffect, useRef } from "react";
import { debounce } from "lodash";

export function usePostsController() {
  const debounced = useRef(debounce(usePostsStore.getState().loadPosts));
  useEffect(() => {
    debounced.current();
  }, []);

  const hasError = usePostsStore((state) => state.hasError);
  const isLoading = usePostsStore((state) => state.isLoading);
  const posts = usePostsStore((state) => state.posts);
  return { hasError, isLoading, posts, loadPosts: debounced.current };
}
