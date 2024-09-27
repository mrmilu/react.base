import type { User } from "@/src/users/domain/models/user";

export interface IUsersRepository {
  users(): Promise<Array<User>>;
}
