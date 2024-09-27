import type { CreatePostInputModel } from "@/src/posts/domain/models/create-post-input-model";
import type { Post } from "@/src/posts/domain/models/post";
import type { Page } from "@/src/shared/domain/models/page";

export interface IPostsRepository {
  createPost(input: CreatePostInputModel): Promise<Post | null>;

  posts(): Promise<Page<Post>>;
}
