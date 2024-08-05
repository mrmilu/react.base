import { aliasQuery } from "../utils/graphql-test-utils";

describe("Visit users page", () => {
  beforeEach(() => {
    cy.intercept("POST", "http://localhost:3000/s/graphql", (req) => {
      aliasQuery(req, "Users");
    });
    cy.visit("/");
    cy.login();
    cy.get("[href='/users']").click();
  });

  after(() => {
    cy.logout();
  });

  it("should visit page", () => {
    cy.wait("@gqlUsersQuery");
    cy.dataCy("users-page").should("exist");
  });

  it("should open user modal", () => {
    cy.dataCy("user-card").first().click();
    cy.wait(500);
    cy.dataCy("user-modal").should("be.visible");
    cy.dataCy("user-modal").contains("Name").should("exist");
    cy.dataCy("modal-close").click();
    cy.wait(500);
    cy.dataCy("user-modal").should("not.exist");
  });
});
