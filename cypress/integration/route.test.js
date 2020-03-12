describe('Test Routing', () => {
  it('Should Go to about page then return to home page', () => {
    cy.visit('/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About Todo List');
    cy.contains('Home').click();
  });
});
