import { Exclude, Expose, Type } from "class-transformer";
import { Page } from "@/src/core/app/domain/models/page";
import type { DataModel } from "@/src/common/interfaces/data_model";

export class PageDataModel<ItemDataType extends DataModel<ItemDomainType>, ItemDomainType> {
  @Exclude()
  private type: new (...args: unknown[]) => unknown;

  @Expose({ name: "results" })
  @Type((options) => {
    return (options?.newObject as PageDataModel<ItemDataType, ItemDomainType>).type;
  })
  items: Array<ItemDataType> = [];
  @Expose()
  totalCount?: number;
  @Expose()
  page?: number;
  @Expose()
  previous?: number;
  @Expose()
  next?: number;

  constructor(type: new (...args: unknown[]) => unknown) {
    this.type = type;
  }

  toDomain(): Page<ItemDomainType> {
    return new Page<ItemDomainType>({
      items: this.items.map((i) => i.toDomain()),
      totalCount: this.totalCount,
      page: this.page,
      previous: this.previous,
      next: this.next
    });
  }
}
