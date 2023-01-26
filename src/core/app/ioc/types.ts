// Symbol key should be with the name of the abstraction but the symbol itself should be the name of the implementation
export const TYPES = {
  MockService: Symbol("MockService"),
  JSONPlaceholderService: Symbol("JSONPlaceholderService"),
  IEnvVars: Symbol("EnvVars"),
  IPostsRepository: Symbol("PostsRepository"),
  IUsersRepository: Symbol("UsersRepository"),
  GetUsersUseCase: Symbol("GetDummyUsersUseCase"),
  GetPostsUseCase: Symbol("GetDummyPostsUseCase"),
  CretePostUseCase: Symbol("CreteDummyPostUseCase")
};
