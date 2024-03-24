//document.querySelector()
// document.getElementById()
//addEventListener()
// if Statements
//to String()
// setInterval()
// innerHTML
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let seconds = 0;
let miliSeconds = 0;
let minutes = 0;
let hours = 0;

let leadingHours = 0;
let leadingMinutes = 0;
let leadingSeconds = 0;
let leadingMiliSeconds = 0;

let timerStatus = 'stopped';
let timerInterval = null; 

const stopWatch = () =>{

  
  miliSeconds++;
  // seconds++

  if(miliSeconds / 60 === 1){
    //if miliseconds reaches 100 then seconds will be 1
    miliSeconds = 0;
    seconds++;
    if(seconds / 60 === 1){
      seconds = 0;
      minutes++;
      if(minutes / 60 === 1){
        hours++;
      }
  
    }
  }


  // if(seconds / 60 === 1){
  //   seconds = 0;
  //   minutes++;
  //   if(minutes / 60 === 1){
  //     hours++;
  //   }

  // }
  if(miliSeconds < 10){
    leadingMiliSeconds = "0" +  miliSeconds.toString();
  }else{
    leadingMiliSeconds = miliSeconds;
  }
  if(seconds < 10){
    leadingSeconds = "0"+seconds.toString();
  }else{
    leadingSeconds = seconds;
  }
  if(minutes < 10){
    leadingMinutes = "0"+minutes.toString();
  }else{
    leadingMinutes = minutes;
  }
  if(hours < 10){
    leadingHours = "0"+hours.toString();
  }else{
    leadingHours = hours;
  }
  let displayTimer = document.getElementById('timer').innerText = leadingHours + ":"+leadingMinutes+ ":"+leadingSeconds +":"+ leadingMiliSeconds ;
}
startStopBtn.addEventListener('click',()=>{
  if(timerStatus === 'stopped'){
    timerInterval = window.setInterval(stopWatch,2/3);
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="play"></i>`
    timerStatus = 'started';
  }else{
    window.clearInterval(timerInterval);
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = 'stopped';

  }
  
})
resetBtn.addEventListener('click',()=>{ 
    window.clearInterval(timerInterval)
    seconds = 0;
    minutes = 0;
    hours = 0;
    miliSeconds = 0;
    document.getElementById('timer').innerText = '00:00:00:00' 
    if(timerStatus === 'started'){
      document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    }
  
})


