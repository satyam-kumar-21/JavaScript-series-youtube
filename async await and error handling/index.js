// async / await
// it is a cleaner way to work with promise
// it makes aynchronous code look like similar to normal synchronous code

// async => its always return a promise

// async function greet(){
//     return "Hello satyam"
// }
// greet().then((data) => console.log(data))


// await => used to wait for a promise to settle

// async function getData(){
//     const data = await Promise.resolve("Data received")

//     console.log(data)
// }

// getData()

//promise

// const promise = fetch("......")
// promise
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((error) =>{
//     console.log(error)
// })

// async function getUsers(){
//     const response = await fetch(".....")
//     const data = await response.json()
//     console.log(data)
// }


// Error handling

// try and catch

async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    } finally  {
        console.log("GetUsers chal gaya")
    }
}

getUsers()

// custome error => throw new Error
// function checkAge(age){
//     if(age < 18){
//         throw new Error("Age is less:")
//     }
//     return "allowed"
// }
// console.log(checkAge(17))