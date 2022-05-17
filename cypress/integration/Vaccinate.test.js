/// <reference types="cypress" />

describe('vaccinated', () => {
  beforeEach(() => {
    cy.visit('/vaccinated');
  });

  it('visitor can go back to previous page', () => {
    cy.get('#left').click();
    cy.url().should('include', 'covid-situation');
  });

  it("visitors can't proceed to another page if inputs are invalid", () => {
    cy.get('#right').click();
    cy.contains('ამ ველის').should('be.visible');
    cy.url().should('include', 'vaccinated');

    cy.get('#vaccinate-yes').click();
    cy.get('#right').click();
    cy.contains('ამ ველის').should('be.visible');
    cy.url().should('include', 'vaccinated');

    cy.get('#vaccinate-no').click();
    cy.get('#right').click();
    cy.contains('ამ ველის').should('be.visible');
    cy.url().should('include', 'vaccinated');
  });

  it('visitor should see vaccination stage input field if they choose "კი" and can proceed if inputs are valid', () => {
    cy.get('#vaccinate-yes').click();
    cy.contains('აირჩიე რა ეტაპზე').should('be.visible');

    cy.get('#first').click();
    cy.get('#right').click();
    cy.url().should('include', 'covid-politics');
  });

  it("if visitor chooses that she/he didn't had second round of vaccination, paragraph should appear", () => {
    cy.get('#vaccinate-yes').click();
    cy.get('#noSecond').click();
    cy.contains('რომ არ გადადო').should('be.visible');
  });

  it("if visitor chooses that she/he isn't vaccinated and planning to get vaccine, paragraph should appear", () => {
    cy.get('#vaccinate-no').click();
    cy.get('#planning').click();
    cy.contains('ახალი პროტოკოლით').should('be.visible');
  });

  it('visitor should see waiting input field if they choose "არა" and can proceed if inputs are valid', () => {
    cy.fillVaccination();
  });
});
