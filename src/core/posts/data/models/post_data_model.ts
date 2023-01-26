import { Expose } from "class-transformer";
import { Post } from "@/src/core/posts/domain/models/post";

export class PostDataModel {
  @Expose()
  id!: string;
  @Expose()
  title!: string;
  @Expose()
  body!: string;
  @Expose()
  userId!: string;

  toDomain(): Post {
    return new Post({
      id: this.id,
      title: this.title,
      body: this.body
    });
  }
}
