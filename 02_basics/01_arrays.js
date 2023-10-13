// array 

const myArr = [0,1,2,3,4,5];

const myHeros = ["ShaktiMan , NagRaj"];

const myArr2  = new Array(1,2,3);

console.log(myArr[1]);

// array methods 


// myArr.push(6);
// myArr.pop();


// myArr.unshift(8);
// myArr.shift();
// console.log(myArr);
// console.log(myArr.includes(9));

// const newArray = myArr.join();
// console.log(newArray);

// slice , splice 


console.log("a", myArr);

const myArr1 = myArr.slice(1,3);

console.log(myArr1);

console.log("B", myArr);

const myArr3 = myArr.splice(1,3); // splice manipulate original array 
console.log("c", myArr);
console.log(myArr3);
