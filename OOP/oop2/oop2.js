// object oriented programming its a programming paradigm
// object is collection of properties and methods
// why use oop
// Constructor functions
// Prototypes
// Classes
// instances ( new , this )
// polymorphism abstraction encapsulation inheritance
// const user = {
//   username : 'suraj yadav',
//   loginCount : 8,
//   signedIn : true,
//   getUserDetails : function() {
//     console.log('Got user data from database');
//   }
// }
// console.log(user['username']);
// user.getUserDetails();//

//Constructor function

// function BankAccount(username , balance = 0){
//   this.username = username;
//     this.accountNum = Date.now();
//     this.balance= balance;
//     this.deposit  = (amount) =>{
//       this.balance = this.balance + amount;
//       // console.log(deposit)
//     }
//     this.withDraw = (amount) => {
//       this.balance -= amount;
//     }

  // }
//   const surajAccount = new BankAccount('suraj yadav' , 1000);

//   surajAccount.deposit(5000)
//   surajAccount.withDraw(4000)
 

//   console.log(surajAccount.balance)
//   console.log(surajAccount)
// const accounts = []
// const accForm = document.querySelector('.acc-form')
// const customerName = document.querySelector('.cust-name')
// const balance = document.querySelector('.bal-nce')

//   accForm.addEventListener('submit',(e) =>{
//     e.preventDefault();
//     console.log(customerName.value , balance.value);
    
//     const accNew = new BankAccount(customerName.value , +balance.value); 

//     accounts.push(accNew);
//     console.log(accounts);

//   })

  
  // const depositForm = document.querySelector('.deposit-form')
  // const accountNumber = document.querySelector('.accountNumber')
  // const amount = document.querySelector('.amount')
  
  //  depositForm.addEventListener('submit',(e) => {
  //   e.preventDefault();
  //   const accNum = parseInt(accountNumber.value);
  //   const depositAmount = parseInt(amount.value)
  //   console.log(accNum,depositAmount)
  //   const account = accounts.find((account) => account.accountNum === accNum )
  //   account.deposit(depositAmount);

  //   console.log(accounts)
    
    

  //  })

  // surajAccount.balance = 100000;
  // console.log(surajAccount)

  function BankAccount(username, balance = 0){
    this.username = username;
    this.balance = balance;
    this.accountNum = Date.now();
    this.deposit = function(amount){
      this.balance += amount;
      console.log(balance)
    };
    this.withdraw = function(amount){
      this.balance -= amount;
      console.log(balance)
    }

  }

  const accountForm = document.querySelector('.acc-form')
  const customerName = document.querySelector('.cust-name')
  const initBal = document.querySelector('.bal-nce')
  const accountNumber = document.querySelector('.accountNumber')
  const amount = document.querySelector('.amount')
  const depositForm = document.querySelector('.deposit-form')
  const arr = []

  accountForm.addEventListener('submit',(e) => {
    e.preventDefault();
    console.log(customerName.value , +initBal.value)
    const account = new BankAccount(customerName.value , +initBal.value);
    arr.push(account);
    console.log(arr)

  })
  depositForm.addEventListener('submit' , (e) =>{
    e.preventDefault();
    
    arr.forEach((ele) => {
      
      const accnt = ele.accountNum === +accountNumber.value ;
      // console.log(accnt)
      if(accnt){
        ele.deposit(+amount.value)
        console.log(ele)
      }
      


    })
   

  })


