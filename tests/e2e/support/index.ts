import "./commands";

/// <reference types="cypress" />
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(): void;

      logout(): void;

      dataCy(value: string, log?: boolean): Chainable<JQuery<HTMLElement>>;

      goToRoute(route: string): Chainable;
    }
  }
}
