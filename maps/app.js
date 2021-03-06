const ordersSet= ['Pasta'
,'Pizza',
'Pizza',
'Risotto',
'Pasta',
'Pizza',
]
const rest= new Map()
rest.set('name','Erdal')
rest.set(1,'1992')
rest.set(2,'2021')
console.log(rest)///{"name" => "Erdal", 1 => "1992", 2 => "2021"}

rest 
.set('orders',['Pasta','Pizza','Pizza','Risotto','Pasta','Pizza',])
.set('open',11)
.set('close',23)
.set(true,'We are open :D')
.set(false,'We are close :(')
console.log(rest)
////{"name" => "Erdal"}
// {1 => "1992"}
// {2 => "2021"}
// {"orders" => Array(6)}
// {"open" => 11}
// {"close" => 23}
// {true => "We are open :D"}
// {false => "We are close :("}

console.log(rest.get('name'))//Erdal

const time=21;
console.log(rest.get(time>rest.get('open')&&time<rest.get('close')))///We are open

console.log(rest.has('open'))//like includes in arrays
rest.delete('open')//to delete items
console.log(rest.size)//to see the length of map

const arr=[1,2]
rest.set(arr,'Test')//arrays can be key but needs to be initialized first
console.log(rest)

rest.set(document.querySelector('h1'),'Heading')
// {h1 => "Heading"}
// key: h1
// value: "Heading"


const question= new Map([['question','What is the best programming language in the world?'],
[1,'C'],
[2,'Jave'],
[3,'JS'],
['correct',3],
[true,'Correct :)'],
[false,'Try again']])


//// To convert an object to map
let person={
name:'Erdal',
surname:'Dincer',
age:20,
country:'Haymana'
}
let personMap=new Map(Object.entries(person))

////itearetor
console.log(question.get('question'))///What is the best programming language in the world?
for(let [key,value] of question){
    if(typeof key=='number'){
        console.log(`${key}:${value}`)///// 1:C 2:Jave 3:Js
    }
}
const answer= Number(prompt('What is answer?'))

 console.log(question.get( question.get('correct')===answer))// ic kisimdan ture= yada false gelecek questionun icinde de de ture ve false keyler var cikan sonucu en distaki get ile cagryrsun guzelll

 /// xonvert map to  an array
 console.log([...question])

 ///map methods
console.log(question.keys())
console.log(question.values())