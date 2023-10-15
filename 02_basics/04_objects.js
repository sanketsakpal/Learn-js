const  User = new Object();

User.id ="abs234";
User.name = "sam"


console.log(User);

const obj1 = {1: "a",2: "b"}


const obj2 = {3: "a", 4: "b"}


// obj3 = Object.assign({},obj1,obj2); // object assign mdn 

const obj3 =  {...obj1,...obj2}
console.log(obj3)

// Object  de- structure 
const course = {
    courseName: "js",
    Price : "999",

}

const {
    courseName : CN,
    Price:p
} = course


console.log(CN);