import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import type { IPostsRepository } from "@/src/core/posts/domain/interfaces/posts_repository";

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
