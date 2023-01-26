export class CreatePostInputModel {
  title: string;
  body: string;

  constructor(params: { title: string; body: string }) {
    this.title = params.title;
    this.body = params.body;
  }
}
