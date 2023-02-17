// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import svgr from "vite-plugin-svgr";
import graphql from "@rollup/plugin-graphql";

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return defineConfig({
    plugins: [
      svgr({
        svgrOptions: {
          dimensions: false,
          svgoConfig: {
            plugins: [{ name: "removeViewBox", active: false }]
          }
        }
      }),
      graphql(),
      react({
        babel: {
          plugins: [
            "babel-plugin-transform-typescript-metadata",
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            "@babel/plugin-proposal-class-properties",
            [
              "styled-components",
              {
                ssr: false,
                displayName: true,
                preprocess: false
              }
            ]
          ],
          parserOpts: {
            plugins: ["decorators-legacy", "classProperties"]
          }
        }
      })
    ],
    resolve: {
      alias: [
        { find: "@/src", replacement: path.resolve(__dirname, "src") },
        {
          find: "@/ioc",
          replacement: path.resolve(__dirname, "src/common/ioc")
        }
      ]
    },
    server: {
      port: 3000,
      proxy: {
        "/s/graphql": {
          target: `${process.env.VITE_APP_GRAPHQL_PROXY_ENDPOINT}/api`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/s\/graphql\//, "")
        },
        "/rest": {
          target: `${process.env.VITE_APP_REST_PROXY_ENDPOINT}`,
          changeOrigin: true,
          rewrite: (path) => {
            console.log(path);
            return path.replace(/^\/rest/, "");
          }
        }
      }
    }
  });
};
