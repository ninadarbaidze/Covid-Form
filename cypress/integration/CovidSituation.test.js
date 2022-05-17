describe('covid situation', () => {
  beforeEach(() => {
    cy.visit('/covid-situation');
  });

  it("visitors can't proceed to another page if inputs are invalid", () => {
    cy.get('#right').click();
    cy.contains('ამ ველის').should('be.visible');
    cy.url().should('include', 'covid-situation');

    cy.get('#covid-yes').click();
    cy.get('#right').click();
    cy.contains('ამ ველის').should('be.visible');
    cy.url().should('include', 'covid-situation');

    cy.get('#antibody-no').click();
    cy.get('#right').click();
    cy.contains('ამ ველის').should('be.visible');
    cy.url().should('include', 'covid-situation');
  });

  it('visitor can proceed to next page if they click "არა" or "ახლა მაქვს"', () => {
    cy.fillCovidSituationWhenUserDoesntHavecovid();
    cy.get('#left').click();
    cy.url().should('include', 'covid-situation');
  });

  it('visitor should see antibody input field if they choose "კი"', () => {
    cy.get('#covid-yes').click();
    cy.contains('ანტისხეულების ტესტი').should('be.visible');
  });

  it('if visitor clicks "კი" to antibody, antibody date and quantity fields should appear and can proceed with correct value', () => {
    cy.fillCovidSituationWhenUserHaveCovidAntibody();
  });

  it('if visitor clicks "არა" to antibody, covid date should appear and can proceed with correct value', () => {
    cy.fillCovidSituationWhenUserHaveCovidNotAntibody();
  });

  it('visitor can go back to previous page', () => {
    cy.get('#left').click();
    cy.url().should('include', 'personal-information');
  });
});
