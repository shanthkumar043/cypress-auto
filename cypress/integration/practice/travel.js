describe('validate tally group',()=>{

    it('vaidate footer links',()=>{

        cy.visit('https://www.tally.co/')
        cy.title().should('have','Tally Group - Leaders in Utility Tech Cloud Products')
        .url().should('have','co')
    })



})