const user =  {
    userName: "sanket",
    price: 999,
    welcomeMessage: function (){
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
console.log(this);

// if we  console.log(this); add this line to browser console than we get window object because its global object there 
// function test(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const test = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const test =  () => {
    let username = "hitesh"
    console.log(this);
}
test();


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "sanket"})

// console.log(addTwo(8,3));

const myArray = [2, 5, 3, 7, 8]

myArray.forEach()