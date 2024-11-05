const API_url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=acb7ca6720532515f2b5dbf4850c7bd1`;
const search_api = 'https://api.themoviedb.org/3/search/movie?api_key=acb7ca6720532515f2b5dbf4850c7bd1&query="'


async function fetchMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    displayMovies(data.results)
}

function displayMovies(movies) {
    const upcomingDiv = document.getElementById('upcoming-movies');
    upcomingDiv.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title} Poster">
                </a>
                <h3>Release: ${movie.release_date}</h3>
                <h5><button type="button" onclick="watch()" class="watchnow">Watch Now</button></h5>
        `;
        upcomingDiv.appendChild(movieElement);
    });
}

// Call fetchUpcomingMovies when the page loads
window.onload = function() {
    fetchMovies(API_url);
}


document.addEventListener("DOMContentLoaded", function() {
    const searchText = document.getElementById('searchtext');

    searchText.addEventListener("keypress", (event) => {

        
        if(event.key === "Enter") {
            // console.log(searchText.value);
            fetchMovies(search_api + searchText.value );
        }
        else {
            // window.location.reload();
        }
    });
})


