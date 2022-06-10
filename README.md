## Base Mr. Milu: React.js

### Index and features

- [CRA with CRACO](https://github.com/gsoft-inc/craco)
- [Clean architecture](https://www.notion.so/mrmilu/Arquitectura-7e45973fc107487294a63bac9f5c3aa4) <-- READ THIS!
- Dependency Injection ([Inversify](https://github.com/inversify/InversifyJS))
- Typescript
- [Class transformers](https://github.com/typestack/class-transformer)
- Redux toolkit
- Apollo Client (GraphQL)
- [Commitlint](docs/comitlint.md) (with [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) config)
- [Styled components](docs/styled_components.md)
- ESLint (with TypeScript config)
- Prettier
- [Error boundary](docs/error_boundary.md)
- [react-i18next](docs/i18next.md) ([i18next react official documentation](https://react.i18next.com/))
- [Development proxy server](docs/dev_proxy.md)
- [React Router 6](https://reactrouter.com/docs/en/v6/api)
- Sentry

### First steps

**Set node version**

```
nvm use
```

**Install dependencies**

```
yarn
```

**Create Graphql schema**

```
yarn graphql
```

**Run project**

```
yarn start
```

### Environment variables

Create a `.env.development.local` file with your environment variables with the following defaults for dev server

```
REACT_APP_API_URL=http://localhost:3000
REACT_APP_ANOTHER_API_URL=http://localhost:3000
REACT_APP_GRAPHQL_PROXY_ENDPOINT=https://graphqlzero.almansi.me
REACT_APP_REST_PROXY_ENDPOINT=https://jsonplaceholder.typicode.com
REACT_APP_SENTRY_DSN=project_dsn
REACT_APP_SENTRY_ENABLED=false
SENTRY_ENVIRONMENT=dev
```

Also create a `.env.production.local` file with your environment variables with the following defaults for production build

```
REACT_APP_API_URL=https://graphqlzero.almansi.me
REACT_APP_ANOTHER_API_URL=https://jsonplaceholder.typicode.com
REACT_APP_SENTRY_DSN=project_dsn
REACT_APP_SENTRY_ENABLED=false
SENTRY_ENVIRONMENT=dev
```
