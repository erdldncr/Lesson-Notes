const gameEvents=new Map([
    [17, ' ⚽️Goal'],
    [36,'Substitution'],
    [47, ' ⚽️Goal'],
    [64,'Yellow Card'],
    [69, ' Red Card'],
    [70,'Substitution'],
    [72,'Substitution'],
    [76, ' ⚽️Goal'],
    [80, ' ⚽️Goal'],
    [64,'Yellow Card'],
]);


///to find unique events

const uniqueEvents=[...new Set(gameEvents.values())]
console.log(uniqueEvents)
///to delete event at 64 minute
gameEvents.delete(64)
console.log(gameEvents)

////updating keys
for(let [key,value] of gameEvents){
 const half= key<45?'FIRST':'SECOND'
 console.log(`[${half} HALF] ${key}:${value}`)   
}
