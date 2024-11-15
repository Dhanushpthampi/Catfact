/*/ES6+ Concepts:

Review and practice key ES6+ concepts: let and const, arrow functions, destructuring, template literals, and modules.
Async/Await and Promises: Understand promises, chaining, and async/await. Write a few small functions that utilize async/await to fetch mock data from APIs (e.g., jsonplaceholder.typicode.com).
Practice Problem:

Write a function using async/await that fetches data from an API (e.g., posts from JSONPlaceholder), handles errors with try/catch, and logs the result to the console.
*/
// Function to fetch a random cat fact from the API
// Function to fetch a random cat fact from the new API
const fetchCatFact = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      const randomFact = data;  // Get the cat fact from the response
      document.getElementById('cat-fact').innerText = randomFact; // Display it in the HTML
    } catch (error) {
      document.getElementById('cat-fact').innerText = "Oops! Something went wrong.";
      console.error('Error fetching data:', error);
    }
  };
  
  // Call the function when the page loads
  document.addEventListener('DOMContentLoaded', fetchCatFact);
  
  // Event listener for the button
  document.getElementById('new-fact-button').addEventListener('click', fetchCatFact);
  