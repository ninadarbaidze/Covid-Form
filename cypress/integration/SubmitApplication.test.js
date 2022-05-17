/// <reference types="cypress" />

describe('submit form', () => {
  it("submit form when user haven't had covid", () => {
    cy.visit('/');
    cy.get('.w-40').trigger('mouseover');
    cy.get('.w-40').click();
    cy.fillPersonalInformation();
    cy.fillCovidSituationWhenUserDoesntHavecovid();
    cy.fillVaccination();
    cy.fillCovidPolitics();
    cy.intercept('POST', 'https://covid19.devtest.ge/api/create', {
      statusCode: 201,
    });
    cy.get('#submit-button').click();
  });
  it('submit form when user had covid and antibody test', () => {
    cy.visit('/');
    cy.get('.w-40').trigger('mouseover');
    cy.get('.w-40').click();
    cy.fillPersonalInformation();
    cy.fillCovidSituationWhenUserHaveCovidAntibody();
    cy.fillVaccination();
    cy.fillCovidPolitics();
    cy.intercept('POST', 'https://covid19.devtest.ge/api/create', {
      statusCode: 201,
    });
    cy.get('#submit-button').click();
  });
  it('submit form when user had covid not antibody test', () => {
    cy.visit('/');
    cy.get('.w-40').trigger('mouseover');
    cy.get('.w-40').click();
    cy.fillPersonalInformation();
    cy.fillCovidSituationWhenUserHaveCovidNotAntibody();
    cy.fillVaccination();
    cy.fillCovidPolitics();
    cy.intercept('POST', 'https://covid19.devtest.ge/api/create', {
      statusCode: 201,
    });
    cy.get('#submit-button').click();
  });
  it("user can't submit the form", () => {
    cy.visit('/');
    cy.get('.w-40').click();
    cy.fillPersonalInformation();
    cy.fillCovidSituationWhenUserDoesntHavecovid();
    cy.fillVaccination();
    cy.fillCovidPolitics();
    cy.intercept('POST', 'https://covid19.devtest.ge/api/crate', {
      statusCode: 404,
    });
    cy.get('#submit-button').click();
  });
});
