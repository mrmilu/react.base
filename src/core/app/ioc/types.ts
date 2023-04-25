// Symbol key should be with the name of the abstraction but the symbol itself should be the name of the implementation
export const TYPES = {
  MockService: Symbol("MockService"),
  JSONPlaceholderService: Symbol("JSONPlaceholderService"),
  IEnvVars: Symbol("IEnvVars"),
  IPostsRepository: Symbol("IPostsRepository"),
  IUsersRepository: Symbol("IUsersRepository"),
  GetUsersUseCase: Symbol("GetUsersUseCase"),
  GetPostsUseCase: Symbol("GetPostsUseCase"),
  CretePostUseCase: Symbol("CretePostUseCase")
};
