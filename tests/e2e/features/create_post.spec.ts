import { aliasMutation } from "../utils/graphql_test_utils";

describe("Create post", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.intercept("POST", "http://localhost:3000/s/graphql", (req) => {
      aliasMutation(req, "CreateDummyPost");
    });
  });

  it("should create post", () => {
    cy.goToRoute("create-post");
    cy.dataCy("create-post-btn").click();
    cy.wait("@gqlCreateDummyPostMutation").its("response.body.data.createPost.body").should("to.equal", "This is a cool body for post number 1");
  });
});
