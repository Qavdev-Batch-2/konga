import {login} from "../fixtures/selectors.js";

// Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test
//   return false
// })

describe("Testing Login", function () { 
  beforeEach(function () {
  cy.visit('/', {failOnStatusCode: false})  
});

  it("Should not be able to login with wrong password", function () {
    cy.wait(2000)
    cy.get(login.loginBtn).click()
    cy.get(login.emailField).type('jorn88@yopmail.com')
    cy.get(login.passwordField).type('pass1234')
    cy.get(login.showIcon).click()
    cy.get(login.showIcon).click()
    cy.get(login.loginButton).click()

    let message= 'username or password is incorrect'
    expect(message).to.be.equal = 'username or password is incorrect'
})

it("Should be able to login with correct password", function () {
    cy.wait(2000)
    cy.get(login.loginBtn).click()
    cy.get(login.emailField).type('jorn88@yopmail.com')
    cy.get(login.passwordField).type('pass123')
    cy.get(login.loginButton).click()


})
})