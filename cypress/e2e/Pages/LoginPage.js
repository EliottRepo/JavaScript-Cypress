class LoginPage {
   
   get invalidUserErrMessage() {
    return cy.get('.swa-g-error').should('be.visible')
    }
  
    
   get userInputFld() {
      return cy.get(this.userInputFldString)
    }
    get userInputFldString() {
      return '.login-form--username input'
    }
    get passwordInputFld() {
      return cy.get(this.passwordInputFldString)
    }
    get passwordInputFldString() {
      return '.login-form--password input'
    }
    get loginNextBtn() {
      return cy.get('#login-form--submit-button')
      }
  }
  
  export default new LoginPage()
  