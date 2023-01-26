import type { CreatePostInputModel } from "@/src/core/posts/domain/models/create_post_input_model";
import type { Post } from "@/src/core/posts/domain/models/post";

export interface IPostsRepository {
  createPost(input: CreatePostInputModel): Promise<Post | null>;

  posts(): Promise<Array<Post>>;
}
