// console.log('suraj');
// console.log('yadav');

// setTimeout(function cb(){
//   console.log('Hey i am here');
// }, 5000)

// const cart = ['Shoes' , 'Pants' , 'Kurta']
// api.createOrder(cart , () =>{
//   api.proceedPayment(() => {
//     api.showOrderSummary( () => {
//       api.updateWallet();
//     });
//   });

// });

// apis are dependent on one another this type of code are unmaintainable pyramid of doom

// inversion of control ..you loose the control of code while using callbacks

// let promise1 = new Promise((resolve ,reject) => {
//   let a = 1 + 1;
//   if(a == 1){
//     resolve('hey i m being resolved')
//   }else{
//     reject('i am being rejected')
//   }
// });

// promise1.then((resolve) =>{
//   console.log("YOU are resolved : " + resolve)
// }).catch((reject) => {
//   console.log("you are rejected : " + reject )
// })
// const userLeft = false;
// const userWatchingCatMeme = true;
// let promise = new Promise( (resolve, reject) => {
//   if(userLeft){
//     reject({
//       name : 'user left',
//       message :':('
//     })
//   }else if(userWatchingCatMeme){
//     reject({
//       name : 'user watching cat meme',
//       message : 'suraj'
//     })
//   }else {
//     resolve('Thumbs up and subscribe')
//   }
// }
// )

// promise.then((message) => {
//    console.log('success : '+ message)
// }).catch((error) => {
//   console.log(error.name +  ' ' + error.message)
// })

// watchTutorialCallback((message) => {
//   console.log('Success :' + message)
// },(error) => {
//   console.log(error.name + ' ' + error.message)
// })

// const recordVideoOne = new Promise((resolve , reject)=> {
//   resolve('Vide One Recorded')
// });
// const recordVideoTwo = new Promise((resolve , reject) => {
//   resolve('Vide Two Recorded')
// });
// const recordVideoThree = new Promise((resolve , reject) => {
//   resolve('Vide Three Recorded')
// });

// Promise.all([
//   recordVideoOne,
//   recordVideoTwo,
//   recordVideoThree
// ]).then((messages) => {
//   console.log(messages)
// })

// const recordVideoOne = new Promise((resolve, reject) => {
//   // Simulate a successful recording
//   resolve('Video One Recorded');
// });

// const recordVideoTwo = new Promise((resolve, reject) => {
//   // Simulate a failure in recording
//   reject('Video Two Recording Failed');
// });

// const recordVideoThree = new Promise((resolve, reject) => {
//   // Simulate a successful recording
//   resolve('Video Three Recorded');
// });

// Promise.all([
//   recordVideoOne,
//   recordVideoTwo,
//   recordVideoThree
// ]).then((messages) => {
//   console.log(messages);
// }).catch((error) => {
//   console.error(error);
// });

// function getWeather(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('sunny')
//     }, 5000)

//   })
// }

// function getWeatherIcon(weather){

// }

// function onSuccess(data){
//   console.log(`First Param : ${data}`)
// }
// function onError(data){
//   console.log(`Second Pram : ${data}`)
// }
// getWeather().then(getWeather).then(onSuccess,onError);

// const promiseOne = new Promise(function(resolve , reject){
//   setTimeout(function(){
//     console.log('Async is completed')
//     resolve()
//   },1000)
// })

// promiseOne.then(function(){
//   console.log('Promise Consumed')
// })
// new Promise(function(resolve, reject){
//   setTimeout(function(){
//     console.log("async task 2 ");
//     resolve()
//   },1000)
// }).then(function(){
//   console.log('async 2 resovled')
// })

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "chai", email: "surajyadavssr@gmail.com" });
//   }, 1000);
// });

// promiseThree.then(function (data) {
//   console.log(data)
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "suraj", password: 123456 });
//     } else {
//       reject("Error : Something went wrong");
//     }
//   }, 1000);
// });
// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user;
//   })
//   .then((username) => {
//     console.log(username.username);
//     return username.password
//   })
//   .then((password) =>{
//     console.log(password)
//   })
//   .catch(function (error) {
// //     console.log(error);
// //   }).finally(() => console.log('The promise is either resolved or rejeccted '));

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() =>{
//     let error = true;
//     if (!error) {
//       resolve({ username: "suraj", password: 123456 });
//     }else {
//       reject("Error : Something went wrong");
//     }
//   }, 1000 )
// });

// async function consumePromiseFive(){
//   try {
//     const response = await promiseFive
//     console.log(response)
//   } catch (error) {
//     console.log(error)
    
//   }
// }

// consumePromiseFive()

// try block catch 

  // async function getData(){
  //   try {
  //     const reponse =await fetch('http://api.githu.com/users/Suraj-web85')
  //     const jsonData =await reponse.json();
  //     console.log(jsonData);
      
  //   } catch (error) {
  //     console.log("Error : " + Error)
      
  //   }
  // }

  // getData();
//  fetch('https://api.github.com/users/Suraj-w23423423eb85').then((data)=>{
//   return data.json();
//  })
//  .then((data) =>{
//   console.log(data)
//  })
//  .catch((error) =>{
//   console.log(error)
//  })


// function task1(){
//   console.log('Task 1')
// }
// function task2(){
//   console.log('Task 2')
// }
// task1();
// task2();

// function task2(task1){
// console.log(task1);
// }
// task2(task1);

// setInterval(() => {
//   console.log('sarubh');
// }, 1000);
// setTimeout(() =>{
//   console.log('saurbh')
// }, 1000)