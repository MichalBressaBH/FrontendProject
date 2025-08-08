import '@testing-library/cypress/add-commands'
import './commands'

Cypress.Commands.add('addCard', (id : string) => {
    cy.get('#addCardInput').type(id);
    cy.get('button').contains(/add card/i).click();
})

declare global {
  namespace Cypress {
    interface Chainable {
        addCard(id: string): Chainable<void>;
    }
  }
}