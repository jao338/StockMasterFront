import { fields } from '../../support/util/dataLogin'

describe('SPEC - cypress/e2e/auth/login.cy.js', () => {
  context('', () => {
    it('IT - Login', () => {
      cy.login(fields)
    })
  })
})
