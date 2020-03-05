/* eslint-env jest */

describe('Go to home page', () => {
  it('Go to home page', () => {
    cy.visit('/');
  });

  it('On home page we must have a Add Note title', () => {
    cy.contains('Add Note');
  });
});

describe('Test having no notes on the list', () => {
  it('showing a proper message.', () => {
    cy.contains('No notes yet.');
  });
});

describe('Create a multi note fot test', () => {
  const noteTitle = 'test title';
  const descTitle = 'test desc note';

  // Create 3 sample note test
  for (let index = 1; index <= 5; index++) {
    it('Type a title', () => {
      cy.get('[data-test=note-title]')
        .type(`${noteTitle}-${index}`)
        .should('have.value', `${noteTitle}-${index}`);
    });

    it('Type a description', () => {
      cy.get('[data-test=note-desc]')
        .type(`${descTitle}-${index}`)
        .should('have.value', `${descTitle}-${index}`);
    });

    it('Click on submit', () => {
      cy.get('[data-test=submit-note]').click();
    });

    it(`App should have a note title: ${noteTitle}-${index}`, () => {
      cy.contains(`${noteTitle}-${index}`);
    });

    it('Note should have a date', () => {
      cy.get('[data-test=note-date]').should('have.length', index);
    });

    it('Note should have a delete and edit button', () => {
      cy.get('[aria-label=delete]').should('have.length', index);
      cy.get('[aria-label=edit]').should('have.length', index);
    });
  }
});

describe('Testing Edit note', () => {
  it('Click on edit note', () => {
    cy.get('[aria-label=edit]')
      .first()
      .click();
  });

  const newTitle = 'Learning Vue';

  it('Clear a note title and type new title', () => {
    cy.get('[data-test=note-title]')
      .clear()
      .type(newTitle)
      .should('have.value', newTitle);
  });

  it('Clear a desc title and type new desc', () => {
    const desc =
      'Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web. ';
    cy.get('[data-test=note-desc]')
      .clear()
      .type(desc)
      .should('have.value', desc);
  });

  it('Save edited note', () => {
    cy.get('[data-test=submit-note]').click();
  });

  it('Edited note must have a new title in list.', () => {
    cy.get('[data-test=note-item]')
      .first()
      .contains(newTitle);
  });
});

describe('Test selecting one or multiple notes.', () => {
  it('Check every note on list notes', () => {
    cy.get('[data-test=note-check]')
      .check()
      .should('be.checked');
  });

  it('Un check every note on list notes', () => {
    cy.get('[data-test=note-check]').uncheck();
  });
});

describe('Testing Delete note.', () => {
  it('Delete one note', () => {
    cy.get('[aria-label=delete]')
      .first()
      .click();
  });

  it('Note list should have 4 note.', () => {
    cy.get('[data-test=note-item]').should('have.length', 4);
  });
});

describe('Testing Delete some note.', () => {
  it('Check some note on list notes', () => {
    cy.get('[data-test=note-list] ul li:nth-child(odd) [data-test=note-check]')
      .check()
      .should('be.checked');
  });

  it('Delete notes', () => {
    cy.get('[data-test=delete-notes]').click();

    cy.get('[data-test=confirm-delete-notes]').click();
  });

  it('Note list should have 2 note.', () => {
    cy.get('[data-test=note-item]').should('have.length', 2);
  });
});

describe('Testing Delete All note.', () => {
  it('Check every note on list notes', () => {
    cy.get('[data-test=note-check]')
      .check()
      .should('be.checked');
  });

  it('Delete notes', () => {
    cy.get('[data-test=delete-notes]').click();

    cy.get('[data-test=confirm-delete-notes]').click();
  });

  describe('Test having no notes on the list', () => {
    it('showing a proper message.', () => {
      cy.contains('No notes yet.');
    });
  });
});
