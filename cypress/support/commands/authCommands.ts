/// <reference types="cypress" />

Cypress.Commands.add(`signout`, () => {
  cy.log(`sign out by clearing all cookies.`);
  cy.clearCookies({ domain: undefined });
});

Cypress.Commands.add(`signin`, () => {
  cy.log(`Signing in.`);
  cy.visit(`/`, { failOnStatusCode: false });

  cy.window()
    .should((window) => {
      expect(window).to.not.have.property(`Clerk`, undefined);
      // @ts-ignore
      expect(window.Clerk.isReady()).to.eq(true);
    })
    .then(async (window) => {
      // @ts-ignore
      cy.clearCookies({ domain: window.location.domain });

      // @ts-ignore
      const res = await window.Clerk.client.signIn.create({
        identifier: Cypress.env(`emailAddress`),
        password: Cypress.env(`password`),
      });

      // @ts-ignore
      await window.Clerk.setActive({
        session: res.createdSessionId,
      });

      cy.log(`Finished Signing in.`);
    });
});

declare global {
  namespace Cypress {
    interface Chainable {
      signout(): Chainable<void>;
      signin(): Chainable<void>;
    }
  }
}

export {};
