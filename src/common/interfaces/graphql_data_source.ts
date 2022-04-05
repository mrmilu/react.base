import type { DocumentNode } from "graphql";

export interface IGraphqlDataSource {
  mutate<T, V = Record<string, unknown>>(mutation: DocumentNode, variables?: V): Promise<T | null | undefined>;
  query<T, V = Record<string, unknown>>(query: DocumentNode, variables?: V): Promise<T | null | undefined>;
}
