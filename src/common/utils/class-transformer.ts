import { plainToClass, plainToClassFromExist } from "class-transformer";
import type { ClassConstructor } from "class-transformer/types/interfaces";
import { PageDataModel } from "@/src/core/app/data/models/page_data_model";

export const fromJson = <T = never, U extends T = T>(model: ClassConstructor<U>, json: Record<string, unknown>): U =>
  plainToClass(model, json, { excludeExtraneousValues: true }) as U;

export const fromJsonPage = <T extends { toDomain(): any } = never, U extends T = T>(model: ClassConstructor<U>, json: Record<string, unknown>) =>
  plainToClassFromExist(new PageDataModel<U>(model), json, { excludeExtraneousValues: true }) as PageDataModel<U>;
