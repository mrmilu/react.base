import type { interfaces } from "inversify";
import { ContainerModule } from "inversify";
import { bindDynamicModule } from "@/src/core/app/ioc/utils";
import { TYPES } from "@/src/core/app/ioc/types";

export const postsModule = new ContainerModule((bind: interfaces.Bind) => {
  bindDynamicModule(TYPES.IPostsRepository, () => import("./data/repositories/posts_repository"), bind);
  bindDynamicModule(TYPES.CretePostUseCase, () => import("./domain/use_cases/create_post_use_case"), bind);
  bindDynamicModule(TYPES.GetPostsUseCase, () => import("./domain/use_cases/get_posts_use_case"), bind);
});
