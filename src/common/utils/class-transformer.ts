import { plainToClass } from "class-transformer";
import { PostDataModel } from "@/src/core/posts/data/models/post_data_model";
import type { ClassConstructor } from "class-transformer/types/interfaces";

export const fromJson = <T>(model: ClassConstructor<T>, json: Record<string, unknown>) =>
  plainToClass(PostDataModel, json, { excludeExtraneousValues: true });
