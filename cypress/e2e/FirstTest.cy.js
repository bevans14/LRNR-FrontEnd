describe('Homepage', () => {
  it('Loads the homepage successfully', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Your guided path to programming enlightenment') 
  })})

  it('Displays featured content', () => {
    cy.visit('http://localhost:3000')
    cy.get('.banner').should('exist') 
  })

  it('Has a footer', () => {
    cy.visit('http://localhost:3000')
    cy.get('footer').should('exist') 
  })

  it('Displays featured content', () => {
    cy.visit('http://localhost:3000')
    cy.get('.banner img').should('exist') 
  })

