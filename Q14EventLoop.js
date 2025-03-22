console.log("Begin")  //execute first because it is first synchronous statement in the code

setTimeout(() => {
    console.log("Timeout Task")//this statement is macrotask queue and  execute in the last
}, 0)

Promise.resolve().then(() => { 
    console.log("Promise Task")//this statement is microtask queue and  execute after the synchronous code
})

console.log("End") // this is second synchronous statement after the the Begin statement thats why execute after Begin statement

