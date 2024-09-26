import type { Post } from "@/src/posts/domain/models/post";
import type { SuspendedValue } from "@front_web_mrmilu/utils";

export interface PostsState {
  posts: SuspendedValue<Array<Post>>;
  hasError: boolean;
  loadPosts(): Promise<void>;
}
