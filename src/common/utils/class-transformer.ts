import { plainToClass } from "class-transformer";
import type { ClassConstructor } from "class-transformer/types/interfaces";

export const fromJson = <T>(model: ClassConstructor<T>, json: Record<string, unknown>) =>
  plainToClass(model, json, { excludeExtraneousValues: true });
