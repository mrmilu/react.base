import type { interfaces } from "inversify";
import { ContainerModule } from "inversify";
import { bindDynamicModule } from "@/src/core/app/ioc/utils";
import { TYPES } from "@/src/core/app/ioc/types";

export const usersModule = new ContainerModule((bind: interfaces.Bind) => {
  bindDynamicModule(TYPES.IUsersRepository, () => import("./data/repositories/users_repository"));
  bindDynamicModule(TYPES.GetUsersUseCase, () => import("./domain/use_cases/get_users_use_case"));
});
