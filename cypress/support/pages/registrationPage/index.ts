class registrationPage {
    
    public choosePersonalOptions () {
        const positions = '[data-value="3-5"]'
        const area = '[icon="charger"] > .mat-card > .mat-card-content'
        const continueButton = 'app-fields-step.ng-star-inserted > .content > .continue-button'
        
        cy.get(positions).click();
        cy.get(area).click();
        cy.get(continueButton).click();
    }

    public fillContactDetails () {
        const name = '#mat-input-1'
        const surname = '#mat-input-2'
        const email = '#mat-input-3'
        const phone = '#mat-input-4'
        const company = '#mat-input-5'
        const socialMedia = '.first-impression > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex'
        const getFreeAdviceButton = 'app-contact-information-step.ng-star-inserted > .content > .mat-focus-indicator > .mat-button-wrapper'

        cy.get(name).type('Jon');
        cy.get(surname).type('Becker');
        cy.get(email).type('test@test.com');
        cy.get(phone).type('0211 98 12 89');
        cy.get(company).type('Test ABC');
        cy.get(socialMedia).click().get('mat-option').contains('Google').click();
        cy.get(getFreeAdviceButton).click();
    }

    public confirmationPage () {
        const registrationSucceeded = '.content > .title'
        const viewRecruitingBibleButton = '.content > .mat-focus-indicator'

        cy.url().should('eq', 'https://testing.powerus.de/anmeldung-arbeitgeber');
        cy.get(registrationSucceeded).should('be.visible');
        cy.get(viewRecruitingBibleButton);
    }
}

export default registrationPage;