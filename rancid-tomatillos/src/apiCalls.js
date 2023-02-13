const getAllMovies = () => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies").then(
    (response) => {
      if (!response.ok) {
        throw new Error("There has been a problem.");
      } else {
        return response.json();
      }
    }
  );
};

const getSingleMovie = (movieID) => {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("There has been a problem.");
    } else {
      return response.json();
    }
  });
};

export { getAllMovies, getSingleMovie };
