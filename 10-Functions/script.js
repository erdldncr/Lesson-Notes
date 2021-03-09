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