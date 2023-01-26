import { Expose } from "class-transformer";
import { DummyUser } from "@/src/core/dummy/domain/models/dummy_user";

export class DummyUserDataModel {
  @Expose()
  id!: string;
  @Expose({ name: "firstName" })
  name!: string;
  @Expose()
  email!: string;

  toDomain(): DummyUser {
    return new DummyUser({
      id: this.id,
      name: this.name,
      email: this.email
    });
  }
}
