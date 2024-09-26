import { RestClient } from "@/src/common/network/rest/rest-client";
import type { IEnvVars } from "@/src/core/app/domain/interfaces/env-vars";
import { TYPES } from "@/src/core/app/ioc/__generated__/types";
import type { IRestDataSource, RestDataSourceOptions } from "@/src/core/shared/domain/interfaces/rest-data-source";
import { inject, injectable } from "inversify";
import { generatorConf } from "inversify-generator/decorators";

@injectable()
@generatorConf({ typeName: "JSONPlaceholderService" })
export class JSONPlaceholderService implements IRestDataSource {
  private readonly jsonPlaceholderClient: RestClient;

  constructor(@inject(TYPES.IEnvVars) envVars: IEnvVars) {
    this.jsonPlaceholderClient = new RestClient(`${envVars.anotherServiceUrl}`);
  }

  async get<T = unknown>(url: string, { params }: RestDataSourceOptions = {}): Promise<T> {
    const res = await this.jsonPlaceholderClient.get<T>(url, {
      params
    });
    return res.data;
  }
}
