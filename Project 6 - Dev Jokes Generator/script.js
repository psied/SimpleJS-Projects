//Events
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

function getJoke(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random?category=dev");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      jokeEl.innerHTML = JSON.parse(this.responseText).value;
    } else {
      jokeEl.innerHTML = "Something went wrong! Try refreshing";
    }
  };
  xhr.send();
}

document.addEventListener("DOMContentLoaded", getJoke);

jokeBtn.addEventListener("click", getJoke);
