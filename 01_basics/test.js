// primitive data types
// const accountyId = 144539
// let accountEmail = "satyam4019@gmail.com"
// var accountPassword = "12345"
// accountState = "Uttar Pradesh"
// let accountyCity;
// console.table([accountyId,accountEmail,accountPassword,accountState,accountyCity])
// console.log(accountPassword)
// let str1= "hello"
// let str2 = " satyam"
// let str3 = str1+str2
// console.log(str3)

// const id = Symbol('123')

// const anotherId=('123')
// console.log(id===anotherId)
// BigInt
const bigNumber = 6161366665516n

// non primitive datatypes
// arrays
const heros = ["shaktiman","naagraj","doga"]
//objects
let myObj = {     // we can create these objects only using curly brases we dont need to make any variable
    name:"satyam", 
    age:22,
}
// function
// const myFunction = function(){
//     console.log("Hello World");
// }
// console.log(myFunction)
// console.log(`Hello my name is ${"Satyam"} and my age is ${22}`)
let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());
