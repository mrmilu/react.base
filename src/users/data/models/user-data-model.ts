import type { DataModel } from "@/src/shared/data/models/data-model";
import { User } from "@/src/users/domain/models/user";
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
