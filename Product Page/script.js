let imageSlide = document.getElementById('image-slide');

const btn = document.getElementsByClassName('btn');

btn[0].addEventListener('click', function(){
  imageSlide.src = "images/image1.png";
  for(bt of btn){
    bt.classList.remove('active')

  }
  this.classList.add('active');
  
})
btn[1].addEventListener('click', function(){
  imageSlide.src = "images/image2.png";
  for(bt of btn){
    bt.classList.remove('active')

  }
  this.classList.add('active');
  
})
btn[2].addEventListener('click', function(){
  imageSlide.src = "images/image3.png";
  for(bt of btn){
    bt.classList.remove('active')

  }
  this.classList.add('active');
  
})