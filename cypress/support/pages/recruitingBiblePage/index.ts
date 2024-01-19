class recruitingBiblePage {

    public seeRecruitingBiblePage () {
        const viewRecruitingBibleButton = '.content > .mat-focus-indicator > .mat-button-wrapper'
        const recruitingBibleTitle = '.text > .title'

        cy.visit('https://testing.powerus.de/anmeldung-arbeitgeber');
        cy.get(viewRecruitingBibleButton).click();
        cy.url().should('eq', 'https://testing.powerus.de/recruiting-im-handwerk');
        cy.get(recruitingBibleTitle).should('be.visible');
    }
}
export default recruitingBiblePage;