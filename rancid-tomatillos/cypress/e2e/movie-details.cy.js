describe('movie details', () => {
  beforeEach(() => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      fixture: ''
    })
  })
})