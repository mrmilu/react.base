# Environment variables

> ℹ️ .env variables are loaded automatically by Vite. Refer to this documentation for more information. [Loading Environment Variables](https://vitejs.dev/guide/env-and-mode#env-files).

> Good to know: `.env`, `.env.development`, and `.env.production` files should be included in your repository as they define defaults. .env*.local should be added to .gitignore, as those files are intended to be ignored. .env.local is where secrets can be stored.

## Values

| Key                               | Responsible | Type      | Secret | Policy                    | Default value           | Description                        | Docs                                                                   |
| --------------------------------- | ----------- | --------- | ------ | ------------------------- | ----------------------- | ---------------------------------- | ---------------------------------------------------------------------- |
| `VITE_APP_API_URL`                | DevOps      | `string`  | No     | `DEFAULT`                 | `http://localhost:3000` | GQL API URL URL                    |
| `VITE_APP_ANOTHER_API_URL`        | DevOps      | `string`  | No     | `DEFAULT`                 | `http://localhost:3000` | REST API URL URL                   | -                                                                      |
| `VITE_APP_GRAPHQL_PROXY_ENDPOINT` | DevOps      | `string`  | No     | `REQUIRED-IN-RELEASE-ENV` | -                       | GQL Proxy Endpoint URL             | -                                                                      |
| `VITE_APP_REST_PROXY_ENDPOINT`    | DevOps      | `string`  | No     | `REQUIRED-IN-RELEASE-ENV` | -                       | REST Proxy Endpoint DSN            |                                                                        |
| `VITE_APP_SENTRY_DSN`             | DevOps      | `string`  | No     | `REQUIRED-IN-RELEASE-ENV` | -                       | Sentry DSN                         | [Sentry DSN](https://docs.sentry.io/concepts/key-terms/dsn-explainer/) |
| `VITE_APP_SENTRY_ENABLED`         | DevOps      | `boolean` | No     | `FEATURE-FLAG`            | -                       | Enables/Disables Sentry monitoring | -                                                                      |

## Policies
- `DEFAULT`: This environment variable has a default value that works on most common usages
- `REQUIRED`: This environment variable must be set, otherwise the application will not start throwing an exception
- `REQUIRED-IN-RELEASE-ENV`: This environment variable must be set in release environments, the application will start but won't comply requirements: security, functionality, integration, performance, etc
- `FEATURE-FLAG`: This environment variable changes a feature behavior 
- `DEPRECATED`: Deprecated variables, see deprecated variables section

## Types
- `boolean`: string variable containing a boolean value 
- `string`: string variable
- `fs_path`: string variable containing a path in the file system
- `email`: string variable containing an email
- `string-list-by-comma`: list string values extracted by: split (using `,` as the separator) and trim