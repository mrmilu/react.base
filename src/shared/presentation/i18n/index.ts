import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n
  .use(
    resourcesToBackend((language, namespace, callback) => {
      import(`./locales/${language}/${namespace}.json`)
        .then(({ default: resources }) => {
          callback(null, resources);
        })
        .catch((error) => {
          callback(error, null);
        });
    })
  )
  .use(initReactI18next)
  .init({
    ns: ["home"],
    returnNull: false,
    defaultNS: "home",
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
