# Dev environment setup

## Requirements
These are the requirements to run a development environment:

- [nvm](https://github.com/nvm-sh/nvm) (Node version manager)
- [just](https://github.com/casey/just)

## Steps

1. Run the following command to install the node version declared in the `.nvmrc` file for this project:

    ```shell
    nvm install
    ```

2. Enable [corepack](https://github.com/nodejs/corepack) so the correct
version of [pnpm](https://pnpm.io/motivation) is used.

    ```shell
    just corepack-enable
    ```

3. Install the project dependencies.

    ```shell
    just install-deps
    ```

4. Generate the GQL schemas.

    ```shell
    just graphql-codegen
    ```