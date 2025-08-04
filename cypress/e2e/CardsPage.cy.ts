describe('test cards page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  })

  it('H1 and H3 are on the cards page', () => {
    cy.contains("h1", /pokemon cards/i);
    cy.contains("h3" ,/use input to add more cards/i);

  });

  it('Add card correctly with number and name', () => {
    // contains input. use input
    // intercept request and see if data matches
    cy.get('#addCardInput').type('1');
    cy.get('button').contains(/add card/i).click();
    cy.contains('h2', 'bulbasaur').parent().should('be.visible');

    // reload to clean cards
    cy.reload();

    cy.get('#addCardInput').type('bulbasaur');
    cy.get('button').contains(/add card/i).click();
    cy.contains('h2', 'bulbasaur').parent().should('be.visible');
  });

  it('Throw error when cant fetch correctly', () => {
    const stub = cy.stub()
    cy.on(`window:alert`, stub);

    cy.get('#addCardInput').type('awhbjo12');

    cy.get('button').contains(/add card/i).click().then( ()=>{
      expect(stub.calledOnceWith("Couldn't fetch the pokemon, sorry!"));
    });

  });

  it('Cant add duplicate cards', () => {
    // add card
    cy.get('#addCardInput').type('1');
    cy.get('button').contains(/add card/i).click();
  
    // try to add the same card
    cy.get('#addCardInput').type('bulbasaur');
    cy.get('button').contains(/add card/i).click();

    // alert message is visible
    cy.contains('div', "Can't add duplicate cards").parent().parent().should('be.visible');

    // click X to hide the message
    cy.get(`[aria-label="Close"]`).click()
    cy.contains('div', "Can't add duplicate cards").should('not.exist');

  });

  it('Filters work correctly', () => {
    // 
  });
  
})