import type { Page } from "@/src/core/app/domain/models/page";
import type { CreatePostInputModel } from "@/src/core/posts/domain/models/create-post-input-model";
import type { Post } from "@/src/core/posts/domain/models/post";

export interface IPostsRepository {
  createPost(input: CreatePostInputModel): Promise<Post | null>;

  posts(): Promise<Page<Post>>;
}
