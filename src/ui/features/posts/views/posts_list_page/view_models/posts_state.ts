import type { Post } from "@/src/core/posts/domain/models/post";

export interface PostsState {
  posts: Array<Post>;
  isLoading: boolean;
  hasError: boolean;
  loadPosts(): Promise<void>;
}
