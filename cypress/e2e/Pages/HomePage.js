class HomePage {

  get optionsList() {
    return cy.get('.actionable-tab--content')
  }
  get loginBtn() {
    return cy.get(this.loginBtnString) //could add ".eq(1)" at the end to call on the first element if there were more than 1
  }
  get loginBtnString() {
    return '.header-control--login-button-trigger .actionable '
    }
}

export default new HomePage()
