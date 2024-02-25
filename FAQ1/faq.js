
const openIcon = document.querySelectorAll('.plus-icon');
const ansWers = document.querySelectorAll('.ans-wers');

openIcon.forEach((openIcon, index) => {
  openIcon.addEventListener('click', function() {
    console.log('you are clicked');
    ansWers[index].classList.toggle('active');
    if (openIcon.innerHTML === '+') {
      openIcon.innerHTML = '-';
    } else {
      openIcon.innerHTML = '+';
    }
  });
});
