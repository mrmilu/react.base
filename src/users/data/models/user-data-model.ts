import type { DataModel } from "@/src/core/shared/domain/interfaces/data-model";
import { User } from "@/src/core/users/domain/models/user";
import { Expose } from "class-transformer";

export class UserDataModel implements DataModel<User> {
  @Expose()
  id!: string;
  @Expose()
  name!: string;
  @Expose()
  email!: string;

  toDomain() {
    return new User({
      id: this.id,
      name: this.name,
      email: this.email
    });
  }
}
