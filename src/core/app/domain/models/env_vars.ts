import type { IEnvVars } from "../interfaces/env_vars";
import { injectable } from "inversify";

@injectable()
export class EnvVars implements IEnvVars {
  serverUrl: string = `${process.env.REACT_APP_API_URL}/s/graphql/` || "localhost:3000/s/graphql/";

  anotherServiceUrl: string = `${process.env.REACT_APP_ANOTHER_API_URL}/rest` || "localhost:3000/rest/";
}
