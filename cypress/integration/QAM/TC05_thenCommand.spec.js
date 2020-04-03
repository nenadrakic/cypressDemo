describe('Create and mark-unmark as favorite', () => {

    Cypress.config('pageLoadTimeout', 100000) //this is for this class only

    before(() => {
        cy.SignIn()
    })

    it('Create a post', () => {
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.hash().should('include', '#/editor')
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Test') //first element of the form!!!
            cy.get('input').eq(1).type('Test 1') //second element find by index!!!
            cy.get('textarea').last().type('Test 2')
            cy.contains('Publish Article').click()
        })
        cy.url().should('include', 'article')
    })

    it('Mark-unmark as faforite', () => {
        cy.get('ul.navbar-nav').children().contains('nenadrakic').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.get('button[class="btn btn-sm btn-primary"]').should('be.visible')
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.btn-primary').first().then(($btn)=>{
            const favCount =$btn.text()
            expect(parseInt(favCount)).to.eq(1)
        }).click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
    })
})