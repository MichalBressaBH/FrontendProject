describe('test cards page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  })

  it('H1 and H3 are on the cards page', () => {
    cy.contains("h1", /pokemon cards/i);
    cy.contains("h3" ,/use input to add more cards/i);

  });

  it('Add card correctly', () => {
    // contains input. use input
    // intercept request and see if data matches
    cy.get('input').type('1');
    cy.get('button').contains(/add card/i).press;
    
  });

  it('Throw error when cant fetch correctly', () => {
    // 
  });

  it('Cant add duplicate cards', () => {
    // 
  });

  it('Filters work correctly', () => {
    // 
  });
  
})