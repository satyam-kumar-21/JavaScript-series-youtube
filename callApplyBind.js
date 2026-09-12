// const user = {
//     name: "Satyam",
//     greet : function() {
//         console.log(this.name)
//     }
// }

// const newFun = user.greet
// //So, it loses the object context

// newFun()  


//call() methods

// const user = {
//     name : "Satyam"
// }

// function greet(message,age){
//     console.log(`${this.name} ${message}`)
//     console.log("Aapka age: ",age)
// }

// greet.call(user, "Kese ho",25 )


//apply()


// const user = {
//     name : "Satyam"
// }

// function greet(message,age){
//     console.log(`${this.name} ${message}`)
//     console.log("Aapka age: ",age)
// }

// greet.apply(user, ["Kese ho",25] )



// bind() method 

// const user = {
//     name : "Satyam"
// }

// function greet(){
//     console.log(this.name)
// }

// const boundGreet = greet.bind(user)

// boundGreet()


// //pre filled aurguments or multiple arguments

// const user = {
//     name : "Satyam"
// }

// function greet(age,city){
//     console.log(this.name,age,city)
// }

// // const boundGreet = greet.bind(user, 25 ,"Noida")
// // boundGreet()

// const boundGreet = greet.bind(user, 25)
// boundGreet("Patna")



// why use bind()

const user = {
    name : "Rahul",
    greet : function (){
        console.log(this.name)
    }
}

const newFun = user.greet.bind(user)

setTimeout(newFun, 1000)