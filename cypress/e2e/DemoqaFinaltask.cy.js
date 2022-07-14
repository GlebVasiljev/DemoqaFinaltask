import FillForms from "../PageObjects/FillForms";
import FillFormsValidation from "../PageObjects/FillFormValidation";
import AutomationPracticePage from "../PageObjects/HomePage"
import SortablePage from "../PageObjects/SortablePage";

describe('empty spec', () => {
  it.only('1. Scenario Forms - Practice forms', () => {
    AutomationPracticePage.visit();

    //Fill forms
    FillForms.userFirstNameField.click().type('Gleb');
    FillForms.userLastNameField.click().type('Vasiljev');
    FillForms.userEmailField.click().type('glebsvasiljevs@gmail.com');
    FillForms.userGenderRadioInputField.first().click();
    FillForms.userMobileNumber.click().type('8888888888');
    FillForms.userBirthDay.click();
    FillForms.setYear('1984');
    FillForms.setMonth('February');
    FillForms.setDay('29');
    FillForms.subjectField.type("Math{enter}");
    FillForms.checkSportsHobbies.check({force:true});
    FillForms.checkReadingHobbies.check({force:true});
    FillForms.userCurrectAdress.click().type('PilsIela45');
    FillForms.clickOnState.click();
    FillForms.userState.click({force: true});
    FillForms.clickOnCity.click();
    FillForms.userCity.click({force: true});
    FillForms.submitButton.click({force: true});

    //Validation
    FillFormsValidation.userFirstNameField.should('have.text','Gleb Vasiljev')
    FillFormsValidation.userEmailField.should('have.text','glebsvasiljevs@gmail.com')
    FillFormsValidation.userGenderField.should('have.text','Male')
    FillFormsValidation.userMobileNumber.should('have.text','8888888888')
    FillFormsValidation.userBirthDay.should('have.text','29 February,1984')
    FillFormsValidation.userSubjects.should('have.text','Maths');
    FillFormsValidation.userHobbies.should('have.text','Sports, Reading')
    FillFormsValidation.userAdress.should('have.text','PilsIela45')
    FillFormsValidation.userStateAndCity.should('have.text','Rajasthan Jaiselmer');
    

  })

  it('2. Scenario', () => {
    SortablePage.visit();
    //Validation
    SortablePage.elementsTable.should('have.text', 'OneTwoThreeFourFiveSix');

    //Move 6 -> 1
    SortablePage.elementsTable
      .trigger('mousedown', cy.get('.vertical-list-container > :nth-child(6)'))
      .trigger('mousemove', cy.get('.vertical-list-container > :nth-child(1)')).trigger('mouseup');

    //Move 6 elements -> 2
      SortablePage.elementsTable
      .trigger('mousedown', cy.get('.vertical-list-container > :nth-child(6)'))
      .trigger('mousemove', cy.get('.vertical-list-container > :nth-child(2)')).trigger('mouseup');
    
    //Move 6 elements -> 3
      SortablePage.elementsTable
      .trigger('mousedown', cy.get('.vertical-list-container > :nth-child(6)'))
      .trigger('mousemove', cy.get('.vertical-list-container > :nth-child(3)')).trigger('mouseup');
    
    //Move 6 elements -> 4
      SortablePage.elementsTable
      .trigger('mousedown', cy.get('.vertical-list-container > :nth-child(6)'))
      .trigger('mousemove', cy.get('.vertical-list-container > :nth-child(4)')).trigger('mouseup');
    
    //Move 6 elements -> 5
      SortablePage.elementsTable
      .trigger('mousedown',
        cy.get('.vertical-list-container > :nth-child(6)'))
      .trigger('mousemove',
        cy.get('.vertical-list-container > :nth-child(5)'))
      .trigger('mouseup');
    //Validation
    SortablePage.elementsTable.should('have.text', 'SixFiveFourThreeTwoOne');
  })
})