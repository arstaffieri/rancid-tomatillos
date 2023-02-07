const fetchedMovie = {
  movie: {
    id: 436270,
    title: "Black Adam",
    poster_path:
      "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    release_date: "2022-10-19",
    overview:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    genres: ["Action", "Fantasy", "Science Fiction"],
    budget: 200000000,
    revenue: 384571691,
    runtime: 125,
    tagline: "The world needed a hero. It got Black Adam.",
    average_rating: 4,
  },
};

describe("movie details", () => {
  beforeEach(() => {
    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        statusCode: 201,
        body: fetchedMovie,
      }
    );
    cy.visit("http://localhost:3000/")
      .get(".poster-container")
      .first()
      .click()
      .url()
      .should("include", "/436270")
      .get(".single-movie-info")
      .find("p");
  });

  it("should load all single movie from selected movie", () => {
    cy.visit("http://localhost:3000/")
      .get(".poster-container")
      .first()
      .click()
      .url()
      .should("include", "/436270");
  });

  it("should have an overview", () => {
    cy.contains(
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
    );
  });

  it("should have an average rating", () => {
    cy.contains("🌟🌟🌟🌟 out of 10 Stars");
  });

  it("should have a release date", () => {
    cy.contains("10/19/2022");
  });

  it("should have a run time", () => {
    cy.contains("125 Minutes");
  });

  it("should have a budget", () => {
    cy.contains("$200,000,000.00");
  });

  it("should have a revenue", () => {
    cy.contains("$384,571,691.00");
  });

  it('should have back home button', () => {
    cy.visit("http://localhost:3000/")
    .get(".poster-container")
    .first()
    .click()
    .url()
    .should("include", "/436270")
    .get('.home-button')
    .first()
    .click()
    .url()
    .should('include', "/")
  })
});
