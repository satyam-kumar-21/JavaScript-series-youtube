// event bubbling -> child to parent

// const parent = document.querySelector("#parent")
// const child = document.querySelector("#child")

// parent.addEventListener("click", () => {
//     console.log("Parent wala")
// })

// child.addEventListener("click", () => {
//     console.log("Child wala")
// })


// stopPropogation() - stops a event from bubbling up to parent

// const parent = document.querySelector("#parent")
// const child = document.querySelector("#child")

// parent.addEventListener("click", () => {
//     console.log("Parent wala")
// })

// child.addEventListener("click", (event) => {
//     event.stopPropagation()
//     console.log("Child wala")
// })



// event capturing -> parent to child
// third arguments pass as true

// const parent = document.querySelector("#parent")
// const child = document.querySelector("#child")

// parent.addEventListener("click", () => {
//     console.log("Parent wala")
// }, true)


// child.addEventListener("click", () => {
//     console.log("Child wala")
// },true)




// event delegation 

const parent = document.querySelector("#parentUl")

parent.addEventListener("click",(event) => {
    console.log(event.target.textContent)
})