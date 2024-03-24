const randomJoke = document.getElementById('joke');
const btn = document.getElementById('btn')
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

let getJoke = () => {
  randomJoke.classList.remove('active')
  fetch(url)
  .then((data) => data.json())
  .then((item) => {
    randomJoke.textContent =`${item.joke}`;
    
    setTimeout(() =>{
      randomJoke.classList.add('active')
    }, 100)
  })
}
btn.addEventListener('click', getJoke)
