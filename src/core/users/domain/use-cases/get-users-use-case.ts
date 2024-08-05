import { TYPES } from "@/src/core/app/ioc/__generated__/types";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import type { IUsersRepository } from "@/src/core/users/domain/interfaces/users-repository";
import type { User } from "@/src/core/users/domain/models/user";
import { inject, injectable } from "inversify";

@injectable()
export class GetUsersUseCase {
  @inject(TYPES.IUsersRepository) private readonly usersRepositoryProvider!: IocProvider<IUsersRepository>;

  async execute(): Promise<Array<User>> {
    const repository = await this.usersRepositoryProvider();
    return repository.users();
  }
}
