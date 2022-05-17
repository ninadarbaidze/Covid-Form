/// <reference types="cypress" />

describe('personal information', () => {
  beforeEach(() => {
    cy.visit('/personal-information');
  });

  it("visitors can't proceed to another page if inputs are invalid", () => {
    cy.get('#right').click();
    cy.get(':nth-child(1)').should('be.visible');
    cy.get(':nth-child(2)').should('be.visible');
    cy.get(':nth-child(3)').should('be.visible');
    cy.url().should('include', 'personal-information');
  });

  it('visitor can proceed to next page if inputs are valid', () => {
    cy.fillPersonalInformation();
  });
});
