<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Movie Search</title>
  <style>
    /* Add similar styles here for cards */
    .movie-card {
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-top: 20px;
      width: 200px;
      text-align: center;
    }
  </style>
</head>
<body>

<script>
  // Function to get movie data from user input and display it using a callback
  function getMovieData(callback) {
    let movieTitle = prompt("Enter movie title:");

    if (movieTitle) {
      fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=your_api_key_here`)
        .then(response => response.json())
        .then(data => {
          if (data.Response === "True") {
            callback(data); // Pass movie data to the callback function
          } else {
            alert('Movie not found!');
          }
        })
        .catch(error => console.error('Error:', error));
    }
  }

  // Callback function to display movie data
  function displayMovie(movie) {
    let card = document.createElement('div');
    card.className = 'movie-card';

    card.innerHTML = `
      <h3>${movie.Title}</h3>
      <p>Year: ${movie.Year}</p>
      <p>Genre: ${movie.Genre}</p>
      <img src="${movie.Poster}" alt="${movie.Title}" style="width: 100%; border-radius: 5px;">
    `;

    document.body.appendChild(card);
  }

  // Trigger the getMovieData function
  getMovieData(displayMovie);
</script>

</body>
</html>
