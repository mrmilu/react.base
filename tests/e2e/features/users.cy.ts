import { aliasQuery } from "../utils/graphql_test_utils";

describe("Visit posts page", () => {
  before(() => {
    cy.visit("/");
    cy.login();
  });

  beforeEach(() => {
    cy.intercept("POST", "http://localhost:3000/s/graphql", (req) => {
      aliasQuery(req, "Users");
    });
  });

  after(() => {
    cy.visit("/");
    cy.logout();
  });

  it("should visit page", () => {
    cy.visit("/users");
    cy.wait("@gqlUsersQuery");
    cy.dataCy("posts-page").should("exist");
  });

  it("should open user modal", () => {
    cy.dataCy("posts-card").first().click();
    cy.wait(500);
    cy.dataCy("modal").should("be.visible");
    cy.dataCy("user-modal").contains("Name").should("exist");
    cy.dataCy("modal-close").click();
    cy.wait(500);
    cy.dataCy("modal").should("not.exist");
  });
});
