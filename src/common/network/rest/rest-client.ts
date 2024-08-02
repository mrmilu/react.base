import type { AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";

export interface GetRequestOptions {
  params?: Record<string, unknown>;
  paramsSerializer?: {
    encode: (params: Record<string, unknown>) => string;
  };
}

export interface PostRequestOptions<D = Record<string, unknown>> {
  data?: D;
}

export type PutRequestOptions<D> = PostRequestOptions<D>;
export type PatchRequestOptions<D> = PostRequestOptions<D>;
export type DeleteRequestOptions = GetRequestOptions;

export class RestClient {
  private client: AxiosInstance;

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: 5000
    });
  }

  async get<T>(url: string, options?: GetRequestOptions): Promise<AxiosResponse<T>> {
    return await this.client.get<T>(url, options);
  }

  async delete<T>(url: string, options?: DeleteRequestOptions): Promise<AxiosResponse<T>> {
    return await this.client.delete<T>(url, options);
  }

  async post<T, D>(url: string, options?: PostRequestOptions<D>): Promise<AxiosResponse<T>> {
    return await this.client.post<T>(url, options?.data);
  }

  async put<T, D>(url: string, options?: PutRequestOptions<D>): Promise<AxiosResponse<T>> {
    return await this.client.put<T>(url, options?.data);
  }

  async patch<T, D>(url: string, options?: PatchRequestOptions<D>): Promise<AxiosResponse<T>> {
    return await this.client.patch<T>(url, options?.data);
  }
}
