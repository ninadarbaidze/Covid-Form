Cypress.Commands.add('fillPersonalInformation', () => {
  cy.get('#first_name').type('ნინა');
  cy.get('#last_name').type('დარბაიძე');
  cy.get('#email').type('nina@redberry.ge');
  cy.get('#right').click();
  cy.url().should('include', 'covid-situation');
});

Cypress.Commands.add('fillCovidSituationWhenUserDoesntHavecovid', () => {
  cy.get('#covid-no').click();
  cy.get('#right').click();
  cy.url().should('not.include', 'covid-situation');
  cy.get('#left').click();
  cy.get('#covid-now').click();
  cy.get('#right').click();
  cy.url().should('not.include', 'covid-situation');
});

Cypress.Commands.add('fillCovidSituationWhenUserHaveCovidAntibody', () => {
  cy.get('#covid-yes').click();
  cy.get('#antibody-yes').click();
  cy.contains('თუ გახსოვს, გთხოვ').should('be.visible');
  cy.get('#test_date').type('2020-02-19');
  cy.get('#antibodies_number').type('22');
  cy.get('#right').click();
  cy.url().should('not.include', 'covid-situation');
});

Cypress.Commands.add('fillCovidSituationWhenUserHaveCovidNotAntibody', () => {
  cy.get('#covid-yes').click();
  cy.get('#antibody-no').click();
  cy.contains('მიუთითე მიახლოებითი').should('be.visible');
  cy.get('#covid_sickness_date').type('12/12/20');
  cy.get('#right').click();
  cy.url().should('not.include', 'covid-situation');
});

Cypress.Commands.add('fillVaccination', () => {
  cy.get('#vaccinate-no').click();
  cy.contains('რას ელოდები').should('be.visible');

  cy.get('#registered').click();
  cy.get('#right').click();
  cy.url().should('include', 'covid-politics');
});

Cypress.Commands.add('fillCovidPolitics', () => {
  cy.contains('რას ფიქრობ არსებულ').scrollIntoView();
  cy.get('#twiceaWeek').click();
  cy.get('#one').click();
  cy.contains('რას ფიქრობ ფიზიკურ').type('კაი იდეაა');
  cy.contains('რას ფიქრობ არსებულ').type('ყველაფერი კარგია');
});
