default:
  just --list

# Enables corepack in node
corepack-enable:
    ./nvm_exec.sh corepack enable

# Installs project package.json dependencies
install-deps:
    ./nvm_exec.sh yarn

# Starts React development server
dev:
    ./nvm_exec.sh yarn dev

# Starts React debug server
debug:
    ./nvm_exec.sh yarn debug

# Builds React application
build:
    ./nvm_exec.sh yarn build

# Preview Vite build
preview:
    ./nvm_exec.sh yarn preview

# Clean Vite cache
clean:
    rm -rf node_modules/.vite

# Downloads schema and generates corresponding ts types
graphql-codegen:
    ./nvm_exec.sh yarn graphql

# Runs E2E tests
e2e-run:
    ./nvm_exec.sh yarn e2e:run

# Opens E2E tests UI
e2e-open:
    ./nvm_exec.sh yarn e2e:open

# Proxy comand through nvm
nvm-exec command:
    ./nvm_exec.sh {{command}}