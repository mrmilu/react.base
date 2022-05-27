describe("Visit dummy page", () => {
  it("should visit page", () => {
    cy.visit("/");
    cy.login();
    cy.wait(3600);
    cy.goToRoute("dummy");
    cy.wait(3600);
    cy.dataCy("dummy-page").should("exist");
    cy.wait(3600);
    cy.logout();
  });
});
