const { ESLINT_MODES } = require("@craco/craco");
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        tsConfigPath: "./tsconfig.paths.json"
      }
    }
  ],
  eslint: {
    mode: ESLINT_MODES.file
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.ignoreWarnings = [/Failed to parse source map/]; // this avoids inversify missing source map warnings
      return webpackConfig;
    }
  },
  babel: {
    plugins: [
      "import-graphql",
      [
        "inline-react-svg",
        {
          svgo: {
            plugins: [{ name: "removeViewBox", active: false }]
          }
        }
      ],
      "babel-plugin-transform-typescript-metadata",
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      [
        "styled-components",
        {
          ssr: false,
          displayName: true,
          preprocess: false
        }
      ]
    ]
  }
};
