import { usePostsStore } from "@/src/ui/pages/posts_zustand/state/posts.store";
import { useEffectStrictMode } from "@front_web_mrmilu/hooks";

export function usePostsController() {
  const loadPosts = usePostsStore((state) => state.loadPosts);
  useEffectStrictMode(() => {
    void loadPosts();
  });

  const hasError = usePostsStore((state) => state.hasError);
  const isLoading = usePostsStore((state) => state.isLoading);
  const posts = usePostsStore((state) => state.posts);
  return { hasError, isLoading, posts, loadPosts };
}
