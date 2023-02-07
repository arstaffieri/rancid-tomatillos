describe('home', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })

  it('should display main title page', () => {
    cy.get('h1').contains('Reel Laughs Movie Database')
  })


  it('should display all movies when page loads', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 201
    })
  })
  it('Should display error message if movies do not load', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 401
    })
    .get('h2')
    .contains('There has been a problem')
  })


    it('checks that the length of .movie-container is 40', () => {
      cy.visit('http://localhost:3000/');
      cy.get('.movie-container')
      .find('.poster-container')
      .should('have.length', 40)
      });
    });


