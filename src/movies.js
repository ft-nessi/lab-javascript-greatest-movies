// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {

  let directors = moviesArr.map((elem) => {
    return elem.director;
  });

  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {

  let howManyMovies = moviesArr.filter((elem) => {
    return elem.director === 'Steven Spielberg' && elem.genre.includes('Drama');
  });

  return howManyMovies.length;
}
//genre: ['Biography', 'Drama', 'History']
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {

  let totalScore = moviesArr.reduce((agg, elem) => {
    if (elem.score === undefined) return agg;
    return agg + elem.score;
  }, 0);

  if (moviesArr.length == 0) return 0;
  return Math.round((totalScore / moviesArr.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  
  let totalScoreOfDrama = moviesArr.reduce((agg, elem) => {
    if (elem.genre.includes('Drama')) {
      if (elem.score === undefined) {
      return agg;
      }  
      return agg + elem.score;
    }
    return agg;
  }, 0);

  let dramaMovies = moviesArr.filter((elem) => {
    return elem.genre.includes('Drama');
  })

  if (dramaMovies.length == 0) return 0;
  return Math.round((totalScoreOfDrama / dramaMovies.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArr) {
  let deepCopyMovieList = JSON.parse(JSON.stringify(moviesArr));
  
  let ascendingArr = deepCopyMovieList.sort((a,b) => {
  
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      return 1;
    };
    return a.year - b.year;
  });
  return ascendingArr; 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  // let deepCopyMovieList = JSON.parse(JSON.stringify(moviesArr));

  let filteredFunc = moviesArr.filter((elem, i) => {
    return i < 20;
  })

  let titleArr = filteredFunc.map((elem) => {
    return elem.title;
  })

  let sortedTitleArr = titleArr.sort((a,b) => {
    if (a = b) return 0;
    else if (a > b) return -1;
    else return 1;
  })

  return sortedTitleArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
