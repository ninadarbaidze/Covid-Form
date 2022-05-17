/// <reference types="cypress" />

// cypress/plugins/index.js
module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config);
  // tell Cypress to use .babelrc file
  // and instrument the specs files
  // only the extra application files will be instrumented
  // not the spec files themselves
  on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

  return config;
};
