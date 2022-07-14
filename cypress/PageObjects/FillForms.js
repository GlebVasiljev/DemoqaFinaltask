import BasePage from "./basePage";


class FillForms extends BasePage {
    static get userFirstNameField() {
        return cy.get('#firstName');
    }
    static get userLastNameField() {
        return cy.get('#lastName');
    }
    static get userEmailField() {
        return cy.get('#userEmail');
    }
    static get userGenderRadioInputField() {
        return cy.get('[class="custom-control custom-radio custom-control-inline"]');
    }
    static get userMobileNumber() {
        return cy.get('#userNumber'); //10
    }
    static get userBirthDay() {
        return cy.get('#dateOfBirthInput').click();
    }
    static setYear(userYear) {
        cy.get('[class = "react-datepicker__year-select"]').select(userYear);
    }
    static setMonth(userMonth) {
        return cy.get('[class = "react-datepicker__month-select"]').select(userMonth);
    }
    static setDay(userDate) {
        return cy.get('[class*="react-datepicker__day"]').not("[class*='react-datepicker__day--outside-month']")
            .contains(userDate).click();;
    }
    static get subjectField() {
        return cy.get('.subjects-auto-complete__value-container');
    }
    static get checkSportsHobbies() {
        return cy.get('[id = "hobbies-checkbox-1"]');
    }
    static get checkReadingHobbies() {
        return cy.get('[id = "hobbies-checkbox-2"]');
    }
    static get userCurrectAdress() {
        return cy.get('#currentAddress');
    }
    static get clickOnState(){
        return cy.get('[id="state"]');
    }
    static get userState() {
        return cy.get('#react-select-3-option-3');
    }
    static get clickOnCity(){
        return cy.get('[id="city"]');
    }
    static get userCity() {
        return cy.get('#stateCity-wrapper > :nth-child(2)');
    }
    static get submitButton() {
        return cy.get('#submit');
    }

}

export default FillForms;