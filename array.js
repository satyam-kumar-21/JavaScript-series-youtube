// let array1 = [1,2,3,4,"Satyam",true,null]
// console.log(array1)

// array constructor

// const array1 = new Array(6,3,4,5)
// console.log(array1)

// empty array + push

// let array1 = []
// array1.push(5)
// array1.push(7)
// console.log(array1)


//indexing -  start from 0

// const fruits = ["Apple","Banana","Mango"]
// console.log(fruits[0])
// console.log(fruits[2])


//updating array elements
// fruits[2] = "Orange"
// console.log(fruits[2])

// array length

// const array1 = [1,2,4,2,6,7,7,8,100]
// let length = array1.length
// console.log(length)
// console.log(array1[length-1])

// typeof array

// const array1 = [2,3,45,5,5]
// console.log(typeof array1)

// console.log(Array.isArray(array1))


//push pop

// const names = ["Satyam","Dipa","Rahul","Sanju"]
// names.push("Himani")
// names.push("akshay")

// console.log(names)

// names.pop()
// console.log(names)
// names.pop()
// console.log(names)
// names.pop()
// console.log(names)


//unshift and shift

// const names = ["Satyam","Dipa","Rahul","Sanju"]
// console.log(names)
// names.unshift("Himani")
// console.log(names)

// names.shift()
// console.log(names)


// loop in array

// let fruits = ["apple","mango","banana","orange"]

// let length = fruits.length

// for(let i = 0; i < length; i++){
//     console.log(fruits[i])
// }


// slice() method

// const array1 = [1,4,5,6,7,8]
// let sliced = array1.slice(1,3)
// console.log(sliced)
// console.log(array1)

// splice() methods

// const array1 = ['A','B','C']
// add element
// array1.splice(1,0,'D')
// console.log(array1)

// remove/replace

// array1.splice(1,1,'Z')
// console.log(array1)


// const array1 = [1,4,5,6,7,8]
// let sliced = array1.splice(1,3)
// console.log(sliced)
// console.log(array1)

// concat() method

// const arr1 = [1,4,2,5,6]
// const arr2 = [10,43,23,56]

// let result = arr1.concat(arr2)
// console.log(result)
// console.log(arr1)
// console.log(arr2)


// combines two or more arrays in one using spread operator

// const arr1 = [1,4,2,5,6]
// const arr2 = [10,43,23,56]
// const arr3 = [100,300]

// let result = [...arr1,...arr2,...arr3]
// console.log(result)
// console.log(arr1)
// console.log(arr2)

// includes() methods

// const fruits = ["Apple","Orange","Banana"]

// console.log(fruits.includes("Mango"))
// console.log(fruits.includes("Banana"))


// indexOf()

// const arr1 = [1,4,5,7,5,7,7,"satyam"]

// console.log(arr1.indexOf(7))


// lastIndexOf()

// const arr1 = [1,4,5,7,5,7,7,"satyam"]

// console.log(arr1.lastIndexOf(7))


// reverse()

// const fruits = ["Apple","Banana","Guava"]
// fruits.reverse()

// console.log(fruits)

// const num = [1,2,3,4,5,6,7,8,9,10]
// num.reverse()
// console.log(num)


// // foreach

// let numbers = [10,34,76,47]

// numbers.forEach((ele,idx) => {
//     console.log(ele,idx)
// })

// map()

// let numbers = [1,2,3,4,5]

// let doubleNumbers = numbers.map((element) => {
//     return element*2
// })

// console.log(doubleNumbers)


// reduce()

// let numbers = [1,2,3,4,5,6,7,8,9]

// let sum = numbers.reduce(function (acc,ele){
//     return acc + ele
// },0)
// console.log(sum)

// filter()

// let numbers = [1,2,54,23,43,13,67,58,98]

// let evenNumbers = numbers.filter((element)=>{
//     return element%2 === 0
// })

// console.log(evenNumbers)

// find()

// let numbers = [1,2,5,65,34,23,65,13]

// let result = numbers.find((ele) => {
//     return ele > 34
// })

// let result1 = numbers.findIndex((ele) => ele > 34)

// console.log(result1)


// some and every()

// let numbers = [11,20,12,23,43,19]
// console.log(numbers.every((element) => element > 10))


// sort()

// let numbers = [11,20,12,23,43,19]
// numbers.sort()
// numbers.sort((a,b)=> b-a)
// console.log(numbers)

// flat()

let numbers = [1,2,[4,6,[2,6,[12,43,54]]],23,[5,4,3]]

let result = numbers.flat(3)

console.log(result)