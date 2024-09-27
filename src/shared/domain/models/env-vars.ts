import { injectable } from "inversify";
import { generatorConf } from "inversify-generator/decorators";
import type { IEnvVars } from "../interfaces/env-vars";

@injectable()
@generatorConf({ binding: "default" })
export class EnvVars implements IEnvVars {
  serverUrl: string = import.meta.env.VITE_APP_API_URL ? `${import.meta.env.VITE_APP_API_URL}${this.isProduction ? "/api" : "/s/graphql/"}` : "";

  anotherServiceUrl: string = import.meta.env.VITE_APP_ANOTHER_API_URL
    ? `${import.meta.env.VITE_APP_ANOTHER_API_URL}${this.isProduction ? "" : "/rest"}`
    : "";

  get isProduction() {
    return import.meta.env.MODE === "production";
  }

  sentryDSN?: string = import.meta.env.SENTRY_DSN || import.meta.env.VITE_APP_SENTRY_DSN;

  sentryEnabled: boolean = import.meta.env.VITE_APP_SENTRY_ENABLED === "true";
}
