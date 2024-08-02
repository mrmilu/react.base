import { aliasMutation } from "../utils/graphql-test-utils";

describe("Create post", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.intercept("POST", "http://localhost:3000/s/graphql", (req) => {
      aliasMutation(req, "CreatePost");
    });
  });

  it("should create post", () => {
    cy.visit("/create-post");
    cy.dataCy("create-post-btn").click();
    cy.wait("@gqlCreatePostMutation").its("response.body.data.createPost.body").should("to.equal", "This is a cool body for post number 1");
  });
});
