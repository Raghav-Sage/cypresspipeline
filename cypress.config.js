
const { defineConfig } = require("cypress");
const fs = require('fs');

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,
  screenshotsFolder: 'cypress/reports/screenshots/ZA_screenshots',
  trashAssetsBeforeRuns: true, // Optional: clear previous videos
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'SBCP ZA Cypress test report',
    reportDir: 'cypress/reports/ZA_report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  defaultCommandTimeout: 10000,
  env : {
    url: "https://sbcpayroll-za-dev.sagedatacloud.com/",
    email: "kyrpton23_1_9@sage.mailinator.com",
    password: "Password321"
  },
  e2e: {
    testIsolation: false,
        }
    });
  
