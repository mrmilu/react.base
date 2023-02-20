import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { EnvVars } from "@/src/core/app/domain/models/env_vars";
import { bindDynamicModule } from "./utils";

const locator = new Container();
locator.bind(TYPES.IEnvVars).to(EnvVars);
bindDynamicModule(TYPES.MockService, () => import("../../../core/app/data/services/mock_service"));

bindDynamicModule(TYPES.JSONPlaceholderService, () => import("../data/services/json_placeholder_service"));

// Repositories
bindDynamicModule(TYPES.IUsersRepository, () => import("../../users/data/repositories/users_repository"));
bindDynamicModule(TYPES.IPostsRepository, () => import("../../posts/data/repositories/posts_repository"));

// Use cases
bindDynamicModule(TYPES.GetUsersUseCase, () => import("../../users/domain/use_cases/get_users_use_case"));
bindDynamicModule(TYPES.CretePostUseCase, () => import("../../posts/domain/use_cases/create_post_use_case"));
bindDynamicModule(TYPES.GetPostsUseCase, () => import("../../posts/domain/use_cases/get_posts_use_case"));

export { locator };
