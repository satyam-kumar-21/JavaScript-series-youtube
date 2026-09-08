// js provides built in Date object to work with - date, time, year etc

// const date = new Date() //current date and time
// console.log(date)

// you can create your own date using date string

// const date = new Date("2025-02-01") //year-month-day
// console.log(date)

// const date = new Date(2025,2,1)
// console.log(date)


//JS month are zero based

// 0- jan
// 1-feb
// .
// 11-december

//weeks are also zero based 

// 0-sunday
// 1-monday
// .
// 6- satur....


//gettings Date and Time

// const date = new Date()

// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())

// console.log(date.getDay())

// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())


// //settings Date and Time

// const date = new Date()

// date.setFullYear(2024)
// date.setMonth(10)
// date.setDate(12)

// // console.log(date)


// date.setHours(11)
// date.setMinutes(29)
// date.setSeconds(40)
// console.log(date)


// timestamp

// const now = Date.now()
// console.log(now)

// comparing dates

// dates are campared using timestamp

// const date1 = new Date("2026-09-01")
// const date2 = new Date("2026-09-03")

// console.log(date1 < date2)


//date formating

// const date = new Date()

// console.log(date.toDateString())
// console.log(date.toTimeString())

// console.log(date.toISOString())

// local formatting

// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.toString())


// utc

// const date = new Date()

// console.log(date.getUTCFullYear())


// setTimeout()

// function greet(){
//     console.log("Hello i'm function")
// }

// setTimeout(greet, 3000)


// setTimeout(() => {
//     console.log("Hi im from timeout")
// }, 2000)


// setTimeout with return 

// const timeoutId = setTimeout(() => {
//     console.log("Hi im from timeout")
// }, 2000)

// clearTimeout(timeoutId)
// console.log(timeoutId)


//setInterval()

// function greet() {
//     console.log("satyam")
// }
// setInterval(greet, 2000)


// setInterval(() => {
//     console.log("satyam")
// }, 2000)


// const intervalId = setInterval(() => {
//     console.log("satyam")
// }, 2000)

// console.log(intervalId)


//example - counter

let counter = 0

const intervalId = setInterval( () => {
    counter++
    
    console.log(counter)
    if(counter === 10){
        clearInterval(intervalId)
    }
} , 1000)