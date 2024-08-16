const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  viewportWidth: 1600,
  viewportHeight: 900,
  retries: { runMode: 1, openMode: 0 },
  e2e: {
    baseUrl: "http://localhost:9000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      CY_USER: "admin",
      CY_PASSWORD: "issoaquisupostamenteeumasenhamastosemideia",
      CY_URL: "http://localhost:9000",
    },
  },
});
