import type { User } from "@/src/core/users/domain/models/user";

export interface UsersListStateViewModel {
  users: Array<User>;
  loadUsers(): Promise<void>;
}
