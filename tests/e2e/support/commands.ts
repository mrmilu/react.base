Cypress.Commands.add("dataCy", (value: string) => {
  return cy.get(`[data-cy=${value}]`);
});

Cypress.Commands.add("goToRoute", (route = "") => {
  return cy.window().its("tgHistory").invoke("push", route);
});

Cypress.Commands.add("login", () => {
  cy.dataCy("login-btn").then((el) => {
    if (el.text().toLowerCase().includes("log in")) {
      el.trigger("click");
    }
  });
});

Cypress.Commands.add("logout", () => {
  cy.dataCy("login-btn").then((el) => {
    if (el.text().toLowerCase().includes("log out")) {
      el.trigger("click");
    }
  });
});
