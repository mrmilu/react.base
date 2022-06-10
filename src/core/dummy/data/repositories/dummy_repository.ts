import type { IDummyRepository } from "../../domain/interfaces/dummy_repository";
import { inject, injectable } from "inversify";
import { TYPES } from "@/src/core/app/ioc/types";
import { DummyUser } from "@/src/core/dummy/domain/models/dummy_user";
import UsersQueryOperation from "../graphql/queries/users.graphql";
import CreateDummyPostMutationOperation from "../graphql/mutations/create_dummy_post.graphql";
import type { UsersQuery } from "@/src/core/dummy/data/graphql/queries/__generated__/users";
import { plainToClass } from "class-transformer";
import type { MockService } from "@/src/core/app/data/services/mock_service";
import { DummyPost } from "@/src/core/dummy/domain/models/dummy_post";
import type { CreateDummyPostMutation } from "@/src/core/dummy/data/graphql/mutations/__generated__/create_dummy_post";
import type { CreatePostInput } from "../../domain/interfaces/dummy_repository";
import type { JSONPlaceholderService } from "@/src/core/app/data/services/json_placeholder_service";
import type { DataPost } from "@/src/core/dummy/data/interfaces/data_post";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";

@injectable()
export class DummyRepository implements IDummyRepository {
  @inject(TYPES.MockService) private mockServiceProvider!: IocProvider<MockService>;
  @inject(TYPES.JSONPlaceholderService) private jsonPlaceholderServiceProvider!: IocProvider<JSONPlaceholderService>;

  async users(): Promise<Array<DummyUser>> {
    const mockService = await this.mockServiceProvider();
    const response = await mockService.query<UsersQuery>(UsersQueryOperation);
    return response?.users?.data?.map((user) => plainToClass(DummyUser, user, { excludeExtraneousValues: true })) ?? [];
  }

  async createPost(input: CreatePostInput): Promise<DummyPost | null> {
    const mockService = await this.mockServiceProvider();
    const response = await mockService.mutate<CreateDummyPostMutation>(CreateDummyPostMutationOperation, { input });
    return response ? plainToClass(DummyPost, response.createPost, { excludeExtraneousValues: true }) : null;
  }

  async posts(): Promise<Array<DummyPost>> {
    const jsonPlaceholderService = await this.jsonPlaceholderServiceProvider();
    const dataPostList = await jsonPlaceholderService.get<Array<DataPost>>("/posts");
    return dataPostList.map((dataPost) => plainToClass(DummyPost, dataPost, { excludeExtraneousValues: true }));
  }
}
