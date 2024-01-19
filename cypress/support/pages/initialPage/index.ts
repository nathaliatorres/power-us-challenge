class initialPage {
    
    public goToRegistration () {
        const menuButton = '[aria-label="Menü öffnen"] > .mat-button-wrapper > .mat-icon'
        const forEmployerOption = '.nav-list-container > :nth-child(2) > .mat-focus-indicator'
        const arrangeConsultationButton = '.intro > .mat-focus-indicator > .mat-button-wrapper'
        cy.intercept('https://widget.trustpilot.com/stats/TrustboxImpression?locale=de-DE&theme=light&fontFamily=Montserrat&styleHeight=100%25&styleWidth=100%25&url=https%3A%2F%2Ftesting.powerus.de%2F&referrer=&userAgent=Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_7)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F120.0.0.0%20Safari%2F537.36&language=pt-BR&platform=MacIntel&nosettings=1&businessUnitId=61a8d4bee2f07c5c8f5d4942&widgetId=5613c9cde69ddc09340c6beb').as('waitForPageLoad')
        cy.wait('@waitForPageLoad')
        cy.get(menuButton).click();
        cy.get(forEmployerOption).click();
        cy.get(arrangeConsultationButton).click();
    }
}

export default initialPage;