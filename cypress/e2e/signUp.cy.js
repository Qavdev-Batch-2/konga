import {signUp} from "../fixtures/selectors.js";

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe("Testing Signup", function () { 
  beforeEach(function () {
  cy.visit('/')   
});



  it("Should be able to signup", function () { 
    //Testing to signup with a valid name
    cy.wait(2000)
    cy.get(signUp.signupBtn).click()
    cy.wait(2000)
    cy.get(signUp.iDontHaveAnAccount).click()
    cy.wait(2000)
    cy.get(signUp.nameField).click()
    cy.get(signUp.nameText).type('Ifeanyi')
    cy.get(signUp.lastnameField).type('Chimezie')
    cy.get(signUp.emailField).type('jorn88@yopmail.com')
    cy.get(signUp.phonefield).type('09040544981')
    cy.get(signUp.passwordField).type('pass123')
    cy.get(signUp.createAccountBtn).click()
    cy.wait(3000)
    //Pass Pin
    cy.get(signUp.passPin,{force: true}).type('0010')
    cy.get(signUp.submitCode).click()
})
})
 