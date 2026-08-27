// function greet(name){
//     console.log("Hello",name)
// }

// greet("Satyam")
// greet("Shivam")

//default parameter

// function greet(name = "Guest"){
//     console.log("Hii,", name)
// }

// greet("Satyam")

// function with return 

// function add(a,b){
//     return a+b
// }

// console.log(add(10,20))

// let result = add(10,20)
// console.log(result)

//function Expression

// const greet = function (name){
//     console.log("Hii", name)
// }
// greet("Satyam")

// Arrow function 

// const add = (a,b) => {
//     return a+b
// }

// console.log(add(10,15))

//for one expression

// const add = (x,y) => x+y
// console.log(add(12,45))


// IIFE

// (function (){
//     console.log("Hello Duniya")
// })();

//Callback function

// function processUser(callback1){
//     callback1("satyam")
// }

// function greet(name){
//     console.log("hello",name)
// }
// processUser(greet)

//HOF

// function calculate(a,b,c){
//     return c(a,b)
// }

// function add(x,y){
//     return x+y
// }
// console.log(calculate(10,50,add))


// recursive function

// function countdown(n){
//     if(n === 0){
//         return
//     }
//     console.log(n)
//     countdown(n-1)
// }
// countdown(5)


// function declaration hoisting

// greet()

// function greet(){
//     console.log("Satyam")
// }


// function expression hoisting 

greet()

const greet = function (){
    console.log("Satyam")
}