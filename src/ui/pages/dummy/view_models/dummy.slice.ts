import type { DummyUser } from "@/src/core/dummy/domain/models/dummy_user";
import type { DummyPost } from "@/src/core/dummy/domain/models/dummy_post";

export interface DummySliceState {
  users: Array<DummyUser>;
  posts: Array<DummyPost>;
  loading: boolean;
}
