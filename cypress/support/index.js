import './commands'
cy.faker = require('faker');
// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
const clear = Cypress.LocalStorage.clear

Cypress.LocalStorage.clear = function (keys, ls, rs) {
  
  if (keys && keys.length == 0) {
    keys = Object.keys(localStorage);
  }

  Cypress.Cookies.defaults({
    whitelist: ['apiToken', 'pactozw', 'moduleName']
  })
  keys = keys.filter(function (i) { return whitelist.indexOf(i) < 0; });
  
  return clear.apply(this, arguments)

}
