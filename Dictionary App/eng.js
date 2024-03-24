const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const result = document.getElementById('result')
const voice = document.getElementById('voice')
const input = document.querySelector('input')

const btn = document.getElementById('search-btn')

input.addEventListener('keypress',(e) => {
  
  if(e.key == 'Enter'){
    e.preventDefault();
    searchFunc();
  } 
  

})


// function searchFunc(){
//   let word = document.getElementById('word').value;


//   fetch(`${url}${word}`)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//    let meaning = data[0].meanings[0].definitions[0].definition;
//    console.log(meaning)
//       result.innerHTML = ` 
//       <div class="word">
//       <h3 class="inword">${word}</h3>
//       <button id="search-btn" onclick = "play()"><i class="fas fa-volume-up"></i></button>
//     </div>
//     <div class="details">
//       <p>${data[0].meanings[0].partOfSpeech}</p>
//       <p>/${data[0].phonetic}/</p>
//     </div>    
//     <p class="word-mean">
//         ${meaning}
//     </p>
//     <p class="wd-example">
//     ${data[0].meanings[0].definitions[2].example}
//     </p>`

//     
    
//   }).catch(()=> {
//     result.innerHTML = `<h3 class="error">Didn't find the word</h3>`
    
//     console.log('Did not find the word!')
//   })
// }

function searchFunc(){
  let word = document.getElementById('word').value;

  fetch(`${url}${word}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const meaning = data[0]?.meanings[0]?.definitions[0]?.definition || "Definition not found";
    const example = data[0]?.meanings[0]?.definitions[2]?.example || "Example not found";

    result.innerHTML = ` 
      <div class="word">
        <h3 class="inword">${word}</h3>
        <button id="search-btn" onclick="play()"><i class="fas fa-volume-up"></i></button>
      </div>
      <div class="details">
        <p>${data[0]?.meanings[0]?.partOfSpeech || "Part of speech not found"}</p>
        <p>/${data[0]?.phonetic || "Phonetic not found"}/</p>
      </div>    
      <p class="word-mean">${meaning}</p>
      <p class="wd-example">${example}</p>`;

    voice.setAttribute('src',`${data[0]?.phonetics[1]?.audio || ""}`);
  })
  .catch(()=> {
    result.innerHTML = `<h3 class="error">Didn't find the word</h3>`;
    console.log('Did not find the word!');
  });
}
function play(){
  voice.play();
}
