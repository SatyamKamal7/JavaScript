const user = { // object litral-> collection of properties and method
    username:"me",
    loginCount:6,
    gotUserDetails:function(){
        console.log('got user details')
        console.log(this);
    }
}

function mult5(num){
    return num*5
}
mult5.power = 3
console.log(mult5(5))
console.log(mult5.power);
console.log(mult5.prototype);