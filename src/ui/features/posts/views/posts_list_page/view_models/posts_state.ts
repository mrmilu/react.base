import type { Post } from "@/src/core/posts/domain/models/post";
import type { SuspendedValue } from "@front_web_mrmilu/utils";

export interface PostsState {
  posts: SuspendedValue<Array<Post>>;
  isLoading: boolean;
  hasError: boolean;
  loadPosts(): Promise<void>;
}
