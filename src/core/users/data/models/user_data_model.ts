import { Expose } from "class-transformer";
import { User } from "@/src/core/users/domain/models/user";
import type { DataModel } from "@/src/common/interfaces/data_model";

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
