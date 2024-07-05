# React Base Justfile Commands 🦀 🚀

Run `just` to display the list of available commands.

## What is just?

`just` is a handy way to save and run project-specific commands. Commands, called recipes, are stored in a file called `justfile` with syntax inspired by `make`.

## Commands List

- `just corepack-enable`: Enables Corepack in Node.js.
- `just install-deps`: Installs the dependencies listed in the project's package.json.
- `just dev`: Starts the vite development server.
- `just debug`: Starts the vite debug server.
- `just build`: Builds the vite application.
- `just preview`: Builds the vite application in preview mode.
- `just clean`: Cleans the vite cache
- `just start`: Starts the server for the built Next.js application.
- `just prettier-fix:`: Runs formatting.
- `just ioc-generate`: Generates Inversify bindings.
- `just ioc-generate-watch`: Generates Inversify bindings and watches for changes.
- `just commit`: Commits changes using commitlint.
- `just graphql-codegen`: Downloads schema and generates corresponding ts types.
- `just e2e-run`: Runs E2E tests.
- `just e2e-open`: Runs E2E tests UI.
- `just commit`: Commit files using commitlint.
- `just nvm exec {{command}}`: Proxies a command through nvm. Replace `{{command}}` with the desired command to execute.