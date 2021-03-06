'use strict';




const airline='British Air Ways'
const plane='A320'
console.log(plane[0])
console.log('A320'[0])
console.log('A320'.length)
console.log(plane.indexOf('3'))
console.log(plane.slice())


function checkMiddleSeat(txt){
    return txt.includes('B')||txt.slice(-1)=='E'?'You gat the middle seat':'sorry'
}
console.log(checkMiddleSeat('11F'))

let str='  erdal   '
console.log(str.trim())//'erdal' remove all the whitespaces

let announcment='All passengers come to boarding door 23. Boarding door 23'
console.log(announcment.replaceAll('door','gate'))
console.log(announcment.replace(/door/g,'gate'))

const [firstName,lastName]='Erdal Dincer'.split(' ')
console.log(firstName)///Erdal
console.log(lastName)///Dincer

const newName=['Mr.',firstName,lastName.toUpperCase()].join(' ')
console.log(newName)//Mr. Erdal DINCER

const capitalizeNAme=function(txt){
    let [ftName,ltName]=txt.split(' ')
    ftName=ftName.replace(ftName[0],ftName[0].toUpperCase())
    ltName=ltName.replace(ltName[0],ltName[0].toUpperCase())
    return [ftName,ltName].join(' ')
        
    // return [firstChar.toUpperCase(),]
}



////padding a string

let message='Go to gate 23'
message=message.padStart(25,'+') ///message 25 karakter uzunlugunda olana kadar  + ekle
console.log(message)//++++++++++++Go to gate 23

let message2='Go to gate 23'
message2=message2.padEnd(25,'+')
console.log(message2)///Go to gate 23++++++++++++

function mascCreditCard(cardNumber){
    cardNumber=cardNumber+''
    return cardNumber.slice(-4).padStart(cardNumber.length-4,'*')
}
console.log(mascCreditCard(12345678909876))

///repeat

let warning='Bad weather.... All departures Delayed...'
// console.log(warning.repeat(5))
// let arr=['underscore_case','first_name','Some_Variable','calculate_AGE','delayed_depature']
// arr=arr.map(item=>{
//   item=item.split('_')
//   item=item[0]+item[1][0].toUpperCase()+item[1].slice(1)
//   return item
// })
// console.log(arr)

// underscore_case,first_name,Some_Variable,calculate_AGE,delayed_depature

let textArea=document.getElementById('textarea')


const cameCaseConverter=()=>{
  let arr=textArea.value.split(',')
  arr=arr.map((item,index)=>{
  item=item.split('_')
  item=item[0]+item[1][0].toUpperCase()+item[1].slice(1)
  console.log(item.padEnd(20) + '???'.repeat(index+1))
})
}


document.getElementById('btn').addEventListener('click',cameCaseConverter)



// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for(let flight of flights.split('+')){
  let[statu,direction,arrival,time]=flight.split(';')
  statu=statu.replace(/[^A-Za-z]/g,' ').trim()
  direction='from '+direction.slice(0,2).toUpperCase()
  arrival='to '+arrival.slice(0,2).toUpperCase()
  time=time.replace(':','h')
  console.log(`${statu} ${direction} ${arrival} ${time}`)
}




// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};