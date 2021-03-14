// const secureBooking=()=>{

// let passengerCount=0;
// return ()=>{
//     passengerCount++
//     console.log('passengerCount '+passengerCount)
// }
// }
// const booker=secureBooking()

// booker();
// booker();
// booker();

// let a;
// function closure(){
//   let  b=3
//     a=function(){
//         console.log(b)
//     }

// }
// const c=function(){
//     const b=777;
//     a=()=>{
//         console.log(b*2)
//     }
// }
// closure()
// a()
// c()
// a()
// console.log(b)




    (function(){
        const header=document.querySelector('h1');
        header.style.color='blue';
        document.addEventListener('click',()=>{
            header.style.color='red';
        }
       
    )})();
