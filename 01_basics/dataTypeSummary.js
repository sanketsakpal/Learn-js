// primitive 

// call by value 

// 7 types : String , number , boolean , null , undefined , symbol , BigInt 

// reference type / non primitive data type 


// array , objects , functions 


const heros = ["shakaMan", "spiderMan", "ironMan" ];

const myObj = {
    "name" : "sanket", 
    "age" :  24,
    24 : "age"
}

const myFunction = function(){
    console.log("hello world");
}

function  test () {
}

 ()=> {};

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(typeof id);
console.log(id === anotherId);


// ++++++++++++++++++++++++++++++++++++++++++

// stack(primitive) (copy)/ heap(non - primitive) (reference)



let myName ="sanket";
let yourName = myName;

yourName = "pp";

console.log(myName);
console.log(yourName);


let userOne = {
    "email":" test@gmail.com",
    "upi": "user@upi"

}

let userTwo = userOne;
userTwo.email = "user@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);