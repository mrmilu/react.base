import type { DummyUser } from "@/src/core/dummy/domain/models/dummy_user";

export interface UsersListState {
  users: Array<DummyUser>;
  loadUsers(): Promise<void>;
}
