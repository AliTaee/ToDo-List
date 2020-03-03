/* eslint-env jest */

describe('Test Routing', () => {
  it('Go to about page thene return to home page', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About Todo List');
    cy.contains('Home').click();
  });
});
