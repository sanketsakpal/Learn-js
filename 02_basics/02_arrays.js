const marvel_heros = ["thor" , "ironMan" , "SpiderMan"];

const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

const all_array = marvel_heros.concat(dc_heros); // concat returns you a new array 

console.log(all_array);


const allHeros = [...marvel_heros , ...dc_heros];

console.log(allHeros);



const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 7,[4, 5 ]]];

const realHeros = another_array.flat(Infinity);

console.log(realHeros);


console.log(Array.isArray("sanket"))
console.log(Array.from("sanket",))
console.log(Array.from({name: "sanket"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));