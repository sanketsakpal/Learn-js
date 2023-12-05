const user = {
    username: "Test",
    loginCount: 800,
    signedIn: false,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}
// new keyword is use to create new context and is also called Constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("test", 12, true)
const userTwo = new User("sanket", 11, false)
console.log(userOne.constructor);
console.log(userTwo);