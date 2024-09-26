import { Post } from "@/src/posts/domain/models/post";
import type { DataModel } from "@/src/shared/data/models/data-model";
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
