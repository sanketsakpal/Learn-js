const accountId = 1233
let accountEmail = "test@gmail.com"
var pass = "12345"
accountCity = "mumbai"
let accountState;
// accountId = 2 // not allowed // type Error : Assignment to constant variable.
accountEmail = "rest@gmail.com"
pass = "test"
accountCity ="jaipur"
/*
prefer not to use var  
because of issue in block scope and functional scope  
*/


console.table([accountId,accountEmail,pass,accountCity,accountState]);
