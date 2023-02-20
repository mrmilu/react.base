import type { CreatePostInputModel } from "@/src/core/posts/domain/models/create_post_input_model";
import type { Post } from "@/src/core/posts/domain/models/post";
import type { Page } from "@/src/core/app/domain/models/page";

export interface IPostsRepository {
  createPost(input: CreatePostInputModel): Promise<Post | null>;

  posts(): Promise<Page<Post>>;
}
