import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: "tests/e2e/fixtures",
  downloadsFolder: "tests/e2e/downloads",
  fileServerFolder: "tests/e2e/features",
  screenshotsFolder: "tests/e2e/screenshots",
  videosFolder: "tests/e2e/videos",
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    specPattern: "tests/e2e/features/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "tests/e2e/support/index.ts"
  }
});
