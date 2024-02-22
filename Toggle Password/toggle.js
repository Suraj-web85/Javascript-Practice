const inputText = document.getElementById('input-text');

const eyeIcon = document.getElementById('eye-close');


eyeIcon.addEventListener("click",function(){
  if(inputText.type == "password"){
    inputText.type = "text";
    eyeIcon.src = "./eye-icons/eye-open.png";
  }else{
    inputText.type = "password";
    eyeIcon.src = "./eye-icons/eye-close.png";
  }
})