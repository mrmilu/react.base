import { inject, injectable } from "inversify";
import type { IGraphqlDataSource } from "@/src/common/interfaces/graphql_data_source";
import type { DocumentNode } from "graphql";
import type { IEnvVars } from "@/src/core/app/domain/interfaces/env_vars";
import { TYPES } from "../../ioc/types";
import possibleTypes from "./mock_service_possible_types.json";
import { GraphqlClient } from "@/src/common/network/graphql/graphql_client";

@injectable()
export class MockService implements IGraphqlDataSource {
  private graphqlClient: GraphqlClient;

  constructor(@inject(TYPES.IEnvVars) envVars: IEnvVars) {
    this.graphqlClient = new GraphqlClient(envVars.serverUrl, possibleTypes);
  }

  mutate<T, V = Record<string, unknown>>(mutation: DocumentNode, variables?: V): Promise<T | null | undefined> {
    return this.graphqlClient.mutate<T, V>(mutation, variables);
  }

  query<T, V = Record<string, unknown>>(query: DocumentNode, variables?: V): Promise<T | null | undefined> {
    return this.graphqlClient.query<T, V>(query, variables);
  }
}
