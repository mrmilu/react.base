import { PageDataModel } from "@/src/shared/data/models/page-data-model";
import { instanceToPlain, plainToClass, plainToClassFromExist } from "class-transformer";
import type { ClassConstructor } from "class-transformer/types/interfaces";
import type { DataModel } from "@/src/shared/data/models/data-model";

export const fromJson = <T = never, U extends T = T>(model: ClassConstructor<U>, json: Record<string, unknown>): U =>
  plainToClass(model, json, { excludeExtraneousValues: true, exposeDefaultValues: true }) as U;

export const toJson = <T>(object: T): Record<string, unknown> =>
  instanceToPlain(object, { excludeExtraneousValues: true, exposeDefaultValues: true });

export const fromJsonPage = <DataType extends DataModel<DomainType>, DomainType>(model: ClassConstructor<DataType>, json: Record<string, unknown>) =>
  plainToClassFromExist(new PageDataModel<DataType, DomainType>(model), json, { excludeExtraneousValues: true, exposeDefaultValues: true });
