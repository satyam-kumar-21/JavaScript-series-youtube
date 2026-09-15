//closures

// function outer(){
//     let count = 0;

//     return function inner(){
//         count++;
//         console.log(count)
//     }

// }

// const counter = outer()
// counter()
// counter()


// function createBankAccount(){
//     let balance = 10000;

//     return {
//         getBalance : function (){
//             return balance
//         },

//         deposit : function (amount){
//             balance += amount
//         }
//     }
// }

// const account = createBankAccount();
// console.log(account.getBalance())

// account.deposit(500)
// console.log(account.getBalance())

// function currying

// normal function

// function add(a,b){
//     return a+b
// }


// currying function

// function add(a){
//     return function (b){
//         return a+b
//     }
// }

// console.log(add(5)(5))


function multiply (a){
    return function (b){
        return a * b
    }
}

const double = multiply(2)
console.log(double(5))

const triple = multiply(3)
console.log(triple(5))