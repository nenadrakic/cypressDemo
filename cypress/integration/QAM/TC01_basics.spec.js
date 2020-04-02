
describe('Login', ()=>{
    it('Sign in', ()=>{
        cy.visit('https://react-redux.realworld.io/#/login?_k=t8cok8')
        cy.get('[placeholder="Email"]').type('rakic84@gmail.com')
        cy.get('[placeholder="Password"]').type('!@12qwaszx')
        cy.get('.btn').contains('Sign in').should('be.visible').click();
    })

})