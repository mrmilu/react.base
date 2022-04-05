import "@/src/common/@types/react-i18next@types/react-i18next";
import type home from "../i18n/locales/en/home.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "home";
    resources: {
      home: typeof home;
    };
  }
}
