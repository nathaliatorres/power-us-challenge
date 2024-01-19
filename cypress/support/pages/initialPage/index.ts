class initialPage {
    
    public goToRegistration () {
        const menuButton = '[aria-label="Menü öffnen"] > .mat-button-wrapper > .mat-icon'
        const forEmployerOption = '.nav-list-container > :nth-child(2) > .mat-focus-indicator'
        const arrangeConsultationButton = '.intro > .mat-focus-indicator > .mat-button-wrapper'
        
        cy.get(menuButton).click();
        cy.get(forEmployerOption).click();
        cy.get(arrangeConsultationButton).click();
    }
}

export default initialPage;