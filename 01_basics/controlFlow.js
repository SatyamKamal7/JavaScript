// every code should run when we want to that run or what we want to run that's control Flow
// var data type ka scope always global hota h thats why we dont use that
// if, if-else,else if => same as other languages
// switch
const month = 3
switch(month){ // switch ek bar jha case match ho gya uske bad ka sara ka sara code execute hoga except default if you dont write the break statement
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    default: 
        //console.log("default case match");
        break;
}
// falsy values
// false , 0, -0, BigInt 0n,"",null,undefined,NaN

//truthy values
// "0",'false'," ",[],{},function(){}

// object condition checking 
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    //console.log("object is empty")
}

// Nullish coalescing Operator  (??): null undefined
// let val1;
// val1 = 5??10
// val1 = null??10
// val1 = undefined??15
// val1 = null??10??20
// console.log(val1);

// turnary operator
//condition ? true :false

// const iceTeaPrice = 100
// iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80")

// loops
for(let i=0;i<=10;i++){
    //console.log(i);
}
// break-> when break statement occures controll flow will gom outside the scope
// continue-> it will skip the execution of scope in which continue statement will present

// while, do-while loop
let index = 0
while(index<=10){
    //console.log(`Value of is ${index}`)
    index = index+2
}

let myArray=['makkari','batman','greenLantern']

let score=1
do{
   // console.log(`Score is ${score}`)
    score++
} while(score<=10);

// for of 
const arr = [1,2,3,4,5]
for(const num of arr){
    //console.log(num);
}

const greetings = "HelloWorld"
for(const greet of greetings){
    //console.log(`Each char is ${greet}`)
}

// maps -> always store unique values and autometacally returns the value
const map = new Map()
map.set('In','India')
map.set('USA','United States of America')
map.set('FR','France')
//console.log(map)
for(const [key,value] of map){
    //console.log(key,':-',value)
}

// for in
const myObj={   // objects pr for of loop ni chalega halanki map bhi ek tarah ka object hi h
    js:'javascript',
    cpp :'c++',
    rb : "ruby"
}
for(const key in myObj){
    //console.log(`${key} shortcut is for ${myObj[key]}`);
}

// for each-> ye loop automatic hr item ko apne parameter me le ke aayega aur iterate karega 
const coding=["js","ruby","c++","java","kotlin"]
coding.forEach( function (item){// for each ke pas item,key,index sare aate h, it always return undefined
    //console.log(item);
})// ye andr callBAck function h jiska nam ni hota , andar callback function me hm arrow function bhi use kr skte h

//const myNums = [1,2,3,4,5,6,7]
//const newNums = myNums.filter((num)=>{  // filter returns something unlike the the for each
    //return num>4
//})

const books = [{title:'book1',genre:'fiction',publish:1981,edition:2004},
               {title:'book2',genre:'non-fiction',publish:1992,edition:2008},
               {title:'book3',genre:'history',publish:1999,edition:2007},
               {title:'book4',genre:'non-fiction',publish:1989,edition:2010},
               {title:'book5',genre:'ecience',publish:2009,edition:2014},
               {title:'book6',genre:'fiction',publish:1987,edition:2010},
               {title:'book7',genre:'history',publish:1986,edition:1996}]

const newBooks = books.filter((bks)=>bks.genre==='history')
//console.log(newBooks)

// chaining-> u can use more than one function using dot operator, you can use similar function or different functions too
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers
                .map((num)=> num*10)
                .map((num)=>num+1)  // iss map me num ki value hogi jo phla map return karega
                .filter((num)=> num>=40)
//console.log(newNums);

// reduce method -> 
const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)
//console.log(myTotal);
const myTotal = myNums.reduce((acc,curr)=> acc+curr,0)
console.log(myTotal);