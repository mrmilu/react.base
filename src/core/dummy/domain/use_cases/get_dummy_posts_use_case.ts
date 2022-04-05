import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import type { IDummyRepository } from "@/src/core/dummy/domain/interfaces/dummy_repository";
import { TYPES } from "@/src/core/app/ioc/types";
import type { DummyPost } from "@/src/core/dummy/domain/models/dummy_post";

@injectable()
export class GetDummyPostsUseCase {
  @inject(TYPES.IDummyRepository) private readonly dummyRepositoryProvider!: IocProvider<IDummyRepository>;

  async execute(): Promise<Array<DummyPost>> {
    const dummyRepository = await this.dummyRepositoryProvider();
    return dummyRepository.posts();
  }
}
