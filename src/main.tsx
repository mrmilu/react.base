import type { IEnvVars } from "@/src/shared/domain/interfaces/env-vars";
import { locator } from "@/src/shared/ioc/__generated__";
import { TYPES } from "@/src/shared/ioc/__generated__/types";
import "@/src/shared/presentation/i18n/index";
import { router } from "@/src/shared/presentation/router/routes";
import "@/src/shared/presentation/utils/yup-extensions";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

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
