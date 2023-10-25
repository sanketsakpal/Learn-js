const coding = ["js", "ruby", "java" , "python","cpp"];
// const values =  coding.forEach((val)=> {
// console.log(val);
// return val;
// });
// console.log(values);
// for each loop does not return value

const myNum = [1,2,3,4,5,6];

const newNumbers = myNum.filter((num)=> {
    if (num < 6) {
     return num;   
    }
});

const newNum = [];

myNum.forEach((val)=>{
    if (val < 6) {
        newNum.push(val);

    }
});

// console.log(newNumbers);

console.log(newNum);