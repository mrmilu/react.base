export class Page<T> {
  items: Array<T> = [];
  totalCount?: number;
  page?: number;
  previous?: number;
  next?: number;

  constructor(params: { items: Array<T>; totalCount?: number; page?: number; previous?: number; next?: number }) {
    this.items = params.items;
    this.totalCount = params.totalCount;
    this.page = params.page;
    this.previous = params.previous;
    this.next = params.next;
  }
}
