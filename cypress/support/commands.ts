/// <reference types="cypress" />

// add new command to the existing Cypress interface
declare global {
    namespace Cypress {
      interface Chainable {
        addCard: typeof addCard
      }
    }
  }
  
  export function sum(a: number, b: number): number {
    return a + b
  }
  
  export function addCard (id: string) {
    cy.get('#addCardInput').type(id);
    cy.get('button').contains(/add card/i).click();
  }
  
  Cypress.Commands.add('addCard', addCard)