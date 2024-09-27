// This is an auto generated file created by inversify-generator
// Please don't make any changes as you might lose them in future generations
import { Container } from "inversify";
import { bindDynamicModule } from "inversify-generator/utils";
import "reflect-metadata";
import { EnvVars } from "../domain/models/env-vars";
import { TYPES } from "./types";

const locator = new Container();
bindDynamicModule(TYPES.JSONPlaceholderService, () => import("../data/services/json-placeholder-service"), locator);
bindDynamicModule(TYPES.MockService, () => import("../data/services/mock-service"), locator);
locator.bind(TYPES.IEnvVars).to(EnvVars);
bindDynamicModule(TYPES.IPostsRepository, () => import("@/src/posts/data/repositories/posts-repository"), locator);
bindDynamicModule(TYPES.CreatePostUseCase, () => import("@/src/posts/application/use-cases/create-post-use-case"), locator);
bindDynamicModule(TYPES.GetPostsUseCase, () => import("@/src/posts/application/use-cases/get-posts-use-case"), locator);
bindDynamicModule(TYPES.IUsersRepository, () => import("@/src/users/data/repositories/users-repository"), locator);
bindDynamicModule(TYPES.GetUsersUseCase, () => import("@/src/users/application/use-cases/get-users-use-case"), locator);

export { locator };
