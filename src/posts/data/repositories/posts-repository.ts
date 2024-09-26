import type { CreatePostInput } from "@/src/__generated__/graphql";
import type { CreatePostMutation } from "@/src/posts/data/graphql/mutations/__generated__/create-post";
import { PostDataModel } from "@/src/posts/data/models/post-data-model";
import type { Post } from "@/src/posts/domain/models/post";
import type { JSONPlaceholderService } from "@/src/shared/data/services/json-placeholder-service";
import type { MockService } from "@/src/shared/data/services/mock-service";
import type { Page } from "@/src/shared/domain/models/page";
import { TYPES } from "@/src/shared/ioc/__generated__/types";
import type { IocProvider } from "@/src/shared/ioc/interfaces";
import { inject, injectable } from "inversify";
import type { IPostsRepository } from "../../domain/interfaces/posts-repository";
import CreatePostMutationOperation from "../graphql/mutations/create-post.graphql";
import { fromJson, fromJsonPage } from "@/src/shared/data/utils/class-transformer";

@injectable()
export class PostsRepository implements IPostsRepository {
  @inject(TYPES.MockService) private mockServiceProvider!: IocProvider<MockService>;
  @inject(TYPES.JSONPlaceholderService) private jsonPlaceholderServiceProvider!: IocProvider<JSONPlaceholderService>;

  async createPost(input: CreatePostInput): Promise<Post | null> {
    const mockService = await this.mockServiceProvider();
    const response = await mockService.mutate<CreatePostMutation>(CreatePostMutationOperation, { input });
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
    return fromJsonPage<PostDataModel, Post>(PostDataModel, fakePage).toDomain();
  }
}
