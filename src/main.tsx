import React, { StrictMode } from "react";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@/src/ui/i18n/index";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { locator } from "@/src/core/app/ioc/__generated__";
import type { IEnvVars } from "@/src/core/app/domain/interfaces/env_vars";
import { TYPES } from "@/src/core/app/ioc/__generated__/types";
import "@/src/common/utils/yup_extensions";
import { router } from "@/src/ui/router/routes";

if (locator.get<IEnvVars>(TYPES.IEnvVars).sentryEnabled) {
  Sentry.init({
    dsn: locator.get<IEnvVars>(TYPES.IEnvVars).sentryDSN || "https://examplePublicKey@o0.ingest.sentry.io/0",
    integrations: [new BrowserTracing()],
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0
  });
}

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(
  // Un comment strict mode when libraries like redux and react spring support react 18v in a stable way
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
