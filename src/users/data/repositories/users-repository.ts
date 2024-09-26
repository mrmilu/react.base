import type { MockService } from "@/src/shared/data/services/mock-service";
import { TYPES } from "@/src/shared/ioc/__generated__/types";
import type { IocProvider } from "@/src/shared/ioc/interfaces";
import type { UsersQuery } from "@/src/users/data/graphql/queries/__generated__/users";
import { UserDataModel } from "@/src/users/data/models/user-data-model";
import type { IUsersRepository } from "@/src/users/domain/interfaces/users-repository";
import type { User } from "@/src/users/domain/models/user";
import { plainToClass } from "class-transformer";
import { inject, injectable } from "inversify";
import UsersQueryOperation from "../graphql/queries/users.graphql";

@injectable()
export class UsersRepository implements IUsersRepository {
  @inject(TYPES.MockService) private mockServiceProvider!: IocProvider<MockService>;

  async users(): Promise<Array<User>> {
    const mockService = await this.mockServiceProvider();
    const response = await mockService.query<UsersQuery>(UsersQueryOperation);
    return (
      response?.users?.data?.map((user) => {
        const dataModel = plainToClass(UserDataModel, user, { excludeExtraneousValues: true });
        return dataModel.toDomain();
      }) ?? []
    );
  }
}
