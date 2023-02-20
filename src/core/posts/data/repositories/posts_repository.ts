import type { IPostsRepository } from "../../domain/interfaces/posts_repository";
import { inject, injectable } from "inversify";
import { TYPES } from "@/src/core/app/ioc/types";
import CreateDummyPostMutationOperation from "../../../users/data/graphql/mutations/create_dummy_post.graphql";
import type { MockService } from "@/src/core/app/data/services/mock_service";
import type { CreateDummyPostMutation } from "@/src/core/users/data/graphql/mutations/__generated__/create_dummy_post";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import type { CreatePostInput } from "@/src/__generated__/graphql";
import type { Post } from "@/src/core/posts/domain/models/post";
import type { JSONPlaceholderService } from "@/src/core/app/data/services/json_placeholder_service";
import { PostDataModel } from "@/src/core/posts/data/models/post_data_model";
import { fromJson, fromJsonPage } from "@/src/common/utils/class-transformer";
import type { Page } from "@/src/core/app/domain/models/page";

@injectable()
export class PostsRepository implements IPostsRepository {
  @inject(TYPES.MockService) private mockServiceProvider!: IocProvider<MockService>;
  @inject(TYPES.JSONPlaceholderService) private jsonPlaceholderServiceProvider!: IocProvider<JSONPlaceholderService>;

  async createPost(input: CreatePostInput): Promise<Post | null> {
    const mockService = await this.mockServiceProvider();
    const response = await mockService.mutate<CreateDummyPostMutation>(CreateDummyPostMutationOperation, { input });
    return response?.createPost ? fromJson<PostDataModel>(PostDataModel, response.createPost).toDomain() : null;
  }

  async posts(): Promise<Page<Post>> {
    const jsonPlaceholderService = await this.jsonPlaceholderServiceProvider();
    const dataPostList = await jsonPlaceholderService.get<Array<Record<string, unknown>>>("/posts");
    const fakePage = {
      results: dataPostList,
      totalCount: dataPostList.length,
      page: 1
    };
    return fromJsonPage<PostDataModel>(PostDataModel, fakePage).toDomain<Post>();
  }
}
