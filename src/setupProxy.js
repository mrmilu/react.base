const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/s/graphql",
    createProxyMiddleware({
      target: `${process.env.REACT_APP_GRAPHQL_PROXY_ENDPOINT}/api`,
      changeOrigin: true,
      pathRewrite: { "^/s/graphql/": "" },
      logLevel: "debug"
    })
  );
  app.use(
    "/rest",
    createProxyMiddleware({
      target: `${process.env.REACT_APP_REST_PROXY_ENDPOINT}`,
      changeOrigin: true,
      pathRewrite: { "^/rest": "" },
      logLevel: "debug"
    })
  );
};
