import BasePage from "./basePage";


class FillFormsValidation extends BasePage {
    static get userFirstNameField() {
        return cy.get('tbody > :nth-child(1) > :nth-child(2)');
    }
    static get userEmailField() {
        return cy.get('tbody > :nth-child(2) > :nth-child(2)');
    }
    static get userGenderField() {
        return cy.get('tbody > :nth-child(3) > :nth-child(2)');
    }
    static get userMobileNumber() {
        return cy.get('tbody > :nth-child(4) > :nth-child(2)');
    }
    static get userBirthDay() {
        return cy.get('tbody > :nth-child(5) > :nth-child(2)');
    }
    static get userSubjects(){
        return cy.get('tbody > :nth-child(6) > :nth-child(2)');
    }
    static get userHobbies(){
        return cy.get('tbody > :nth-child(7) > :nth-child(2)');
    }
    static get userAdress(){
        return cy.get('tbody > :nth-child(9) > :nth-child(2)');
    }
    static get userStateAndCity(){
        return cy.get('tbody > :nth-child(10) > :nth-child(2)');
    }
}

export default FillFormsValidation;