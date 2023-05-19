import LoginPage from "../Pages/LoginPage"
import HomePage from "../Pages/HomePage"

describe('Home page ', () => {

    beforeEach(() => {
        cy.fixture('HomepageTestData.json').as('homepageData')
    })
     
    it('Verify invalid UserName error message', () => {
        //navigating to www.southwest.com
        //baseURL configured in cypress.config.js 
        cy.visit('/')
        cy.get('@homepageData').then((data)=>{
        //using explicit wait from custom commands.js
        cy.waitToBeVisibleBySec( HomePage.loginBtnString, 4)
        //interacting with WebElement, calling from HomePage.js
        HomePage.loginBtn.click()
        
        const username = Cypress.env('username')
        const password = Cypress.env('password')

        LoginPage.userInputFld.type(username)
        LoginPage.passwordInputFld.type(password)

        LoginPage.loginNextBtn.click()
        
        cy.getText(LoginPage.invalidUserErrMessage).should('contain', data.Errors[0].loginErrorMessage)
        })

    })

    it ('Verify Book link list in home page', () => {
        const webOptionList = []
        cy.visit('/')

        cy.get('@homepageData').then((data) => {
            const optionsCount = data.LinkOptions[0].options.length
            cy.log("Here: "+optionsCount)
            //Verifying the number of items in each array matches
            HomePage.optionsList.should('have.length', optionsCount)
            //Looping thought the webelement list,extracting the text and pushing it to an array 
            HomePage.optionsList.each(($el) => {
                webOptionList.push($el.text().trim())
            }).then(() => {  
                
                //passing function and then comparing items from list A to List B
                data.LinkOptions[0].options.forEach(item => {
                    cy.contains(item).should('be.visible');
                    // expect(webOptionList).to.include(item) //This is asserting using chai
                })
            })


        })


    })

})
