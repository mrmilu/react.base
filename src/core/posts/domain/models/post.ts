import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class Post {
  id: string;
  title: string;
  body: string;

  constructor(params: ConstructorType<Post>) {
    this.id = params.id;
    this.title = params.title;
    this.body = params.body;
  }
}
