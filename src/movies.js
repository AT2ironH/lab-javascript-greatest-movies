// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArr) {
    let directorsArr = moviesArr.map((movie => {
    return movie.director
}))
return directorsArr
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies)  {
    let spilbergDramas = movies.filter(elem => {
        if (elem.director == `Steven Spielberg` && elem.genre.includes == `Drama`) {
            return true;
        }
    })
    return spilbergDramas.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    let reducedRates = arr.reduce((acc, elem) => {

        if (elem.rate) {
            return acc + elem.rate
        }
        else {
            return acc
        }}, 0)
        if (arr.length === 0) {
            return 0
        }
    
    let roundedReduce = reducedRates/arr.length;
        return parseFloat(roundedReduce.toFixed(2));
}
        

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let avg = arr.reduce((acc, elem) => {
        if (elem.genre.includes("Drama") && elem.rate) {
            return acc + elem.rate
        }
        else {
            return acc
        }}, 0)
        if (arr.length === 0) {
            return 0
        }
        let avgDrama = avg/arr.length;
        return parseFloat(avgDrama.toFixed(2));
    }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
    let cloneArr =  JSON.parse(JSON.stringify(arr))
    function orderByYear(arr) {
        let relYear = arr.sort(function(a , b) {
            if (a.year > b.year) {
                return 1; 
            }
            else if (a.year < b.year) {
                return -1
            }
            else 
            return 0; 
       })
       return arr
    }

        
    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically() {
      
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
