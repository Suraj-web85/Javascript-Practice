//Dom manipulation
//Event propagation

window.addEventListener('click',function(){
  console.log('Window');
},false);

document.addEventListener('click',function(){
  console.log('Document')
},false);

document.querySelector('.second-div').addEventListener( 'click', function(e){
  e.stopPropagation();
  console.log('second-div')
},{once:true});

document.querySelector('.first-div').addEventListener('click',function(){
  console.log('first-div')
},false)

document.querySelector('.button').addEventListener('click',function(e){
  e.preventDefault();
  console.log(e.target.innerText = "clicked")
},false)