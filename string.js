// const a = "Satyam"
// console.log(typeof a)
// const b = 'Thakur'
// console.log(typeof b)
// const c = `Shivam`
// console.log(typeof c)


//length

// const name = "Satyam kumar"
// console.log(name.length)

//index = 0 based

// const name = "Satyam"
// console.log(name[0])
// console.log(name[1])

//last character
// console.log(name[name.length - 1])

// string immutable

// const name = "Satyam"
// name[0] = "R"

// console.log(name)

//concatenation +

// const fname = "Satyam"
// const lname = "Thakur"

// const fullName = fname + " " + lname
// console.log(fullName)


//template literals

// const description = `My name is Satyam
// I'm from bihar
//                              Sitamarhi`

// console.log(description) 

// dynamic string

// const name = "Shivam"

// const message = `My name is ${name}`
// console.log(message)

//upparcase and lowercase

// const name = "Satyam"
// console.log(name.toUpperCase())

// const name2 = "SHIVAM"
// console.log(name2.toLowerCase())


//trim() methods

// const name = "            Satyam             "
// console.log(name)
// const newName = name.trim()
// console.log(newName)


// includes() method

// const text = "Javascript is awesome"
// console.log(text.includes("awesome"))


//startsWith and endsWith

// const text = "Javascript is awesome"
// console.log(text.startsWith("Javascript"))
// console.log(text.endsWith("awesome"))

// charAt(index)

// const name = "Satyam"
// console.log(name.charAt(3))


// slice()

// const text = "JavaScript"

// console.log(text.slice(0,4))
// console.log(text.slice(4,10))
// console.log(text.slice(-6))


// substring()

// const text = "JavaScript"

// console.log(text.substring(0,4))
// console.log(text.substring(4,10))
// console.log(text.substring(-6))

// replace and replaceAll

// const text = "Hello World. The World is beautifull"
// console.log(text.replace("World","Dipa"))
// console.log(text.replaceAll("World","Dipa"))

//split method

// const text = "Java Script"

// console.log(text.split(""))
// console.log(text.split(" "))

// const text2 = "Java-Script"
// console.log(text.split("-"))

// const skills = "Js,React, node, next"
// console.log(skills.split(","))


// concat(string1, string2.....)

// const first = "Hello"
// const last = "World"

// console.log(first.concat(" ",last))
// console.log(first.concat(" ",last, ". ", "My name is Satyam"))

//repeat 

// const name = "Himani "
// console.log(name.repeat(1000))



//Number

// parseInt()

// console.log(typeof "25")
// console.log(typeof parseInt("23"))
// console.log(parseInt("125abc"))

// parseFloat()

// console.log(parseFloat("25.5abc"))

// Number.isInteger()

// console.log(Number.isInteger(25))
// console.log(Number.isInteger(25.1))

// NaN - > not a number

// const kuchhBhi =  "Satyam"/2
// console.log(kuchhBhi)

// const kuchhToHai = "Dipa"/4
// console.log(NaN == NaN)   -> false
// console.log(kuchhBhi == kuchhToHai) -> false
// console.log(Number.isNaN(kuchhBhi) == Number.isNaN(kuchhToHai)) -> true

// console.log(typeof kuchhBhi) -> number

// console.log(Number.isNaN(kuchhBhi)) -> true


// tofixed()

// const price = 99.95678

// const toFixedValue = price.toFixed(2)
// console.log(toFixedValue)

// console.log(typeof toFixedValue)


// toString


// let num = 100

// let tostr = num.toString()
// console.log(typeof tostr)


//Number constants 

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)


//floating point isses

// console.log(0.1 + 0/.2)

// output-> 0.30000000000000004


//Math() object 

// Math.max() -> return maximum value 
// console.log(Math.max(10,12,13,43,100,19))

// Math.min() -> return minimum value 
// console.log(Math.min(10,12,13,43,100,19))


// Math.round() - nearest integer

// console.log(Math.round(4.9)) 

// Math.floor() -> rounds downward

// console.log(Math.floor(4.7))
// console.log(Math.floor(4.1))
// console.log(Math.floor(-4.7))


// Math.ceil() -> rounds upward

// console.log(Math.floor(4.7))
// console.log(Math.floor(4.1))
// console.log(Math.floor(-4.7))


// Math.trunc() -> remove the decimal portion without rounding

// console.log(Math.trunc(4.6))
// console.log(Math.trunc(4.1))

// Math.abs() -> return the absolute value

// console.log(Math.abs(-10))

// Math.pow() -> returns a numberraised to a power

// 2*2*2
// console.log(Math.pow(2,3))

// Math.sqrt() -> return square root

// console.log(Math.sqrt(25))

// Math.cbrt() -> return cube root

// console.log(Math.cbrt(27))

// Math.PI -> PI value
// console.log(Math.PI)

// Math.random()

// console.log(Math.random())

// question :- generate a random integer from 0 to 9

const random = Math.floor(Math.random() * 10)
console.log(random)

