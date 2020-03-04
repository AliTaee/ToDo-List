/* eslint-env jest */

describe('Create Note test', () => {
  it('Go to home page', () => {
    cy.visit('/');
  });

  describe('Creating a note with a title and a description.', () => {
    const noteTitle = 'Learning e2e';
    const textTitle = 'e2e description';

    it('Type a title', () => {
      cy.contains('Add Note');
      cy.get('#title-task')
        .type(noteTitle)
        .should('have.value', noteTitle);
    });

    it('Type a description', () => {
      cy.get('#content-task')
        .type(textTitle)
        .should('have.value', textTitle);
    });

    it('Click on submit', () => {
      cy.contains('Create Note').click();
    });

    it('App should have a note text: Learning e2e', () => {
      cy.contains(noteTitle);
    });

    it('Note list should have one node', () => {
      cy.get('.note-list')
        .children()
        .should('have.length', 1);
    });
  });

  describe('Creating a note with just a title.', () => {
    const noteTitle = 'Learning Unit Testing';

    it('Type a title', () => {
      cy.contains('Add Note');
      cy.get('#title-task')
        .type(noteTitle)
        .should('have.value', noteTitle);
    });

    it('Click on submit', () => {
      cy.contains('Create Note').click();
    });

    it('App should have a note text: Learning Unit Testing', () => {
      cy.contains(noteTitle);
    });

    it('Note list should have two node', () => {
      cy.get('.note-list')
        .children()
        .should('have.length', 2);
    });
  });

  describe('Creating a note without a title (validation test).', () => {
    it('Click on submit', () => {
      cy.contains('Create Note').click();
    });

    it('Should have error class', () => {
      cy.get('.Mui-error');
    });

    it('Note list still should have two node', () => {
      cy.get('.note-list')
        .children()
        .should('have.length', 2);
    });
  });
});
