'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements=(movements)=>{
  containerMovements.innerHTML=''
  movements.forEach((mov,i)=>{
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
   
   containerMovements.insertAdjacentHTML('afterbegin',html)
}
  )
}
  
displayMovements(account1.movements)



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// checkDogs([3,5,2,12,7],[4,1,15,8,3])

// function checkDogs(dogsJulia,dogsKate){
//   dogsJulia=dogsJulia.slice(1,dogsJulia.length-1)
//   let arr=[...dogsJulia,...dogsKate]
//   arr.forEach((element,index)=>{
//     element>=3?console.log(`Dog number ${index+1} is an adult, and is ${element} years old`):console.log(`Dog number ${index+1} is an puppy, and is ${element} years old`)
//   })
// }

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd=1.1

const movementsUsd=movements.map(item=>item*euroToUsd)
console.log(movementsUsd)

const movementsUsdfor=[]
for(const movement of movements){
   
    movementsUsdfor.push(movement*euroToUsd)
}
console.log(movementsUsdfor)

const deposits=movements.filter(movement=>movement>0)
console.log(deposits)
const withdrawals=movements.filter(movement=>!deposits.includes(movement))
console.log(withdrawals)
const depositsFor=[]
const withdrawalsFor=[]
for(const mov of movements ){
   mov>0?depositsFor.push(mov):withdrawalsFor.push(mov)
}
///Maximum value
const max=movements.reduce((max,mov)=>mov>max?mov:max,0)
console.log(max)

checkDogs([3,5,2,12,7],[4,1,15,8,3])

function checkDogs(dogsJulia,dogsKate){
  dogsJulia=dogsJulia.slice(1,dogsJulia.length-1)
  let arr=[...dogsJulia,...dogsKate]
  arr.forEach((element,index)=>{
    element>=3?console.log(`Dog number ${index+1} is an adult, and is ${element} years old`):console.log(`Dog number ${index+1} is an puppy, and is ${element} years old`)
  })
}


let dogsJulia=[3,5,2,12,7]
let dogsKate=[4,1,15,8,3]

function calcAverageHumanAge(arr){
  arr= arr
  .map((dog)=> dog<=2?2*dog:16+dog*4)
  .filter(dog=>dog>18)
  .reduce((sum,dog)=>sum+dog/arr.length,0)
  return arr

}
console.log(calcAverageHumanAge(dogsJulia))


let sum=movements.filter(mov=>mov>0)
.map(mov=>mov*euroToUsd).
reduce((sum,mov)=>sum+mov,0)
console.log(sum)

const account= accounts.find(account=>{
  return account.owner==='Jessica Davis'
})
console.log(account)
 
////flat and flatMap


/////flat
let overallBalance=accounts
.map(acc=>acc.movements)
.flat()
.reduce((a,b)=>a+b,0)
console.log(overallBalance)

////flatMap
let overallBalance2=accounts
.flatMap(acc=>acc.movements)
.reduce((a,b)=>a+b,0)
console.log(overallBalance)


///// creating an array with ARray from
///_ means  parameter won;t be used
const x=Array.from({length:7},(_,index)=>index+1)
console.log(x)

 
let depositss= accounts.flatMap(account=>{
  
 return account.movements.filter(mov=>mov>1000)
}).length


// let objOfmov=accounts
// .flatMap(account=>account.movements)
// .reduce((a,b)=>{

// return  b>0?(a.depo+=b):(a.withdrawals+=b)

// },{depo:0,withdrawals:0})
// console.log(objOfmov)

const dogs=[
  {weight:22,curFood:250,owners:['Alice','Bob']},
  {weight:8,curFood:200,owners:['Alice']},
  {weight:13,curFood:275,owners:['Sarah','John']},
  {weight:32,curFood:340,owners:['Micheal']}
]

dogs.map(dog=>dog.recPortion=dog.weight**0.75*28)
console.log(dogs)

const s=dogs.find(dog=>dog.owners.includes('Sarah')).curFood>dogs.find(dog=>dog.owners.includes('Sarah')).recPortion?'Eating to much':'Eaiting little'
  console.log(s)

const ownersEatTooMuch=dogs.filter(dog=>dog.curFood>dog.recPortion).flatMap(dog=>dog.owners)
console.log(ownersEatTooMuch)
const ownersEatLittle=dogs.filter(dog=>dog.curFood<dog.recPortion).flatMap(dog=>dog.owners)
console.log(ownersEatLittle)

let strLittle= ownersEatLittle.map((owner,index)=>index<ownersEatLittle.length-1?`${owner} and`:`${owner}' dogs eat too little`).join(' ')
console.log(strLittle)
let strMuch= ownersEatLittle.map((owner,index)=>index<ownersEatLittle.length-1?`${owner} and`:`${owner}' dogs eat too much`).join(' ')
console.log(strMuch)