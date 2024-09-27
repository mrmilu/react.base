import type { ConstructorType } from "@/src/shared/domain/models/constructor-type";

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
