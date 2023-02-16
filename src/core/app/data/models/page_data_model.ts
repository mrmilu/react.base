import { Exclude, Expose, Type } from "class-transformer";
import { Page } from "@/src/core/app/domain/models/page";

export class PageDataModel<T extends { toDomain(): any }> {
  @Exclude()
  private type: new (...args: any[]) => any;

  @Expose({ name: "results" })
  @Type((options) => {
    return (options?.newObject as PageDataModel<T>).type;
  })
  items: Array<T> = [];
  @Expose()
  totalCount?: number;
  @Expose()
  page?: number;
  @Expose()
  previous?: number;
  @Expose()
  next?: number;

  constructor(type: new (...args: any[]) => any) {
    this.type = type;
  }

  toDomain<D>(): Page<D> {
    return new Page<D>({
      items: this.items.map((i) => i.toDomain()),
      totalCount: this.totalCount,
      page: this.page,
      previous: this.previous,
      next: this.next
    });
  }
}
