// singleton
Object.create;

// objects literals 
const mySym = Symbol("key1")
const jsUser = {
    "name": "sanket",
    age : 18,
    location: "mumbai",
    [mySym]: "test",
    isLoggedIn : false,
    lastLogin : ["monday"]
};

console.log(jsUser.name)
console.log(jsUser["name"]);
console.log(jsUser[mySym]);

jsUser.age = 20;
console.log(jsUser["age"]);
// Object.freeze(jsUser);
jsUser.age = 25;
console.log(jsUser);


jsUser.greetings = function (){
    console.log(`hello user ${this.name}`)
}

console.log(jsUser.greetings());