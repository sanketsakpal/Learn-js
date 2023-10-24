const coding=  ['js','rb','py','java','cpp'];

coding.forEach((item)=>{
if (item.includes('s')) {
console.log(item);
}
});

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];


myCoding.forEach((item)=> {
    console.log(item.languageName);
});