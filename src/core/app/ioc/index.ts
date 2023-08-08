// This is an auto generated file created by inversify-generator
// Please don't make any changes as you might lose them in future generations
import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { bindDynamicModule } from "inversify-generator/utils";
import { EnvVars } from "../domain/models/env_vars";

const locator = new Container();
bindDynamicModule(TYPES.JSONPlaceholderService, () => import("../data/services/json_placeholder_service"), locator);
bindDynamicModule(TYPES.MockService, () => import("../data/services/mock_service"), locator);
locator.bind(TYPES.IEnvVars).to(EnvVars);
bindDynamicModule(TYPES.IPostsRepository, () => import("../../posts/data/repositories/posts_repository"), locator);
bindDynamicModule(TYPES.CreatePostUseCase, () => import("../../posts/domain/use_cases/create_post_use_case"), locator);
bindDynamicModule(TYPES.GetPostsUseCase, () => import("../../posts/domain/use_cases/get_posts_use_case"), locator);
bindDynamicModule(TYPES.IUsersRepository, () => import("../../users/data/repositories/users_repository"), locator);
bindDynamicModule(TYPES.GetUsersUseCase, () => import("../../users/domain/use_cases/get_users_use_case"), locator);

export { locator };
