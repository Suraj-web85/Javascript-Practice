window.addEventListener('beforeunload',(event) => {
  event.returnValue = 'are you sure you wnat to leave this site????????'
  alert(event.returnValue)
})