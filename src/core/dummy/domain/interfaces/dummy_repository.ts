import type { DummyUser } from "@/src/core/dummy/domain/models/dummy_user";
import type { DummyPost } from "@/src/core/dummy/domain/models/dummy_post";

export interface CreatePostInput {
  title: string;
  body: string;
}

export interface IDummyRepository {
  users(): Promise<Array<DummyUser>>;

  createPost(input: CreatePostInput): Promise<DummyPost | null>;

  posts(): Promise<Array<DummyPost>>;
}
