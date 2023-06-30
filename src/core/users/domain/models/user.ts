import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

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
