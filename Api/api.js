// const url = "https://api.github.com/users/Suraj-web85"
// let promise = fetch(url)
// console.log(promise)

// var a = 10;
// var b = false;
// var c = false; 

// if(a == b){
//   //when condition is true
//   console.log('they are same');
// }else{
//   console.log('they are not same');
// }

//promise 
// let promise = new Promise( function(resolve, reject){
//   let error=false;
//   if(!error){
//     reject('Error : ')
//   }else{
   
//     resolve({username : 'saurab shewale' , password : 123456})
//   }
// })
// .then(function(data){   //
//   // data = {
//   //   username : 'saurabh shewale'
//   //   password : 123456
//   // }
//   console.log(data)

//   return data.username


// }).then(function(data){

//   // data = data.username  
//   console.log(data)
// }).catch(function(data){
//   console.log(data)

// })

const url = 'https://api.github.com/users/Suraj-web85'
// const promise = fetch(url)
// promise.then(function(response){
//   let data = response.json() 
//   console.log(data)
// }).catch(function(err){
//   console.log('Error not found : ' + err)
// })
// async function getData(){
  
 fetch('https://api.github.com/users/Suraj-web85345678')
  .then( (data) =>{
    console.log(data.status)
    console.log(data.json())
  } ).catch((error) =>{
    console.log(error)
  }).finally(()=>{
    console.log('Promise is either resolved or rejected')
  })
//   try {
//     const response = await fetch('https://api.github.com/users/Suraj-wdfghj');
//     const data = await response.json();
//     console.log(data)
//     console.log(response.status)
//     console.log(response.ok)
//     if (!response.ok) {
//       throw new Error('Failed to fetch data: ' + response.status);
//     }
    
//   } catch (error) {
//     console.log('Error : ' + error)
//   }

// }



// getData();
