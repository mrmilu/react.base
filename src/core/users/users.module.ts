import { ContainerModule } from "inversify";
import { bindDynamicModule } from "@/src/core/app/ioc/utils";
import { TYPES } from "@/src/core/app/ioc/types";

export const usersModule = new ContainerModule(() => {
  bindDynamicModule(TYPES.IUsersRepository, () => import("./data/repositories/users_repository"));
  bindDynamicModule(TYPES.GetUsersUseCase, () => import("./domain/use_cases/get_users_use_case"));
});
