import { useLoadPosts, usePostsStore } from "@/src/ui/pages/posts_jotai/state/posts.store";
import { useEffectStrictMode } from "@front_web_mrmilu/hooks";

export function usePostsController() {
  const loadPosts = useLoadPosts();
  useEffectStrictMode(() => void loadPosts());

  const postsStore = usePostsStore();
  return { ...postsStore, loadPosts };
}
