import type { User } from "@/src/core/users/domain/models/user";

export interface UsersListState {
  users: Array<User>;
  loadUsers(): Promise<void>;
}
