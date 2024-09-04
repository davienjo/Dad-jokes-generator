const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "What do you call fake spaghetti? An impasta!",
  "Why can't you hear a pterodactyl go to the bathroom? Because the 'P' is silent!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
];

function getJoke() {
  // Get a random joke from the array
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];

  // Display the joke
  jokeEl.innerText = randomJoke;
}

// Add event listener to the button
btnEl.addEventListener("click", getJoke);
