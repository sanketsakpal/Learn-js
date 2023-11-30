const promiseOne = new Promise((resolve, reject)=> {
    // do an async task
    // db calls ,cryptography , network call 
    setTimeout(() => {
        console.log("task is complete")
        resolve();
    }, 1000);

});
// direct connection with resolve 
promiseOne.then(function () {
    console.log('promise consume')
});


new Promise(function (resolve , reject ) {
    setTimeout(() => {
        console.log("task2 is complete")
        resolve();
    }, 1000);
}).then(function () {
    console.log('promise2 consume')
})

promiseThree  = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({
            "userName":  "sanket",
            "email":"example@gmail.com",
        })
    }, 1000);
});

promiseThree.then((user)=>{
console.log(user);
});


promiseFour = new Promise(function (resolve ,reject ) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                "userName":  "sanket",
                "email":"example@gmail.com",
            });
        }else {
            reject('Error: something went wrong ');
        }
    }, 1000);
})

promiseFour.then((user)=>{
console.log(user)
return user.userName;
}).then((userName)=> {
console.log(userName);
}).catch(function (err) {
    console.log(err);
}).finally(()=> console.log("final code run"));


const promiseFive = new Promise(function (resolve , reject ) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                "userName":  "js",
                "email":"js@gmail.com",
            });
        }else {
            reject('Error: js went wrong ');
        }
    }, 1000);
})

async function consumeFive(){
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error); 
  }
} ;
    
consumeFive();


async function getAllUser() {
    

 try {
    const response = await  fetch("https://jsonplaceholder.typicode.com/users");
    const  data = await response.json()
    console.log(data);
 } catch (error) {
    console.log(error);
 }
}

// getAllUser();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.