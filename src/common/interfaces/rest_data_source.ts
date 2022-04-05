export interface RestDataSourceOptions {
  params?: Record<string, unknown>;
}

export interface IRestDataSource {
  get<T>(url: string, options?: RestDataSourceOptions): Promise<T>;
}
