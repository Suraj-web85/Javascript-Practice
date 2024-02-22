//Event listeners
const btn1 = document.querySelector('.btn-1');
btn1.addEventListener('click',function(){
  alert('I dont really love javascript');
})
const btn2 = document.querySelector('.btn-2');
btn2.addEventListener('click',popUp);

function popUp(){
  alert('I also dont really love javascript')
}
const box3 = document.querySelector('.box3');

box3.addEventListener('mouseover',function(){
  box3.style.backgroundColor = "black";
})
box3.addEventListener('mouseout',function(){
  box3.style.backgroundColor = '';
})

const box2 = document.querySelector('.box2');
box2.addEventListener('mouseover',function(){
  box2.style.backgroundColor= 'yellowgreen';
})
box2.addEventListener('mouseout',function(){
  box2.style.backgroundColor='';
})

const box1 = document.querySelector('.box1');
box1.addEventListener('mouseover',function(){
  box1.classList.add('backClr');
    
})
box1.addEventListener('mouseout',function(){
  box1.classList.remove('backClr');
})