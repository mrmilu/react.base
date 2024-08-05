import { TYPES } from "@/src/core/app/ioc/__generated__/types";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import type { IPostsRepository } from "@/src/core/posts/domain/interfaces/posts-repository";
import { inject, injectable } from "inversify";

@injectable()
export class CreatePostUseCase {
  @inject(TYPES.IPostsRepository) private readonly postsRepositoryProvider!: IocProvider<IPostsRepository>;

  async execute(postNumber: number) {
    const repository = await this.postsRepositoryProvider();
    const input = {
      title: `Cool post number ${postNumber}`,
      body: `This is a cool body for post number ${postNumber}`
    };
    return repository.createPost(input);
  }
}
