describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://shopee.co.id')
    cy.contains('Log In').click()
    cy.contains('Google').click()
    cy.get('input[class="shopee-searchbar-input__input"]').type('sepatu')
    cy.get('button[class="btn btn-solid-primary btn--s btn--inline shopee-searchbar__search-button"]').click()
  })
})