import { Expose } from "class-transformer";

export class DummyPost {
  @Expose()
  id!: string;
  @Expose()
  title!: string;
  @Expose()
  body!: string;
}
