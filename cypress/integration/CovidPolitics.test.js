/// <reference types="cypress" />

describe('covid politics', () => {
  beforeEach(() => {
    cy.visit('/covid-politics');
  });

  it("visitors can't proceed to another page if inputs are invalid", () => {
    cy.contains('რას ფიქრობ არსებულ').scrollIntoView();
    cy.get('#submit-button').click();
    cy.contains('ამ ველის').should('be.visible');
    cy.url().should('include', 'covid-politics');

    cy.get('#twiceaWeek').click();
    cy.get('#submit-button').click();
    cy.contains('ამ ველის').should('be.visible');
    cy.url().should('include', 'covid-politics');
  });

  it('enter valid values', () => {
    cy.fillCovidPolitics();
  });
});
