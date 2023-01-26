import { Expose } from "class-transformer";
import { User } from "@/src/core/users/domain/models/user";

export class DummyUserDataModel {
  @Expose()
  id!: string;
  @Expose()
  name!: string;
  @Expose()
  email!: string;

  toDomain(): User {
    return new User({
      id: this.id,
      name: this.name,
      email: this.email
    });
  }
}
