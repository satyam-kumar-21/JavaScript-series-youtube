// new Promise()

// creating a promise
// const promise1 = new Promise((resolve, reject) => {
//     let data = true;

//     if(data){
//         resolve("Data mil gya")
//     } else{
//         reject("data nhi mila")
//     }
// })

// .then() -> fullfilled promise
// .catch() -> rejected promise
// .finally() -> always runs (fullfill/reject)

// promise1
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Promise 1 run hua hau")
// })

// callback hell
// getUser(function(user){
//     getOrders(user, function(orders){
//         getPayment(orders,function(payment){
//             console.log(payment)
//         })
//     })
// })

// getUser()
// .then((user) => getOrder(user))
// .then((orders) => getPayment(orders))
// .then((payment) =>{
//     console.log(payment)
// })
// .catch((error)=>{
//     console.log(error)
// })


//fetch api

// const data = fetch("https://jsonplaceholder.typicode.com/users")

// data
// .then((response) => {
//     return response.json()
// })
// .then((result) =>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })


//post 

// fetch("url"),{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         name:"Satyam",
//         age:23
//     })
// }



// https://jsonplaceholder.typicode.com/users