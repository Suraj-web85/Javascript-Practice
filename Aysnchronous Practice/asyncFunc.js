// const myCar = {
//   make : 'honda',
//   price : 23444,
//   color:'black',
// }
// const obj1 = {
//   companyName : 'Symatic Engg Pvt Ltd',
//   companyManager : 'Amernath Tiwari',
//   compayOwner : 'Vijay sir',
//   task1(){
//   console.log('suraj');
//   },
//   fruits : ['mango', 'bannana', 'papaya'],
//   population : 1.8,
//   nesObj : {
//     companyName : 'Symatic Engg Pvt Ltd',
//   companyManager : 'Amernath Tiwari',
//   compayOwner : 'vinay sir',
//   task2(){
//   console.log('suraj');
//   },
//   fruits : ['mango', 'bannana', 'papaya'],
//   population : 1.8,




//   }
// }
// console.log(obj1.nesObj.compayOwner)
// obj1.nesObj.task2();

// function changeProp(myObj){
//   myObj.make= 'Ferrari';

// }

// console.log(myCar.make);
// changeProp(myCar);

// console.log(myCar.make);

// const myArr = ["sura","deep","ashu"]
// console.log(myArr[0])

// function changeEle(myArr){
//   myArr[0] = "sunmeri maihbuba"

// }
// changeEle(myArr)
// console.log(myArr[0])
// getName();
// getName2();

// var x= 1;
// a();
// b();
// console.log(x);
// function a(){
//   var x = 10;
//   console.log(x);

// }
// function b(){
//   var x = 100;
//   console.log(x);

// }

// function a(){
//   c();
//   function c(){
//   console.log(b);
//   }
// }
// var b = 10;
// a();


// const arr = [1, 2 ,3 ,4 ,5]

//    const binaryArr = arr.map((ele) =>{
//     return ele.toString(2);
//    })
//    console.log(binaryArr)

// const arr = [ 1, 3, 4 ,5 ,6, 7]
// const newVar = 
// arr.filter((x) =>{
//   return x > 5
// })

// console.log(newVar)
//  const arr = [1, 2, 3, 4 ,5]
//  const newVar = arr.reduce( (accumulator ,currentValue) => {
//   accumulator = accumulator * currentValue
//   return accumulator

//  }, 1)

//  console.log(newVar);

const object = [ 
  {username : 'saurbh' , pass : 123456 , age : 45},
  {username : 'suraj' , pass : 7890 ,age : 67},
  {username : 'yogesh' , pass : 6754 ,age : 98},
  {username : 'kesave' , pass : 567, age : 45},
  {username : 'samarth' , pass : 1234 ,age : 65},
]
// const newVarr = object.filter((obj) => {
//   return obj.age > 45
// }).map((x) => {
//   return x.username
// })
// // console.log(newVarr)
// const newVarr = object.reduce((acc, curr) => {
//   //  if(acc[age]){ //obj[key] = value
//   //  acc[age] = acc[age]++
//   //  }else{
//   //   acc[age]= 1
//   //  }
//   if(curr.age > 45){
//     acc.push(curr.username)
//   }
//   return acc;
// },[])
// console.log(newVarr)
// console.log(key.object[username])


  // const newArr = arr.map( (ele) =>{
  //   return ele * 2;

  // })
  // console.log(newArr)
  // const newArrThree = arr.map((x)=> {
  //   return x * 3;
  // })
  // console.log(newArrThree)
  // function task1(){
  //  console.log('suraj')
  // }
  // stk = () => {
  //  console.log('saurbh')
  // }
  // stk();

//undefined
// let a = 10;
// const c = 300;
// console.log(c); 
// console.log(a)
// var b = 100;


    //this forms a global execution context
// function outer(){

//   let message = "hello"
//   function inner(){
//     console.log(message)

//   }
//   inner()
// }
// outer()

// function createCounter(){
//   let count = 0;

//   function increment(){
//     count++;
//     console.log(`count increased to ${count}`);
//   }
//   return {increment};

// }
// const counter = createCounter()
// counter.increment();
// counter.increment();


// function outer(){
//   function inner(){

//   }
// }

// function human(n){
//   const name = n;
//   function sayName(){
//     console.log(`Hi my name is ${name}`);
//   }
//   function sayHowuFeel(){
//     console.log(`${name} is feeling good`);
//   }
  // sayName();
  // sayHowuFeel();

//   return {
//     sayName,
//     sayHowuFeel
//   }

// }
// const first = human('suraj');

// first.sayName();

// first.sayHowuFeel();

// function outerFunction(outerVariable){
//   return function innerFunction(innerVariable){
//     console.log('Outer Variable :' + outerVariable)
//     console.log('Inner Variable :' + innerVariable)
//   }

// }
// const newFunction =   outerFunction('outside'); //here outfunction has been invoked and innerfunction is returned to newfunction
// newFunction('inside')

// function greeetingFactory(greeting){
//   return function greet(person){
//     console.log(greeting + ', ' + person+ '!');
//   }
// }
// const sayHi = greeetingFactory('hi');
// const sayHello = greeetingFactory('hello');
// const sayHey = greeetingFactory('hey');

// sayHello('Suraj');
// sayHi('Deepak');
// sayHey('Ashu')

// function timer(){
//   return function numbers(){
//     for (let i = 1; i <= 5; i++) {
//      setTimeout(function(){
//       console.log(i);
//      },i*1000)
//     }
//   }
// }
// const start = timer();
// start();

