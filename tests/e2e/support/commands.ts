Cypress.Commands.add("dataCy", (value: string, log = true) => {
  return cy.get(`[data-cy=${value}]`, { log });
});

Cypress.Commands.add("login", () => {
  cy.dataCy("login-btn", false).then((el) => {
    // here perform login actions either by ui o cy.request
    if (el.first().text().toLowerCase().includes("log in")) {
      el.first().trigger("click");
    }
  });
  Cypress.log({
    name: "Log in",
    displayName: "Log in"
  });
});

Cypress.Commands.add("logout", () => {
  cy.dataCy("login-btn", false).then((el) => {
    // here perform logout actions either by ui o cy.request
    if (el.first().text().toLowerCase().includes("log out")) {
      el.first().trigger("click");
    }
  });
  Cypress.log({
    name: "Log out",
    displayName: "Log out"
  });
});
