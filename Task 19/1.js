<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Movies Display</title>
  <style>
    .card-container {
      display: flex;
      gap: 20px;
      padding: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .card {
      width: 200px;
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 15px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      text-align: center;
      background-color: #f9f9f9;
    }

    .card img {
      width: 100%;
      border-radius: 10px;
    }

    .card h3 {
      margin: 10px 0;
    }
  </style>
</head>
<body>

<script>
  // Function to fetch movie data and display it in cards
  function fetchMovies() {
    const apiKey = "your_api_key_here"; // Replace with your OMDb API key
    const movieTitle = "Inception"; // Example movie title

    fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === "True") {
          displayMovies([data]); // Pass movie data as an array for consistency
        } else {
          alert('Movie not found');
        }
      })
      .catch(error => console.error('Error:', error));
  }

  // Function to display movie cards
  function displayMovies(movies) {
    const container = document.createElement("div");
    container.className = "card-container";

    movies.forEach(movie => {
      let card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title}">
        <h3>${movie.Title}</h3>
        <p><strong>Year:</strong> ${movie.Year}</p>
        <p><strong>Genre:</strong> ${movie.Genre}</p>
      `;

      container.appendChild(card);
    });

    // Append the container to the body
    document.body.appendChild(container);
  }

  // Call the function to fetch movies on page load
  fetchMovies();
</script>

</body>
</html>
