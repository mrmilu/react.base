import type { User } from "@/src/core/users/domain/models/user";

export interface IUsersRepository {
  users(): Promise<Array<User>>;
}
