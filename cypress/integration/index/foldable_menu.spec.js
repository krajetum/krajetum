/// <reference types="cypress" />

context('Actions', () => {


  // https://on.cypress.io/interacting-with-elements

  it('folds the menu in small screen', () => {
    // https://on.cypress.io/type
    cy.visit('http://localhost:3000')

    cy.get('#menu')
      .click()

    cy.get('.nav-items')
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .should('be.visible')

    cy.get('#menu')
      .click()

    cy.get('.nav-items')
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .should('be.visible')


  })

})
