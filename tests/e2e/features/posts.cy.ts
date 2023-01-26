describe("Visit posts page", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.intercept("GET", "posts", { fixture: "posts.json" }).as("getPosts");
  });

  it("should render post list", () => {
    cy.goToRoute("posts");
    cy.wait("@getPosts");
    cy.dataCy("posts-page").should("exist");
    cy.dataCy("posts-card").first().contains("h4", "This is a cool post title").should("exist");
  });
});
