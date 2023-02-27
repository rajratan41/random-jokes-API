const joke = document.getElementById("joke");
const button = document.getElementById("jokeBtn");

button.addEventListener("click", generateJoke);

generateJoke();

// using async/await function
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://api.chucknorris.io/jokes/random");

  const data = await response.json();

  joke.innerHTML = data.value;
}
