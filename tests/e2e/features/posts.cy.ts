describe("Visit posts page", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.intercept("GET", "rest/posts", { fixture: "posts.json" }).as("getPosts");
  });

  it("should render post list", () => {
    cy.visit("/posts");
    cy.wait("@getPosts");
    cy.dataCy("posts-page").should("exist");
    cy.dataCy("post-card").first().contains("h4", "This is a cool post title").should("exist");
  });
});
