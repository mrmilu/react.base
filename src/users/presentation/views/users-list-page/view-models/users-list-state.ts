import type { User } from "@/src/users/domain/models/user";

export interface UsersListStateViewModel {
  users: Array<User>;
  loadUsers(): Promise<void>;
}
