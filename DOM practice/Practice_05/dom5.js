//Dom manipulation

//Event Delegation

//It allows users to append a SINGLE event listener to a parent element
//that adds it to all of its present and future descendants that match a selector.

// document.querySelector("#iron-man").addEventListener("click", function (e) {
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "tomato";
//   }
//   console.log(target);
// });

// document.querySelector('#super-man').addEventListener('click',function(e){
//   const target = e.target;
//   if(target.matches('li')){
//     target.style.backgroundColor = 'blue';
//   }

// })

// document.querySelector('#wonder-woman').addEventListener('click',function(e){
//   const target = e.target;
//   if(target.matches('li')){
//     target.style.backgroundColor = 'yellow'
//   }

// })

// document.querySelector('#shaki-man').addEventListener('click',function(e){
//   const target = e.target;
//   if(target.matches('li')){
//     target.style.backgroundColor = 'lightblue'
//   }
// })

// document.querySelector('#pad-man').addEventListener('click',function(e){
//   const target = e.target;
//   if(target.matches('li')){
//     target.style.backgroundColor = 'darkgrey'
//   }
// })

document.querySelector('#mans').addEventListener('click',function(e){
  console.log(e.target.getAttribute('id') + " is clicked")

  const com = e.target
  if(com.matches('li')){
    com.style.backgroundColor = 'blue';
  }
  if(com.matches('ul')){
    com.style.backgroundColor = 'yellow'
  }

})

const ul = document.getElementsByClassName('sub-con')[0];
const li = document.createElement('li');

li.innerText= "Hulk";
li.setAttribute('id','hulk');
ul.appendChild(li);

