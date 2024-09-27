import type { ConstructorType } from "@/src/shared/domain/models/constructor-type";

export class User {
  id: string;
  name: string;
  email: string;

  constructor(params: ConstructorType<User>) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
  }
}
