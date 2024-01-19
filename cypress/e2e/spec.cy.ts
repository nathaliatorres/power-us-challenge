import initialPage from "../support/pages/initialPage";
import recruitingBiblePage from "../support/pages/recruitingBiblePage";
import registrationPage from "../support/pages/registrationPage";

const RecruitingBiblePage = new recruitingBiblePage();
const InitialPage = new initialPage();
const RegistrationPage = new registrationPage();

describe('Recruiting Bible', () => {
  beforeEach(function() {
    cy.viewport('iphone-xr')
    cy.visit('https://testing.powerus.de/');
  })
  it('Employer Registration', () => {
    cy.wait(2000);
    InitialPage.goToRegistration();
    RegistrationPage.choosePersonalOptions();
    RegistrationPage.fillContactDetails();
    RegistrationPage.confirmationPage();

  })
  it('See Recruiting Bible', () => {
    RecruitingBiblePage.seeRecruitingBiblePage();
})
})