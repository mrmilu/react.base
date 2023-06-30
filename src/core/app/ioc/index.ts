import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { EnvVars } from "@/src/core/app/domain/models/env_vars";
import { bindDynamicModule } from "./utils";
import { postsModule } from "@/src/core/posts/posts.module";
import { usersModule } from "@/src/core/users/users.module";

const locator = new Container();
locator.bind(TYPES.IEnvVars).to(EnvVars);
bindDynamicModule(TYPES.MockService, () => import("../../../core/app/data/services/mock_service"));

bindDynamicModule(TYPES.JSONPlaceholderService, () => import("../data/services/json_placeholder_service"));

locator.load(postsModule, usersModule);

export { locator };
