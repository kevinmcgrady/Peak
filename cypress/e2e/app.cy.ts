// todo: look in to SSR request interception.

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/', { failOnStatusCode: false });
    cy.intercept('GET', '*').as('ClerkGET');
    cy.intercept('POST', '*').as('ClerkPOST');
  });

  it('should display the navigation', () => {
    cy.get('a').contains('Peak');
    cy.get('a[href*="/basket"]');
    cy.get('a[href*="/"]');
    cy.get('a[href*="/sign-in"]').contains('Sign in');
    cy.get('#favoriteButton');
    cy.get('#notificationButton');
  });

  it('should navigate to the sign in page', () => {
    cy.get('a').contains('Sign in').click();
    cy.url().should('include', '/sign-in');
  });

  it('should disply the favorite popup', () => {
    cy.get('#favoriteButton').as('favoriteButton');

    cy.get('@favoriteButton').click();

    cy.get('h2').contains('Your favorites!').as('favotiteDialog');
    cy.get('p').contains(`You don't have any favorites yet!`);

    cy.get('#closeButton').click();
  });

  it('should display the notification popup', () => {
    cy.get('#notificationButton').as('notificationButton');

    cy.get('@notificationButton').click();

    cy.get('h2').contains('Your Notifications!').as('notificationDialog');
    cy.get('p').contains(`Your recent notifications`);

    cy.get('#closeButton').click();
  });

  it('should display hero video', () => {
    cy.get('h1').contains('Peak');
    cy.get('h2').contains('Find your next breathtaking taking moment');
  });

  it('should display Suitable options', () => {
    cy.get('h2').contains('Suitable options');
    cy.get('h3').contains('Recommended hotels in area');

    cy.get('h3').contains('Gostone');
  });

  it('should display the footer', () => {
    cy.get('p').contains('Find your next breathtaking moment');
    cy.get('p').contains('©Peak. All Rights Reserved. 2024');
  });
});
