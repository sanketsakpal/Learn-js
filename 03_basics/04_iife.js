(function test(){
    // named IIfe 
    console.log('db connected ')
})();
// to resolve global scope pollution and to avoid that pollution we used IIfe  ;

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('sanket')