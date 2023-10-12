const name = "sanket";
const repoCount = 10;

// out dated method for concat String 

console.log(name + repoCount);


// modern method to concat String 

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sanket');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

const newString = gameName;

console.log(newString.substring(0,4));

const anotherName=  gameName;

console.log(anotherName.slice(-5, 4))

console.log(anotherName.charCodeAt(9)); // if length is not match then return NaN 

console.log(anotherName.big(0));