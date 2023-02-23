import { plainToClass, plainToClassFromExist } from "class-transformer";
import type { ClassConstructor } from "class-transformer/types/interfaces";
import { PageDataModel } from "@/src/core/app/data/models/page_data_model";
import type { DataModel } from "../interfaces/data_model";

export const fromJson = <T = never, U extends T = T>(model: ClassConstructor<U>, json: Record<string, unknown>): U =>
  plainToClass(model, json, { excludeExtraneousValues: true }) as U;

export const fromJsonPage = <DataType extends DataModel<DomainType>, DomainType>(model: ClassConstructor<DataType>, json: Record<string, unknown>) =>
  plainToClassFromExist(new PageDataModel<DataType, DomainType>(model), json, { excludeExtraneousValues: true });
