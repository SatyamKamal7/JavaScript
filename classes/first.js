class user{  // class
    user(name,email,pass){  //constructor
        this.name = name;
        this.email=email;
        this.pass = pass;
    }
    encryptedPass(){
        return `${this.pass}abc`
    }
}
const chai = new user("chai","chai@email","123")   // object creation
console.log(chai.encryptedPass())
// classes me inheritence bhi use krte h sometimes