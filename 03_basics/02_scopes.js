if (true) {
    let a = 10;
    const b = 20;
    var c = 30;

}
// console.log(a);
// console.log(b);
// console.log(c);


function one (){

user = "sanket";

function two(){ 
    const website ="youtube";
    console.log(user);
}

// console.log(website);
two()

}
one();

// ++++++++++++++++++ interesting ++++++++++++++++++

// hoisting 

// Hoisting is when the JavaScript interpreter moves all variable and function declarations to the top of the current scope

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
