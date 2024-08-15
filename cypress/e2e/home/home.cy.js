describe('SPEC - cypress/e2e/home/home.cy.js', () => {
  beforeEach(() => {
    cy.login(Cypress.env('CY_USER'), Cypress.env('CY_PASSWORD'))
  });
  context('', () => {
    it('IT - Home', () => {
      cy.log('Deu certo')
    })
  })
})
