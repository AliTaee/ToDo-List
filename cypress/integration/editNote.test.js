const noteTitle = 'Learning e2e';
const textTitle = 'e2e description';
const newTitle = 'Learning Vue';
const newDesc =
  'Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web. ';

beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});

describe('Go to home page', () => {
  it('Go to home page', () => {
    cy.visit('/');
  });

  it('On home page we must have a Add Note title', () => {
    cy.contains('Add Note');
  });
});

describe('Creating a note with a title and a description.', () => {
  it('Type a title', () => {
    cy.contains('Add Note');
    cy.get('[data-test=note-title]')
      .type(noteTitle)
      .should('have.value', noteTitle);
  });

  it('Type a description', () => {
    cy.get('[data-test=note-desc]')
      .type(textTitle)
      .should('have.value', textTitle);
  });

  it('Click on submit', () => {
    cy.get('[data-test=submit-note]').click();
  });

  it('App should have a note text: Learning e2e', () => {
    cy.contains(noteTitle);
  });

  it('Note list should have one node', () => {
    cy.get('[data-test=note-item]').should('have.length', 1);
  });
});

describe('Edit Note.', () => {
  it('Click on edit note', () => {
    cy.get('[aria-label=edit]').click();
  });

  it('We should have edit note title', () => {
    cy.contains('Edit Note');
  });

  it('Test showing an editing note title must be in place thene type a new title', () => {
    cy.get('[data-test=note-title]')
      .should('have.value', noteTitle)
      .clear()
      .type(newTitle);
  });

  it('Test showing an editing note description must be in place thene type a new desc', () => {
    cy.get('[data-test=note-desc]')
      .should('have.value', textTitle)
      .clear()
      .type(newDesc);
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

describe('Test change new title and cy', () => {
  it('Click on edit note', () => {
    cy.get('[aria-label=edit]').click();
  });

  it('The new title must be in place', () => {
    cy.get('[data-test=note-title]').should('have.value', newTitle);
  });

  it('The new description must be in place', () => {
    cy.get('[data-test=note-desc]').should('have.value', newDesc);
  });
});

describe('Test clear button on form', () => {
  it('Click on clear note', () => {
    cy.get('[data-test=submit-clear]').click();
  });

  it('Title must be empty', () => {
    cy.get('[data-test=note-title]').should('have.value', '');
  });

  it('Description must be empty', () => {
    cy.get('[data-test=note-desc]').should('have.value', '');
  });
});

describe('Test editing note URL (URL must be sharable).', () => {
  it('Reload page', () => {
    cy.reload();
  });

  it('After reload page title and description must be in place', () => {
    cy.get('[data-test=note-title]').should('have.value', newTitle);
    cy.get('[data-test=note-desc]').should('have.value', newDesc);
  });
});
