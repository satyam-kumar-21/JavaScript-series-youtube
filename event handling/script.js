// const btn = document.getElementById("btn")

// function printClicked(){
//     console.log("Button clicked")
// }

// btn.addEventListener("click", printClicked)


// btn.addEventListener("click", function(){
//     console.log("Hello")
// })

// btn.addEventListener("click", () => {
//     console.log("Arrow function")
// })


// Event object :- The browser automatically provides an event object


// btn.addEventListener("click", (event) => {
//     console.log(event)
//     console.log(event.target)
//     console.log(event.type)
// })

// event.target.value :- useful when working with inputs

// const input = document.querySelector("#username")

// input.addEventListener("input", (event)=>{
//     console.log(event.target.value)
// })


// event.preventDefault() :-

// const form = document.querySelector("#form")

// form.addEventListener("submit", (event) =>{
//     event.preventDefault()
//     console.log("Form submitted")
// })


// keydown event

// document.addEventListener("keydown", (event) => {
//     console.log(event.key)
// })


// mouseover :- over
// mouseout :- out


// const box = document.querySelector("#box")

// box.addEventListener("mouseover",() => {
//     console.log("Mouse entered")
// })

// box.addEventListener("mouseout",() => {
//     console.log("Mouse left")
// })

// this in event handler

// btn.addEventListener("click", function(){
//     console.log(this)
// })

// btn.addEventListener("click", () => {
//     console.log(this)
// })