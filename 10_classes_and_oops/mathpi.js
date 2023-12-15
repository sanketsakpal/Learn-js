const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI =5 ;
// console.log(Math.PI);

const test = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// console.log(Object.getOwnPropertyDescriptor(test, "name"));


Object.defineProperty(test,'name',{
    value: 'ginger chai',
    writable: false,
    enumerable: false,
    // configurable: false
})

// console.log(Object.getOwnPropertyDescriptor(test, "name"));
// test.name = "test"
 for (let [key, value] of Object.entries(test)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
        
    
   
}
