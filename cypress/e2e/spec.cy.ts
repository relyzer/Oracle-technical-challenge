describe('Navigation', () => {
  it('user can navigate to series page and open a modal', () => {
    cy.visit('/')
    cy.findByTestId('categoryNavLink-Series').should('exist')
    cy.findByTestId('categoryNavLink-Series').click()
    cy.findByRole('article').contains('div').click()
  })

  it('user can navigate to movies page and open a modal', () => {
    cy.visit('/')
    cy.findByTestId('categoryNavLink-Movies').should('exist')
    cy.findByTestId('categoryNavLink-Movies').click()
    cy.findByRole('article').contains('div').click()
  })

  it('user can navigate back to home page', () => {
    cy.visit('/series')
    cy.findByText('DEMO Streaming').click()
  })
})