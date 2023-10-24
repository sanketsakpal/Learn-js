// for of



 let arr  =[ 1,2,3,4,5];

 for (const value of arr) {
console.log(value);
 }


 // maps 

 const map = new Map();
map.set('IN', 'india');
map.set('fr','france');
console.log(map);

 for (const [key,value] of map) {
    console.log(key);
 }

 let myObject = {
'game':"nfc",
"game1":"spiderMan"
 }
 // not working 

//  for (const [key,value] of myObject) {
//     console.log(key);
//  }
const map1 = new Map();
map.set('IN', 'india');
map.set('fr','france');
console.log(map1);
// no use over non iterable map
for (const key in map1) {
console.log(key);
    }

