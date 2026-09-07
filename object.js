//Object literal

// const user ={
//     name : "Satyam",
//     age : 23,
//     gender : 'Male'
// }

// console.log(user)
// console.log(typeof user)

//empty object

// const user = {}

// user.name = "Satyam"
// user.gender = 'M'

// console.log(user)

//using new keyword

// const student = new Object()



//Accessing properties

// const user ={
//     "first name" : "Satyam",
//     age : 23,
//     gender : 'Male'
// }

//dot notation

// console.log(user.age)

//bracket notation

// console.log(user["first name"])


//adding properties 



// user.role = "Developer"
// console.log(user)

//updating
// user.name = "Rahul"
// console.log(user)

//delete property
// delete user.role
// console.log(user)

//nested object

// const student = {
//     name : "Vandana lodhi",
//     address : {
//         city : "Noida",
//         state : "UP"
//     },
//     skills : ["JS","Reactjs","Nodejs"]
// }

// console.log(student.address.city)
// console.log(student.skills[1])


//object method

// const user = {
//     name : "satyam",

//     greet() {
//         console.log("Hi im object method")
//     }
// }

// user.greet()


// dynamic key

// const dkey = "firstname"

// const user = {
//     [dkey]:"Satyam"
// }
// const user1 = {
//     [dkey]:"Satyam1"
// }
// const user2 = {
//     [dkey]:"Satyam2"
// }

// console.log(user.firstname)

//in operator

// const user = {
//     name : "Rahul",
//     age : 28
// }
// console.log("name" in user)


// Object.keys(), Object.values(), Object.entries()

// const user = {
//     name : "Rahul",
//     age : 28,
//     gender : "male"
// }

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


//looping through object

// const user = {
//     name : "Rahul",
//     age : 28,
//     gender : "male"
// }

// for(const keyHaiYe in user){
//     console.log(keyHaiYe, user[keyHaiYe] )
// }

//optional chaining

// const user = {
//     name : "Rahul",
//     age : 28,
//     gender : "male"
// }

// console.log(user?.kuchh)

//Object reference

// const user1 = {
//     name : "satyam"
// }

// const user2 = user1
// user2.name = "Rahul"

// console.log(user1.name)

//shallow copy

// const student = {
//     name : "Vandana lodhi",
//     address : {
//         city : "Noida",
//         state : "UP"
//     }
// }

// const copy = Object.assign({},student)

// const copy = {...student}
// copy.address.city = "Patna"

// console.log(student)
// console.log(copy)


// deep copy 

// const student = {
//     name : "Vandana lodhi",
//     address : {
//         city : "Noida",
//         state : "UP"
//     }
// }

// const copy = structuredClone(student)

// const copy = JSON.parse(JSON.stringify(student))

// copy.address.city = "Patna"

// console.log(student)
// console.log(copy)


// Object.freeze(), Object.seal()

// const student = {
//     name : "Vandana lodhi",
//     age : 23
// }

// Object.freeze(student)
// student.name = "Rahul"

// console.log(student)

// Object.seal(student)
// student.name = "Rahul"
// console.log(student)