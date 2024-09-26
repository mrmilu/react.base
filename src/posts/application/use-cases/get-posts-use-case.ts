import { TYPES } from "@/src/core/app/ioc/__generated__/types";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import type { IPostsRepository } from "@/src/core/posts/domain/interfaces/posts-repository";
import type { Post } from "@/src/core/posts/domain/models/post";
import { inject, injectable } from "inversify";

@injectable()
export class GetPostsUseCase {
  @inject(TYPES.IPostsRepository) private readonly postsRepositoryProvider!: IocProvider<IPostsRepository>;

  async execute(): Promise<Array<Post>> {
    const repository = await this.postsRepositoryProvider();
    const pagePosts = await repository.posts();
    return pagePosts.items;
  }
}
