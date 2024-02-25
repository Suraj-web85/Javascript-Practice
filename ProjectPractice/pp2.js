let crossBtn = document.getElementById('cross-btn');
let modalCon = document.querySelector('.modal-container');
let openBtn = document.getElementById('openbtn');

openBtn.addEventListener('click',function(){

  modalCon.style.display = "block";
})

crossBtn.addEventListener('click',function(){
  modalCon.style.display = 'none';
})

window.addEventListener('click',function(e){

  if(e.target === modalCon){
    
    modalCon.style.display = 'none';
  }

})