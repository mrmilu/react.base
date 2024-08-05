import type { DataModel } from "@/src/common/interfaces/data-model";
import { Post } from "@/src/core/posts/domain/models/post";
import { Expose } from "class-transformer";

export class PostDataModel implements DataModel<Post> {
  @Expose()
  id!: string;
  @Expose()
  title!: string;
  @Expose()
  body!: string;
  @Expose()
  userId!: string;

  toDomain() {
    return new Post({
      id: this.id,
      title: this.title,
      body: this.body
    });
  }
}
