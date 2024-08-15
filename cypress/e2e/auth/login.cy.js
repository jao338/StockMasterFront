describe('SPEC - cypress/e2e/auth/login.cy.js', () => {
  context('', () => {
    it('IT - Login', () => {
      cy.login(Cypress.env('CY_USER'), Cypress.env('CY_PASSWORD'))
    })
  })
})
