# Development Proxy

Due to the nature of front end development and their tooling (hot reload, bundlers, dependency installation)
most of the time our development server will run better in our local machines; in comparison with a docker environment.

If our external resources (backend) are on internet or in a local docker container it can problematic to work with our project running on our local machine directly.

To make it easier and solve possible communication errors with the backend in this boilerplate you will find that in the `vite.config.js` file there is a proxy server configured.

For more information regarding the **proxy** follow [this link](https://vitejs.dev/config/server-options.html#server-proxy)
