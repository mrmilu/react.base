import type { ConstructorType } from "@/src/shared/domain/models/constructor-type";

export class CreatePostInputModel {
  title: string;
  body: string;

  constructor(params: ConstructorType<CreatePostInputModel>) {
    this.title = params.title;
    this.body = params.body;
  }
}
