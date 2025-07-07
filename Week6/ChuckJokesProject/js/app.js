// Get references to DOM elements
const jokeContainer = document.getElementById("joke");
const newJokeBtn = document.getElementById("newJokeBtn");

// Chuck Norris Joke API URL
const API_URL = "https://api.chucknorris.io/jokes/random";

// Function to fetch and display a new joke
async function fetchJoke() {
  try {
    // Fetch data from the API
    const response = await fetch(API_URL);
    const data = await response.json();

    // Display the joke in the container
    jokeContainer.textContent = data.value;
  } catch (error) {
    // Handle any errors
    jokeContainer.textContent = "Oops! Failed to load a joke. Please try again.";
    console.error("Error fetching joke:", error);
  }
}

// Load a joke on page load
window.addEventListener("DOMContentLoaded", fetchJoke);

// Load a new joke on button click
newJokeBtn.addEventListener("click", fetchJoke);
