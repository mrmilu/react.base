import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import type { IDummyRepository } from "@/src/core/dummy/domain/interfaces/dummy_repository";
import { TYPES } from "@/src/core/app/ioc/types";

@injectable()
export class CreateDummyPostUseCase {
  @inject(TYPES.IDummyRepository) private readonly dummyRepositoryProvider!: IocProvider<IDummyRepository>;

  async execute(postNumber: number) {
    const repository = await this.dummyRepositoryProvider();
    const input = {
      title: `Cool post number ${postNumber}`,
      body: `This is a cool body for post number ${postNumber}`
    };
    return repository.createPost(input);
  }
}
