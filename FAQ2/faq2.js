const accordian = document.querySelectorAll('.accordian');

accordian.forEach( function(accordian) {
  const icon = accordian.querySelector('.icon');
  const questions= accordian.querySelector('.question');
  const answer = accordian.querySelector('.answers')
  questions.addEventListener('click',function(){
    // icon.classList.toggle('active');
    // answer.classList.toggle('active');   
    if(icon.classList.contains('active')){
      icon.classList.remove('active');
      answer.style.maxHeight = null;
    }else{
      icon.classList.add('active')
      answer.style.maxHeight = answer.scrollHeight + 'px';

    }
  })
})