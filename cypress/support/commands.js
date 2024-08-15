Cypress.Commands.add("login", (login, password) => {
  cy.intercept("POST", "**/api/login**").as("postLogin");

  cy.visit("/login");

  cy.writeInput("input-text-login", login);
  cy.writeInput("input-text-password", password);

  cy.selectByAttribute("btn-primary")
    .click()
    .then(() => {
      cy.visit('');
      // cy.waitResponse("postLogin", 200);
    });
});

Cypress.Commands.add("logout", () => {
  cy.intercept("POST", "**/api/logout**").as("postLogout");

  cy.selectByAttribute("btn-logout")
    .click()
    .then(() => {
      cy.waitResponse("postLogout", 200);
    });
});

Cypress.Commands.add("writeInput", (input, value) => {
  cy.selectByAttribute(input).type(value);
});

Cypress.Commands.add("writesInputs", (fields) => {
  fields.forEach((element) => {
    if (element.select) {
      cy.selectByAttribute(element.field)
        .click()
        .then(() => {
          cy.get(".q-select q-item").contains(element.value).click();
        });
    } else {
      cy.writeInput(element.field, element.value);
    }
  });
});

Cypress.Commands.add("selectByAttribute", (field) => {
  cy.get(`[data-cy=${field}]`).should("be.visible");
});

Cypress.Commands.add("waitResponse", (response, statusCode) => {
  cy.wait("@" + response)
    .its("response.statusCode")
    .should("eq", statusCode);
});

Cypress.Commands.add("checkIfTextExists", (expectedText) => {
  cy.contains(expectedText).should("exist");
});

Cypress.Commands.add("checkIfTextNotExists", (expectedText) => {
  cy.contains(expectedText).should("not.exist");
});
