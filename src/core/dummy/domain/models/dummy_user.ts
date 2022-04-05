import { Expose } from "class-transformer";

export class DummyUser {
  @Expose()
  id!: string;
  @Expose()
  name!: string;
  @Expose()
  email!: string;
}
