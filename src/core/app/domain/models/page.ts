import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class Page<T> {
  items: Array<T> = [];
  totalCount?: number;
  page?: number;
  previous?: number;
  next?: number;

  constructor(params: ConstructorType<Page<T>>) {
    this.items = params.items;
    this.totalCount = params.totalCount;
    this.page = params.page;
    this.previous = params.previous;
    this.next = params.next;
  }
}
