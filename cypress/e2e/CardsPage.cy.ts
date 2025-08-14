describe('test cards page', () => {
  beforeEach(() => {
    cy.visit('/AddCards');
  })

  it('H1 and H3 are on the cards page', () => {
    cy.contains("h1", /pokemon cards/i);
    cy.contains("h3" ,/use input to add more cards/i);

  });

  it('Add card correctly with number', () => {
    // contains input. use input
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/*').as('getPokemon');

    cy.addCard('1');
    // Wait for the API call
    cy.wait('@getPokemon').then((interception) => {
      // Grab the requested URL
      const requestUrl = interception.request.url;
      // Assert it's either ID 1 or bulbasaur
      expect(
        requestUrl.endsWith('/pokemon/1') || requestUrl.endsWith('/pokemon/bulbasaur'),
        `Expected request URL to be /pokemon/1 or /pokemon/bulbasaur but got: ${requestUrl}`
      ).to.be.true;
    });
    
    cy.get('[data-testid="card-1"]').should('be.visible');
  });

  it('Add card correctly with pokemon name', () => {
    // contains input. use input
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/*').as('getPokemon');

    cy.addCard('bulbasaur');
    // Wait for the API call
    cy.wait('@getPokemon').then((interception) => {
      // Grab the requested URL
      const requestUrl = interception.request.url;
      // Assert it's either ID 1 or bulbasaur
      expect(
        requestUrl.endsWith('/pokemon/1') || requestUrl.endsWith('/pokemon/bulbasaur'),
        `Expected request URL to be /pokemon/1 or /pokemon/bulbasaur but got: ${requestUrl}`
      ).to.be.true;
    });
    
    cy.get('[data-testid="card-1"]').should('be.visible');
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
    cy.addCard("1");
  
    // try to add the same card
    cy.addCard("1");

    // alert message is visible
    cy.contains('div', "Can't add duplicate cards").parent().parent().should('be.visible');

    // click X to close the message
    cy.get(`[aria-label="Close"]`).click()
    cy.contains('div', "Can't add duplicate cards").should('not.exist');

  });

  it('Filters work correctly', () => {
    // grass and poison pokemon
    cy.addCard("1");

    // add a fire pokemon
    cy.addCard("4");

    // filter only fire pokemons
    cy.get('button').contains(/fire/i).click();

    cy.get('[data-testid="card-4"]').should('be.visible');
    cy.get('[data-testid="card-1"]').should('not.exist');

    // reset filters
    cy.get('button').contains(/x/i).click();

    cy.get('[data-testid="card-4"]').should('be.visible');
    cy.get('[data-testid="card-1"]').should('be.visible');

  });
  
})