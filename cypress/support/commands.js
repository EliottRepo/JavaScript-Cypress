
Cypress.Commands.add('getText', (element) => {
    return element.invoke('text');
  });
  
  Cypress.Commands.add('waitToBeVisibleBySec', (elementString, sec) => {
    return cy.get(elementString, { timeout: sec * 1000 }).should('be.visible');
  });
  