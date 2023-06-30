import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class CreatePostInputModel {
  title: string;
  body: string;

  constructor(params: ConstructorType<CreatePostInputModel>) {
    this.title = params.title;
    this.body = params.body;
  }
}
