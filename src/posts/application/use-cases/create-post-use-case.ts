import type { IPostsRepository } from "@/src/posts/domain/interfaces/posts-repository";
import { TYPES } from "@/src/shared/ioc/__generated__/types";
import type { IocProvider } from "@/src/shared/ioc/interfaces";
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
