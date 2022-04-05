## Base Mr. Milu: React.js

### Index and features

- [Clean architecture](https://www.notion.so/mrmilu/Arquitectura-7e45973fc107487294a63bac9f5c3aa4) <-- READ THIS!
- Dependency Injection ([Inversify](https://github.com/inversify/InversifyJS))
- Typescript
- [Class transformers](https://github.com/typestack/class-transformer)
- Redux toolkit
- Apollo (GraphQL)
- [Commitlint](docs/comitlint.md) (with [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) config)
- [Styled components](docs/styled_components.md)
- ESLint (with TypeScript config)
- Prettier
- [Error boundary](docs/error_boundary.md)
- [i18n-next](docs/i18n_next.md) ([next-i18n official documentation](https://github.com/isaachinman/next-i18next))
- [Development proxy through rewrites](docs/dev_proxy.md)

### First steps

**Set node version**

```
nvm use
```

**Install dependencies**

```
yarn
```

**Run project**

```
yarn dev
```

### Environment variables

Create a `.env.local` file with your environment variables with the following defaults

```
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_ANOTHER_API_URL=http://localhost:3000
NEXT_PUBLIC_GRAPHQL_PROXY_ENDPOINT=https://graphqlzero.almansi.me/api
NEXT_PUBLIC_REST_PROXY_ENDPOINT=https://jsonplaceholder.typicode.com
NEXT_PUBLIC_SENTRY_DSN=project_dsn
NEXT_PUBLIC_SENTRY_ENABLED=false
SENTRY_ENVIRONMENT=dev
SENTRY_URL=https://sentry.mrmilu.com
SENTRY_ORG=mrmilu
SENTRY_PROJECT=project-name
SENTRY_AUTH_TOKEN=sentry-user-auth-token
```
