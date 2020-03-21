describe('Test Create Note', () => {
  it('Should Go to home page', () => {
    cy.visit('/');
  });

  describe('Test Creating a note with a title and a description.', () => {
    const noteTitle = 'Learning e2e';
    const textTitle = 'e2e description';

    it('Should Type a title', () => {
      cy.contains('Add Note');
      cy.get('[data-test=note-title-input]')
        .type(noteTitle)
        .should('have.value', noteTitle);
    });

    it('Should Type a description', () => {
      cy.get('[data-test=note-desc]')
        .type(textTitle)
        .should('have.value', textTitle);
    });

    it('Should Click on submit', () => {
      cy.get('[data-test=submit-note]').click();
    });

    it('Should App have a note text: Learning e2e', () => {
      cy.contains(noteTitle);
    });

    it('Should Note list have one node', () => {
      cy.get('[data-test=note-item]').should('have.length', 1);
    });
  });

  describe('Test Creating a note with just a title.', () => {
    const noteTitle = 'Learning Unit Testing';

    it('Should Type a title', () => {
      cy.contains('Add Note');
      cy.get('[data-test=note-title-input]')
        .type(noteTitle)
        .should('have.value', noteTitle);
    });

    it('Should description field is Empty', () => {
      cy.get('[data-test=note-desc]').should('have.value', '');
    });

    it('Should Click on submit', () => {
      cy.get('[data-test=submit-note]').click();
    });

    it('Should App have a note text: Learning Unit Testing', () => {
      cy.contains(noteTitle);
    });

    it('Should Note list have two node', () => {
      cy.get('[data-test=note-item]').should('have.length', 2);
    });
  });

  describe('Test Creating a note without a title (validation test).', () => {
    it('Should Click on submit', () => {
      cy.get('[data-test=submit-note]').click();
    });

    it('Should Input title have error', () => {
      cy.get('[aria-invalid=true]');
    });

    it('Should Note list still have two node', () => {
      cy.get('[data-test=note-item]').should('have.length', 2);
    });
  });
});
