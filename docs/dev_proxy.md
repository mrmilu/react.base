## Development Proxy

Due to the nature of front end development and their tooling (hot reload, bundlers, dependency installation)
most of the time our development server will run better in our local machines; in comparison with a docker environment.

If our external sources (backend) are in an online server o a local container some requests (auth for example)
can make it harder to work in with our project running in local environment.

To solve it in this boilerplate you will find a file named `src/setupProxy.js` that exports a module with the configuration
for the `http-proxy-middleware` package. This package is used on `express` servers to create a proxy pass. CRA (react-scripts) handles this by
attaching an `express` server when running the project in development mode and looking for the `src/setupProxy.js` file.

For more information regarding the **proxy** and the **middleware** package follow this links:

- [CRA Proxying](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually)
- [http-proxy-middleware package](https://github.com/chimurai/http-proxy-middleware)
