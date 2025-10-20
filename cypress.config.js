const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        }
      });

      // Add test category metadata
      config.env.TEST_CATEGORIES = {
        UNIT: 'unit',
        INTEGRATION: 'integration',
        E2E: 'e2e'
      };

      config.env.TEST_PRIORITIES = {
        P0: 'critical',
        P1: 'high',
        P2: 'medium',
        P3: 'low'
      };

      return config;
    },
    specPattern: [
      'cypress/unit/**/*.cy.js',
      'cypress/integration/**/*.cy.js',
      'cypress/e2e/**/*.cy.js'
    ],
    testIsolation: true,
    experimentalRunAllSpecs: true
  },
  retries: {
    runMode: 2,
    openMode: 0
  },
  parallel: true,
  parallelization: {
    enabled: true,
    strategy: 'spec'
  }
});
