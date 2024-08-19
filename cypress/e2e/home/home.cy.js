import { fields } from '../auth/util/dataLogin'

describe('SPEC - cypress/e2e/home/home.cy.js', () => {
  beforeEach(() => {
    cy.login(fields)
  });
  context('', () => {
    it('Navegate', () => {
      cy.log('Deu certo')
    })
  })
})