// function outer(outerVariable){
//   return function inner(innerVariable){
//     console.log("outer variable  : " + outerVariable);
//     console.log("inner variable : "+ innerVariable)
//   }
// }
// const newFunction = outer('I am outer');
// newFunction('I am inner');

// function Counter(){
//   var count = 0;
//   this.incrementCounter = function() {
//     count++;
//     console.log(count);
//   }
//   this.decrementCounter = function() {
//     count--;
//     console.log(count);
//   }
// }
// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.decrementCounter();
//functino statement
// function a(){
//   console.log("acalled")
// }
//function expression
// var b = function (){
//   console.log('bcalled')
// }
//anonymous function 
// function (){
 //can't use because ananonymous function are only used where u have to get the values 
// }
//Named function expresion

//First class function 

// var a = function(param1){
//   param1();
// }
// function abc(){
//   console.log("i m gonna go inside the function yeahhh")
// }
// a(abc);

// var a = function b(){
//   return () => {

//   }
// }
// console.log(a);

// what is callback function 


    // setTimeout(function (){
    //   console.log("timer")

    // },5000)
    // function x(y){
    //   console.log('x');
    //   y();

    // }
    // x(function y(){
    //   console.log('y');

    // })
    // const radius = [1,2,3,4];


    // const area = function (radius){
    //   const outputArea = []
    //   for (let i = 0; i < radius.length; i++) {
    //     outputArea.push(Math.PI * radius[i] * radius[i]);
    //   }
    //   return outputArea;
    // }

    // console.log(area(radius));

    // const circumference = (radius) => {
    //   const outputCir = []
    //   for (let i = 0; i < radius.length; i++) {
    //     outputCir.push(Math.PI * radius[i] * 2  )
    //   }
    //   return outputCir;
    // }
    // console.log(circumference(radius));

    // const diameter = (radius) =>{
    //   const dia = [];
    //   for (let i = 0; i < radius.length; i++) {
    //     dia.push(2 * radius[i]);
        
    //   }
    //   return dia;

    // }
    // console.log(diameter(radius));

    // const arr = [ 1 , 2 , 3 , 4]

    // const areaLogic = (arr) =>{
    //   return Math.PI * arr * arr;
    // }
    // const crLogic = (arr) =>{
    //   return Math.PI * arr * 2;
    // }
    // const daLogic = (arr) =>{
    //   return 2 * arr;
    // }
    // Array.prototype.calculate = function (logic) {
    //   const result = [];
    //   for (let i = 0; i < this.length; i++) {
    //     result.push(logic(this[i]));
    //   }
    //   return result;
    // }
    // console.log(arr.map(areaLogic));
    // console.log(arr.calculate(crLogic))
    // console.log(arr.map(daLogic));
    // console.log(arr.map(crLogic));
    // console.log(calculate(arr, areaLogic));
    // console.log(calculate(arr, crLogic));
    // console.log(calculate(arr, daLogic));

  //  const r = [23, 43,24,54]
  //  const output = r.map( (r)=>{
  //   return 4 * r;
  //  }

  //  )
  //  console.log(output)
//   const data = [
//     {
//       firstname : "suraj", 
//       lastname : 'yadav',
//       age : 25
//     },
//     {
//       firstname : "shivam", 
//       lastname : 'sharma',
//       age : 22
//     },
//     {
//       firstname : "shubham", 
//       lastname : 'maurya',
//       age : 20
//     },
//     {
//       firstname : "satyam", 
//       lastname : 'gupta',
//       age : 26
//     },
  
// ]
// const output = data.map((obj) => {
//   return obj.firstname + " " +obj.lastname;

// })

// console.log(output);

// const arr = [1 , 2 , 3, 4, 5];
// const result = arr.map((elements) =>{

//   return elements.toString(2);

// })
// console.log(result)

// const output1 = arr.filter(function isOdd(x){
//   return x % 2;
// })
// console.log(output1)
// const output2 = arr.filter(function isEven(ele){
//   return ele > 4;
// })
// console.log(output2)

// const arrays = [5, 1, 2, 3, 4]

// let max = 0;
// const findSum =  () =>{
//   for (let i = 0; i < arrays.length; i++) {
//     if(arrays[i] > max){
//       max = arrays[i];
//     }
//   }
//   return max;
// }
// const reslt = findSum();
// console.log(reslt);

// const sumReduce = arrays.reduce( (acc, curr ) => {
//   if(curr > acc){
//     acc = curr;
//   }
//   return acc

// }, 0)
// console.log(sumReduce)

// const data = [
//   {
//     firstname : "suraj", 
//     lastname : 'yadav',
//     age : 25
//   },
//   {
//     firstname : "shivam", 
//     lastname : 'sharma',
//     age : 22
//   },
//   {
//     firstname : "shubham", 
//     lastname : 'maurya',
//     age : 20
//   },
//   {
//     firstname : "satyam", 
//     lastname : 'gupta',
//     age : 26
//   },

// ]

// const result = data.reduce( (strObj, inObj) => {
  

//   if(inObj.age > 20){
//     strObj.push(inObj.firstname)
//   }

//   return strObj;
// },[])
// console.log(result)

// const result2 = data.filter((obj) => obj.age > 20).map((obj) => obj.firstname)
// console.log(result2)

// const result = data.map((obj) => {
//   return obj.firstname + " " + obj.lastname;
// })
// console.log(result)
// const ageData = data.reduce( (startingObject, obj) => {
//   if(startingObject[obj.age]){
//     startingObject[obj.age] = ++startingObject[obj.age]

//   }else{
//     startingObject[obj.age] = 1;
//   }
//   return startingObject;
// },{})

// console.log(ageData)