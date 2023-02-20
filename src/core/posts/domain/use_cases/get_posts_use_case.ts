import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import type { IPostsRepository } from "@/src/core/posts/domain/interfaces/posts_repository";
import type { Post } from "@/src/core/posts/domain/models/post";

@injectable()
export class GetPostsUseCase {
  @inject(TYPES.IPostsRepository) private readonly postsRepositoryProvider!: IocProvider<IPostsRepository>;

  async execute(): Promise<Array<Post>> {
    const repository = await this.postsRepositoryProvider();
    const pagePosts = await repository.posts();
    return pagePosts.items;
  }
}
