describe('signed-out', () => {
  it('should redirect to the signin page', () => {
    cy.visit('/dashboard', { failOnStatusCode: false });
    cy.get('h1').contains('Sign in');
  });
});

describe('signed-in', () => {
  beforeEach(() => {
    cy.session('signed-in', () => {
      cy.signin();
    });
  });

  it('should allow access to the dashboard', () => {
    cy.visit('/dashboard', { failOnStatusCode: false });
    cy.get('div').contains('Dashboard');
  });
});
