// This is an auto generated file created by inversify-generator
// Please don't make any changes as you might lose them in future generations
import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { bindDynamicModule } from "inversify-generator/utils";
import { EnvVars } from "../domain/models/env-vars";

const locator = new Container();
bindDynamicModule(TYPES.JSONPlaceholderService, () => import("../data/services/json-placeholder-service"), locator);
bindDynamicModule(TYPES.MockService, () => import("../data/services/mock-service"), locator);
locator.bind(TYPES.IEnvVars).to(EnvVars);
bindDynamicModule(TYPES.IPostsRepository, () => import("../../posts/data/repositories/posts-repository"), locator);
bindDynamicModule(TYPES.CreatePostUseCase, () => import("../../posts/domain/use-cases/create-post-use-case"), locator);
bindDynamicModule(TYPES.GetPostsUseCase, () => import("../../posts/domain/use-cases/get-posts-use-case"), locator);
bindDynamicModule(TYPES.IUsersRepository, () => import("../../users/data/repositories/users-repository"), locator);
bindDynamicModule(TYPES.GetUsersUseCase, () => import("../../users/domain/use-cases/get-users-use-case"), locator);

export { locator };