import { inject, injectable } from "inversify";
import { TYPES } from "@/src/core/app/ioc/types";
import type { User } from "@/src/core/users/domain/models/user";
import UsersQueryOperation from "../graphql/queries/users.graphql";
import { plainToClass } from "class-transformer";
import type { MockService } from "@/src/core/app/data/services/mock_service";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { UserDataModel } from "@/src/core/users/data/models/user_data_model";
import type { IUsersRepository } from "@/src/core/users/domain/interfaces/users_repository";
import type { UsersQuery } from "@/src/core/users/data/graphql/queries/__generated__/users";

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
