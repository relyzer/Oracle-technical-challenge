describe('Navigation', () => {
  it('user can navigate to series page and open a modal', () => {
    cy.visit('/')
    cy.findByTestId('categoryNavLink-Series').click()
  })
})

export {}