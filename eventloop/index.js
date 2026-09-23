// console.log("Step 1")
// for(let i=0; i< 5; i++){
//     console.log(i)
// }
// console.log("Step 5")

//asynchronous 

// console.log("start")

// setTimeout(()=> {
//     console.log("Timers")
// }, 2000)

// console.log("end")


//callback

// const callbackFun = ()=> {
//     console.log("Timers")
// }
// setTimeout(callbackFun, 2000) //here callbackFun is a callback function

// function kuchhbhi(args1,args2){
//     args1()
// }
// kuchhbhi(callbackFun,"satyam")


//eventloop

console.log("Start")
setTimeout(()=> {
    console.log("Macrotask")
},0)

Promise.resolve().then(()=>{
    console.log("microtask")
})
console.log("end")