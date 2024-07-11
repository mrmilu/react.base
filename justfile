default:
  just --list

# Enables corepack in node
corepack-enable:
    ./nvm_exec.sh corepack enable

# Installs project package.json dependencies
install-deps:
    ./nvm_exec.sh pnpm install

# Starts React development server
dev:
    ./nvm_exec.sh pnpm dev

ioc-generate-watch:
    ./nvm_exec.sh pnpm ioc-generate --watch

# Starts React debug server
debug:
    ./nvm_exec.sh pnpm debug

# Builds React application
build:
    ./nvm_exec.sh pnpm build

ioc-generate:
    ./nvm_exec.sh pnpm ioc-generate

# Preview Vite build
preview:
    ./nvm_exec.sh pnpm preview

# Clean Vite cache
clean:
    rm -rf node_modules/.vite

# Styles files following prettier guidelines
prettier-fix:
    ./nvm_exec.sh pnpm prettier-fix

# Downloads schema and generates corresponding ts types
graphql-codegen:
    ./nvm_exec.sh pnpm graphql

# Runs E2E tests
e2e-run:
    ./nvm_exec.sh pnpm e2e:run

# Opens E2E tests UI
e2e-open:
    ./nvm_exec.sh pnpm e2e:open

# Commits changes using commitlint.
commit:
    ./nvm_exec.sh pnpm commit

# Proxy comand through nvm
nvm-exec command:
    ./nvm_exec.sh {{command}}