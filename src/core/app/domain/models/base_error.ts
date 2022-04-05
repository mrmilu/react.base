export class BaseError extends Error {
  data!: Record<string, unknown> | null;

  constructor(message: string) {
    super(message);
  }
}
