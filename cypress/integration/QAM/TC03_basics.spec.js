//const last = require("cypress/types/lodash/last")

describe('Create and mark-unmark as favorite', () => {
    it('Sign in', () => {
        cy.visit('https://react-redux.realworld.io/#/login?_k=t8cok8')
        cy.title().should('eq', "Conduit")
        cy.location('protocol').should('eq', 'https:')
        // cy.get('[placeholder="Email"]').type('rakic84@gmail.com')
        // cy.get('[placeholder="Password"]').type('!@12qwaszx')
        // cy.get('.btn').contains('Sign in').should('be.visible').click();

        cy.get('form').within(($form) => {
            cy.get('[placeholder="Email"]').type('rakic84@gmail.com')
            cy.get('[placeholder="Password"]').type('!@12qwaszx')
            cy.root().submit()
        })

        cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')
    })
    it('Create a post', () => {
        //cy.contains('New Post', {timeout:10000}).click()
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.hash().should('include', '#/editor')
        //cy.location('hash').should('include','#/editor')
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Test') //first element of the form!!!
            cy.get('input').eq(1).type('Test 1') //second element find by index!!!
            cy.get('textarea').last().type('Test 2')
            cy.contains('Publish Article').click()
        })
        cy.url().should('include', 'article')
    })

    it('Mark-unmark as faforite', () => {
        //cy.get('.nav-link').contains('nenadrakic').click()
        cy.get('ul.navbar-nav').children().contains('nenadrakic').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.get('button[class="btn btn-sm btn-primary"]').should('be.visible')
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart', { timeout: 10000 }).first().click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
        //cy.go('-1')

    })
})