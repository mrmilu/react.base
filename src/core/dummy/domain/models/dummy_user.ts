export class DummyUser {
  id: string;
  name: string;
  email: string;

  constructor(params: { id: string; name: string; email: string }) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
  }
}
