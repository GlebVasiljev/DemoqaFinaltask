import BasePage from "./basePage";

class SortablePage extends BasePage{
    static get url(){
        return"https://demoqa.com/sortable";
    }
    static get elementsTable(){
        return cy.get("[class = 'vertical-list-container mt-4']");
      }
    
    
}   

export default SortablePage;