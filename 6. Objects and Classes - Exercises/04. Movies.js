function createMovieList(array){
    let movies = [];
   for (const line of array) {
    	if (line.includes('addMovie')) {
            let movieName = line.split('addMovie ');
            let movie = {
                name: movieName[1], 
                director: null,
                date: null
            }
            movies.push(movie);
        }
        else if(line.includes('directedBy')){
            let [movieName, movieDirector] = line.split(' directedBy ');
            let movie = movies.find((x) => x.name === movieName);
            if(movie){
                movie.director = movieDirector;
            }
        }
        else if(line.includes('onDate')){
            let [movieName, movieDate] = line.split(' onDate ');
            let movie = movies.find((x) => x.name === movieName);
            if(movie){
                movie.date = movieDate;
            }
        }
   }
   movies
        .filter((x) => x.name && x.director && x.date)
        .forEach((x) => console.log(JSON.stringify(x)));
}