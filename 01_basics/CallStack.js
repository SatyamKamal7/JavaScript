// execution context
//javaScript me hm jb bhi curly braces ka use krke kuch bnate h toh vo (1)Global Execution context bnta h aur use ek variable assign kr diya jata h jaise ki (this)
// (2)function execution context
// (3) Eval executoin context - not necessery
// callStack = LIFO system supports
function one(){
    console.log("one")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
    one()
}
one()
two()
three()