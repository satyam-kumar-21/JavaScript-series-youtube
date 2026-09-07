// const arr1 = [1,2,3]
// const arr2 = [4,5,6]

// const combined = [...arr1, ...arr2]
// console.log(combined)

// const arr1 = [1,2,3]
// const arr2 = [...arr1]
// arr2.push(100)
// console.log(arr1)
// console.log(arr2)


//object 

// const obj1 = {
//     a : 1,
//     b : 2
// }
// const obj2 = {
//     b : 11,
//     d : 21
// }
// const combined = {...obj1, ...obj2}
// console.log(combined)


// const copy = {...obj1}   //Shallow copy


//rest

// function sum(...nums){
//     return nums.reduce((acc, current) => acc + current, 0)
// }

// console.log(sum(1,2,3,4,100,200,100))

// function example2(first, second, ...remains){
//     console.log(first)
//     console.log(second)
//     console.log(remains)
// }

// example2("satyam",12,"ram",12,65,76,true,false, undefined)



// descructuring

// const user = {
//     name : "satyam",
//     age : 23,
//     role : "Teacher"
// }

// const {name,age,role} = user
// console.log(name)
// const {name:userName} = user
// console.log(userName)

// const {name, city="Guest city"} = user
// console.log(city)



// with rest 

// const user = {
//     name : "satyam",
//     age : 23,
//     role : "Teacher"
// }

// const {name, ...otherDetails} = user
// console.log(name)
// console.log(otherDetails)


//array destructuring

const numbers = [10,20,30]

// const [a,b,c] = numbers

//with rest
const [a, ...b] = numbers
console.log(b)