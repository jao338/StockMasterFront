Cypress.Commands.add('writeInput', (input, value) => {
  cy.selectByAttribute(input).type(value);
});

Cypress.Commands.add('login', () => {
  cy.visit(Cypress.env('APP_URL') + '/login');
  cy.intercept('POST', '**/api/login**').as('postLogin');

  cy.writeInput('input-login', Cypress.env('CY_USER'));
  cy.writeInput('input-password', Cypress.env('CY_PASSWORD'));

  cy.selectByAttribute('btn-primary').click().then(() => {
    cy.waitResponse('postLogin', 200);
  })

});

Cypress.Commands.add('selectByAtribute', (input, value) => {
  cy.get(`data-cy=${input}`).should('be.visible').type(value);
});

Cypress.Commands.add('waitResponse', (response, statusCode) => {
  cy.wait("@" + response).its('response.statusCode').should('eq', statusCode);
})
