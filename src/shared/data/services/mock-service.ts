import type { IEnvVars } from "@/src/core/app/domain/interfaces/env-vars";
import { TYPES } from "@/src/core/app/ioc/__generated__/types";
import type { NetworkInterfaces } from "@front_web_mrmilu/network";
import { GraphqlClient } from "@front_web_mrmilu/network";
import type { DocumentNode } from "graphql";
import { inject, injectable } from "inversify";
import { generatorConf } from "inversify-generator/decorators";
import generatedIntrospection from "../__generated__/graphql-introspection";

@injectable()
@generatorConf({ typeName: "MockService" })
export class MockService implements NetworkInterfaces.IGraphqlDataSource {
  private graphqlClient: GraphqlClient;

  constructor(@inject(TYPES.IEnvVars) envVars: IEnvVars) {
    this.graphqlClient = new GraphqlClient(envVars.serverUrl, generatedIntrospection.possibleTypes);
  }

  mutate<T, V = Record<string, unknown>>(mutation: DocumentNode, variables?: V): Promise<T | null | undefined> {
    return this.graphqlClient.mutate<T, V>(mutation, variables);
  }

  query<T, V = Record<string, unknown>>(query: DocumentNode, variables?: V): Promise<T | null | undefined> {
    return this.graphqlClient.query<T, V>(query, variables);
  }
}
