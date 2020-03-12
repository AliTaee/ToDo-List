describe('Test Edit Note', () => {
  const noteTitle = 'Learning e2e';
  const textTitle = 'e2e description';
  const newTitle = 'Learning Vue';
  const newDesc =
    'Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web. ';
  let LOCAL_STORAGE_MEMORY = {};

  beforeEach(() => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
      localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
  });

  afterEach(() => {
    Object.keys(localStorage).forEach(key => {
      LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
  });

  describe('Test Go to home page', () => {
    it('Should Go to home page', () => {
      cy.visit('/');
      cy.clearLocalStorage();
    });

    it('Should have a Add Note title', () => {
      cy.contains('Add Note');
    });
  });

  describe('Test Creating a note with a title and a description.', () => {
    it('Should Type a title', () => {
      cy.contains('Add Note');
      cy.get('[data-test=note-title]')
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

    it('Should App should have a note text: Learning e2e', () => {
      cy.contains(noteTitle);
    });

    it('Should Note list have one node', () => {
      cy.get('[data-test=note-item]').should('have.length', 1);
    });
  });

  describe('Test Edit Note.', () => {
    it('Should Click on edit note', () => {
      cy.get('[data-test=note-edit]').click();
    });

    it('Should have edit note title', () => {
      cy.contains('Edit Note');
    });

    it('Should showing an editing note title must be in place thene type a new title', () => {
      cy.get('[data-test=note-title]')
        .should('have.value', noteTitle)
        .clear()
        .type(newTitle);
    });

    it('Should showing an editing note description must be in place thene type a new desc', () => {
      cy.get('[data-test=note-desc]')
        .should('have.value', textTitle)
        .clear()
        .type(newDesc);
    });

    it('Should Save edited note', () => {
      cy.get('[data-test=submit-note]').click();
    });

    it('Should Edited note must have a new title in list.', () => {
      cy.get('[data-test=note-item]')
        .first()
        .contains(newTitle);
    });
  });

  describe('Test change new title and description', () => {
    it('Should Click on edit note', () => {
      cy.get('[data-test=note-edit]').click();
    });

    it('Should the new title must be in place', () => {
      cy.get('[data-test=note-title]').should('have.value', newTitle);
    });

    it('Should the new description must be in place', () => {
      cy.get('[data-test=note-desc]').should('have.value', newDesc);
    });
  });

  describe('Test clear button on form', () => {
    it('Should Click on clear note', () => {
      cy.get('[data-test=submit-clear]').click();
    });

    it('Should Title must be empty', () => {
      cy.get('[data-test=note-title]').should('have.value', '');
    });

    it('Should Description must be empty', () => {
      cy.get('[data-test=note-desc]').should('have.value', '');
    });
  });

  describe('Test editing note URL (URL must be sharable).', () => {
    it('Should Reload page', () => {
      cy.reload();
    });

    it('Should After reload page title and description must be in place', () => {
      cy.get('[data-test=note-title]').should('have.value', newTitle);
      cy.get('[data-test=note-desc]').should('have.value', newDesc);
    });
  });
});
