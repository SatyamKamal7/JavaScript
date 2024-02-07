const promise1 = new Promise(function (resolve,reject){
    // Do am async task
    // DB calls, cryptography,nettwork related
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()// linking resolve with 'then'
    },1000)
});
promise1.then(function (){
    console.log("promise cnsumed")
})

new Promise(function(resolve,reject){ // making , using this way we complte the whole above thing in single part
    setTimeout(function(){
        console.log("Aassync code done 2")
        resolve()
    },1000)
}).then(function(){    // consuption
    console.log("async 2 resolved")
})

// promise 3
const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username:"chai",email: "chai@example"})
    },1000)
})
promise3.then(function(user){
    console.log(user)
})

// promise 4
const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"hitesh",pass:"123"})
        }else{ // in the else u can give errors it belongs to reject parameter
            reject('ERROR: something went wrong')
        }
    },1000)
})
promise4.then((user)=>{  // callback hell-> aap jitne chahe .then, .catch use kr skte h
   console.log((user));
   return user.username
}).then((username)=>{   // chaining-> this then takes the value which is returning by first then
   console.log(username);
}).catch(function(error){   // if u r doing chaining then u have to us ecatch funcion too
   console.log(error);
}).finally(function(){  // always executed like finally in exception handling
   console.log("the promise is created and consumed")
})

// promise5
const promise5 = new Promise(function(resolve,reject){
   setTimeout(function(){
    let error = true
    if(!error){
        resolve({username:"javascript",pass:"123"})
    } else{
        reject('ERROR : JS went wrong')
    }
   },1000)
})
// async awaits->one more way to consume promise unlike then it waits to work done if complete then done message if not then not message, yha catch handle ni krte
async function consumePromise5(){
    try{
    const response = await promise5   // they cant directly resolve the problem
    console.log((response));
    } catch(error){
        console.log((error));
    }
}
consumePromise5();

fetch('https://expert.chegg.com/qna/authoring/answer') // fetch takes an url
.then((response)=>{
    return response.json()  // converting api to json   
})
.then((data)=>{
    console.log((data));
})
.catch((error)=>{
    console.log(error)
})