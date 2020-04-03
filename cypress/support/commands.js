// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("SignIn", () => {
    cy.visit('/#/login?_k=t8cok8')
    cy.title().should('eq', "Conduit")
    cy.location('protocol').should('eq', 'https:')
    cy.get('form').within(($form) => {
        cy.get('[placeholder="Email"]').type('rakic84@gmail.com')
        cy.get('[placeholder="Password"]').type('!@12qwaszx')
        cy.root().submit()
    })
    cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')
})
