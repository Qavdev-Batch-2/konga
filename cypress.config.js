const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://www.konga.com/",
    "defaultCommandTimeout": 80000, 
    "pageLoadTimeout": 60000,
    "watchForFileChanges": true,
    // "viewportHeight": 800, 
    // "viewportWidth": 1500,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
