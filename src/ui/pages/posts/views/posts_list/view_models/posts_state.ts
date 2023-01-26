import type { DummyPost } from "@/src/core/dummy/domain/models/dummy_post";

export interface PostsState {
  posts: DummyPost[];
  isLoading: boolean;
  hasError: boolean;
  loadPosts(): Promise<void>;
}
