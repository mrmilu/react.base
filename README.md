## Base Mr. Milu: React.js

### Index and features

- [Vite](https://github.com/vitejs/vite)
- [Clean architecture](https://www.notion.so/mrmilu/Arquitectura-7e45973fc107487294a63bac9f5c3aa4) <-- READ THIS!
- Dependency Injection ([Inversify](https://github.com/inversify/InversifyJS))
- Typescript
- [Class transformers](https://github.com/typestack/class-transformer)
- [Zustand](https://github.com/pmndrs/zustand)
- [Apollo Client (GraphQL)](https://github.com/apollographql/apollo-client)
- [Commitlint](docs/comitlint.md) (with [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) config)
- [Styled components](docs/styled_components.md)
- ESLint (with TypeScript config)
- Prettier
- [Error boundary](docs/error_boundary.md)
- [react-i18next](docs/i18next.md) ([i18next react official documentation](https://react.i18next.com/))
- [Development proxy server](docs/dev_proxy.md)
- [React Router 6](https://reactrouter.com/docs/en/v6/api)
- Sentry

### Prerequisites

This project uses the following packages

- [nvm](https://github.com/nvm-sh/nvm) (Node version manager)
- [Just](https://just.systems/man/en/chapter_4.html) (For justfile usage)

Run the following command to install the node version declared in the `.nvmrc`
file for this project:

```shell
nvm install
```

Finally, enable [corepack](https://github.com/nodejs/corepack) so the correct
version of yarn is used.

```shell
just corepack-enable
```

### First steps

**Install dependencies**

```shell
just install-deps
```

**Run project**

```shell
just dev
```

**See a list of available commands**

```shell
just
```

**Proxy commands through nvm**

```shell
just nvm-exec "yarn add @front_web_mrmilu/hooks"
```

### Environment variables

Create a `.env.development.local` file with your environment variables with the following defaults for dev server

```
VITE_APP_API_URL=http://localhost:3000
VITE_APP_ANOTHER_API_URL=http://localhost:3000
VITE_APP_GRAPHQL_PROXY_ENDPOINT=https://graphqlzero.almansi.me
VITE_APP_REST_PROXY_ENDPOINT=https://jsonplaceholder.typicode.com
VITE_APP_SENTRY_DSN=project_dsn
VITE_APP_SENTRY_ENABLED=false
SENTRY_ENVIRONMENT=dev
```

Also create a `.env.production.local` file with your environment variables with the following defaults for production build

```
VITE_APP_API_URL=https://graphqlzero.almansi.me
VITE_APP_ANOTHER_API_URL=https://jsonplaceholder.typicode.com
VITE_APP_SENTRY_DSN=project_dsn
VITE_APP_SENTRY_ENABLED=false
SENTRY_ENVIRONMENT=dev
```
