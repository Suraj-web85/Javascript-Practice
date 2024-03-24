// const btn = document.getElementById('btn');
// const apiKey = 'MjyivuMD3BzbT3dSQuJS2A==VQqShyk3ccrJFGaW'
// const quote = document.getElementById('quote')
// const category = 'happiness'
// const author = document.getElementById('author')
// const url = `https://api.api-ninjas.com/v1/quotes?category=${category}&apiKey=${apiKey}`;

// btn.addEventListener('click',() =>{
//   fetch(url)
//   .then((response) => {
//     return response.json();

//   })
//   .then((data) => {
//     console.log(data); // Log the parsed JSON data
//     // Use the data to update the UI as needed
//   })
//   .catch((error) => {
//     console.error('Error fetching quotes:', error);
//   });
 
// })
const btn = document.getElementById('btn');
var apiKey = 'dF4w9rswAWXfxmR3pz7y6BEkYaRKKBZdpDrKzWT1';
const quote = document.getElementById('quote');
var category = 'health';
const author = document.getElementById('author');


btn.addEventListener('click', () => {
  // const url = `https://api.api-ninjas.com/v1/quotes?category=${category}&apiKey=${apiKey}`;
  const url = 'https://type.fit/api/quotes';

  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const index = Math.floor(Math.random() *data.length)
      console.log(index);
      quote.textContent = data[index].text
      author.textContent ="~ "+ data[index].author
     
    })
    .catch((error) => {
      console.error('Error fetching quotes:', error);
    });
});

