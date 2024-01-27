function loginUserMessage(username){  // you can give default value right here like username="satyam" then if block never be executed and if you passed any value during calling the function then it will autometacally be overrided
    if(username===undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("milkha singh"))

//function calculateCartPrice(...num1){   // this is the rest operator actually it is spread operator but in this sitution it is rest operator using this you can pass multiple parameters during function calling and it will return an array of all the prices
 //   return num1
//}
//console.log(calculateCartPrice(200,400,500,2000))
function calculateCartPrice(val1,val2,...num1){ // so 1st 2 values will go in val1 and val2 and other all will go in num1 in form of array
    return num1
}
//console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "satyam",
    price:199
}
function handleObject(anyObject){  // passing object in function
    //console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)
const arr = [200,300,400,600]

function returnSecondValue(getArray){ //is syntax se function ke upr bhi hm iss functon ko call kr skte h variable vale tareeke se ni kr skte this is called hoisting
    return getArray[1]
}
//console.log(returnSecondValue(arr))
// this -> it referes to the current context

function chai(){
    let username = "satyam"
    console.log(this.username);
}

// Arrow Function
// const add2n = (num1,num2) =>{    // basic arrow function
//     return num1+num2
// }
// console.log(add2n(6,3))

//const add2n = (num1,num2) => num1+num2    // implicit return arrow function   / if u use curly braces in the function then you have to write return keyword 
const add2n = (num1,num2) => (num1+num2)   // we can write implicit function like this too

// Immediately Invoked Function Expression (IIFE)-> global scope ke pollution ko hatane ke liye use hota h
// Syntax -> ()() -> first brecket function's definition, second bracket is for execution of the function
// named IIFE
(function tea(){     // IIFE ke andar bhi hm arrow functon bana skte h
    console.log(`lormad`);
})();   // iss function ko end krne ke liye idhar semicolon lgana padega re baba, execution bracket ke andar hm parameter bhi de skate h jaise function calling ke time pr dete h
// unnamed IIFE
((name) =>{
    console.log(`DB connected two ${name}`);
})('satyam')