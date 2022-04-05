## Development Proxy

Due to the nature of front end development and their tooling (hot reload, bundlers, dependency installation)
most of the time our development server will run better in our local machines; in comparison with a docker environment.

If our external sources (backend) are in an online server o a local container some requests (auth for example)
can make it harder to work in our local machine.

To solve this in this boilerplate you will find that **proxies** are configured through the **rewrites** option
given by `next.conifg.js` file.

In the **rewrites** property you will find that some relative endpoints will be matched to our external sources
only when we are working in a dev environment (`NODE_ENV !== production`). As our external resources'
environment variables will not be pointing to the real source while we develop to make proxies work they
should point to `localhost:3000`. This way Next server will match our outgoing requests to our relatives
paths declared in `next.config.js`.

For mor info in rewrites go [here](https://nextjs.org/docs/api-reference/next.config.js/rewrites)
