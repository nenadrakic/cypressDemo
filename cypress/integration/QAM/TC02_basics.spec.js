describe('Create and mark-unmark as favorite', ()=>{
    it('Sign in', ()=>{
        cy.visit('https://react-redux.realworld.io/#/login?_k=t8cok8')
        cy.title().should('eq', "Conduit")
        cy.location('protocol').should('eq', 'https:')
        cy.get('[placeholder="Email"]').type('rakic84@gmail.com')
        cy.get('[placeholder="Password"]').type('!@12qwaszx')
        cy.get('.btn').contains('Sign in').should('be.visible').click();
        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
    })
    it('Create a post', ()=>{
        cy.contains('New Post', {timeout:10000}).click()
        cy.hash().should('include','#/editor')
        //cy.location('hash').should('include','#/editor')
        cy.get('input[placeholder="Article Title"]').type('Test')
        cy.get('input[placeholder="What\'s this article about\?"]').type('Test 1')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test 2')
        cy.contains('Publish Article').click()
        cy.url().should('include', 'article')
    })

    it('Mark-unmark as faforite', function(){
        cy.get('.nav-link').contains('nenadrakic').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.get('button[class="btn btn-sm btn-primary"]').should('be.visible')
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        cy.get('.ion-heart',{timeout:10000}).click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
        //cy.go('-1')

    })
})