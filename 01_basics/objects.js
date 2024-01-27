//const mySum = Symbol("key1")
// this is object literals
// const JsUser = {
//     name: "satyam",
//     "full name":"satyam kamal",
//     age: 22,
//     location:"kanpur",
//     email:"satyam4019@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:["Monday","Saturday"],
//     [mySum]:"myKey1"
// }
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySum])

// JsUser.email = "stym4019@gmail.com"
// Object.freeze(JsUser); freeze will not let any changes to the object when its apply

// JsUser.greeting = function(){
//     console.log("Hello Js user")
// }
// console.log(JsUser.greeting) // if u r calling function without braces then only function's reference will come as ouotput function will not be executre completely
// console.log(JsUser.greeting())
// JsUser.greeting2 = function(){
//     console.log(`Hello Js user, ${this.name}`)
// }
// console.log(JsUser.greeting2())

// singleton objects
const tinderUser = new Object()  // internal sb kuch same rhta h only difference between them is ye singleton object bnta h is tareeke se

tinderUser.id = "123abc"
tinderUser.name="satyam"
tinderUser.isLoggedIn=false
// console.log(tinderUser)

const regularUser = {
    email:"stym4019@gmail.com",
    fullName:{
        userFullName:{                   // object inside the objects its completely possible and accesible
            firstname:"satyam",
            lastname:"kamal"
        }
    }
}
//console.log(regularUser.fullName.userFullName.lastname)
// let say if we dont have value of fullName then at the time of accesing them you can put a ? like (fullName?.) means from this js will check if fullName value will be present then it will print if not then not print

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1,obj2}  // here o/p will be like 2 element of the obj3
//const obj3 = Object.assign(obj1,obj2) // it will combine both objects and return single object with all values
//const obj3 = Object.assign({},obj1,obj2)  // same work as the above line but this is guaranteed
const obj3 = {...obj1,...obj2}   // mostly we will this spread operator for spreading the object like array
// console.log(obj3)

// console.log(Object.keys(tinderUser)) // data type will be array
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // you can check for particular property

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// aap isse dot operator ke dwara access kr skte h but here we will see another method
const {courseInstructor} = course   // it is called de-structuring
//console.log(courseInstructor)

// API  -> values comes from backend and api is that how you will write it value comes in json structer
{   //json sometimes api comes in form of array but there are too objects inside of array we handle them like array 
    "name":"satyam",
    "coursename":"js in hindi",
    "price":"free"
}
[
    {},
    {},
    {}
]