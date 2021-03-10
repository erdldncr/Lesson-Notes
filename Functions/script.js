'use strict';
const bookings=[]
const createBooking=(
    flightNum
    ,numPassengers=1
    ,price=199*numPassengers)=>{
    //ES%
    // numPassengers= numPassengers ||1;///eger numpassengers falsy se dgeri 1 olacak
    // price=price||1;
    const booking={
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
}
createBooking('LH123')
createBooking('LH123',2,800)
createBooking('LH123',2)
createBooking('LH123',5)

createBooking('LH123',undefined,1000)///to skip any parameter just type undefined


const oneWord= (str)=>{

    return str.replace(/ /g,"")
}
const uppperFirstWord=(str)=>{
    const [first,...others]=str.split(' ')
    return [first.toUpperCase(),...others].join('')
}
const transformer=(str,fn)=>{
    console.log(`Original String: ${str}`)
    console.log(`Transform string: ${fn(str)}`)
    console.log(`Transformed by ${fn.name}`)
}
transformer('JavaScript is the best!',uppperFirstWord)

const ConsoleWord=(str)=>{console.log(str)}

transformer('JavaScript is the best!',oneWord)

let arr=['erdal','Ceno','Fato','Ero']
arr.forEach(ConsoleWord)
    

const greet=function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}

const greeting=greet('Heyyo')
greeting('erdal')
//////or//
const greeter=greeting=>name=>console.log(`${greeting} ${name}`)

greeter('Hi')('erdal')
