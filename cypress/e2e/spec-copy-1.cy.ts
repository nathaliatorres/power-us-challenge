describe('For Employer', () => {
  beforeEach(function() {
    cy.viewport('iphone-xr')
    cy.visit('https://testing.powerus.de/');
  })
  it('Employer Registration', () => {
    cy.wait(2000);
    cy.get('[aria-label="Menü öffnen"] > .mat-button-wrapper > .mat-icon').click();
    cy.get('.nav-list-container > :nth-child(2) > .mat-focus-indicator').click();
    cy.get('.intro > .mat-focus-indicator > .mat-button-wrapper').click();
    cy.get('[data-value="3-5"]').click();
    cy.get('[icon="charger"] > .mat-card > .mat-card-content').click();
    cy.get('app-fields-step.ng-star-inserted > .content > .continue-button').click();
    cy.get('#mat-input-1').type('Jona');
    cy.get('#mat-input-2').type('Beckera');
    cy.get('#mat-input-3').type('test@test.com');
    cy.get('#mat-input-4').type('0211 98 12 89');
    cy.get('#mat-input-5').type('Test ABC');
    cy.get('.first-impression > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').click().get('mat-option').contains('Google').click();
    cy.get('app-contact-information-step.ng-star-inserted > .content > .mat-focus-indicator > .mat-button-wrapper').click();
    cy.url().should('eq', 'https://testing.powerus.de/anmeldung-arbeitgeber');
    cy.get('.content > .title').should('be.visible');
    cy.get('.content > .mat-focus-indicator');
  })
  it('Read Recruiting Bible', () => {
    cy.visit('https://testing.powerus.de/anmeldung-arbeitgeber');
    cy.get('.content > .mat-focus-indicator').click();
    cy.url().should('eq', 'https://testing.powerus.de/recruiting-im-handwerk');
    cy.get('.text > .title').should('be.visible');
  })
})