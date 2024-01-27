const myArr = [0,1,2,3,4,5]

// console.log(myArr[2])
// one more way to create array
// const newArr = new Array(1,2,3,4)
// console.log(newArr[3]) 
myArr.push(6)
console.log(myArr);
myArr.pop()   // pop will remove last element of the array
myArr.unshift(9) // it will insert 9 at the 0th index
myArr.shift() // it will remove 0th index element
myArr.includes(9) // it will give boolean output that 9 is present in the array or not
myArr.indexOf(5) // element's index it will give
// const newArr = myArr.join() // join will bind your array and converts it to String
// console.log(myArr)
// console.log(typeOf (newArr))

// slice , splice
console.log("A",myArr)
const myn1 = myArr.slice(1,3)  // this excludes last element and dont effect the array
console.log(myn1);
console.log("B",myArr)

const myn2 = myArr.splice(1,3) // this includes last element and also remove this range of elements from the array
console.log(myn2);
const arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_arr = arr.flat(Infinity)
console.log(real_arr)

const me = "satyam"
const newMe = [...me]
console.log(newMe)