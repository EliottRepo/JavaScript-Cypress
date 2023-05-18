

//  imports the commands.js file into your Cypress test environment. 
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => {
    // prevent Cypress from failing the test
    return false
  })
  