# Run production build

First generate the dependency injection files:
```shell
just ioc-generate
```

Then generate the graphql types:
```shell
just graphql-codegen
```

Next run a production build:

```shell
just build
```

Finally execute the `vite preview` server:

```shell
just preview
```

This command uses under the hood the `vite preview` command. For more information refer to [Deploying a Static Site](https://vitejs.dev/guide/static-deploy.html#deploying-a-static-site) documentation where `vite preview` is explained.