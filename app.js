const ordersSet= new Set(['Pasta'
,'Pizza',
'Pizza',
'Risotto',
'Pasta',
'Pizza',
])
console.log(ordersSet)///{"Pasta", "Pizza", "Risotto"}

console.log(new Set('erdal'))//{"e", "r", "d", "a", "l"}

console.log(ordersSet.size) //to see length of the set

console.log(ordersSet.has('Pizza'))//like array includes method returns true||false
ordersSet.add('Garlic Bread')//to add new element to set

// ordersSet.clear() to delete all elements from array

ordersSet.delete('Risotto')//to delete an element from set
console.log(ordersSet)///{"Pasta", "Pizza", "Garlic Bread"}

//to print elements
for(let order of ordersSet) console.log(order) ///Pasta Pizza Garlic Bread


///example

const staff=['Waiter','Chef','Waiter','Manager','Chef','Waiter']
const staffUnique= new Set(staff)///the output is set
console.log(staffUnique) //{"Waiter", "Chef", "Manager"}
console.log([...new Set(staff)])//["Waiter", "Chef", "Manager"]

///to see how many different characters the string has
console.log(new Set('erdal dincer').size)
