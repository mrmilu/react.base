import { inject, injectable } from "inversify";
import type { DummyUser } from "@/src/core/dummy/domain/models/dummy_user";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import type { IDummyRepository } from "@/src/core/dummy/domain/interfaces/dummy_repository";
import { TYPES } from "@/src/core/app/ioc/types";

@injectable()
export class GetDummyUsersUseCase {
  @inject(TYPES.IDummyRepository) private readonly dummyRepositoryProvider!: IocProvider<IDummyRepository>;

  async execute(): Promise<Array<DummyUser>> {
    const dummyRepository = await this.dummyRepositoryProvider();
    return dummyRepository.users();
  }
}
