declare namespace Cypress {
    interface Chainable<Subject> {
        getText(element: any): Chainable<any>
        waitToBeVisibleBySec(elementString: any, sec: any): Chainable<any>
  }
}