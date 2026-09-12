// const user = {
//     name : "Satyam",
//     greet : function (){
//         console.log(this.name)
//     }
// }

// user.greet()

// const newFunc = user.greet
// newFunc()

// console.log(this)   



// this is arrow function

const user = {
    name : "Satyam",
    greet : () => {
        console.log(this.name)
    }
}

user.greet()

this.name = "Rahul"
user.greet()