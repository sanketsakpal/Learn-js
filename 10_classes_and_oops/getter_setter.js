class User {
    constructor(email,password ){
        this.email = email,
        this.password = password
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password (value){
this._password  = value; 
    }
}

const sanket = new User("sanket@gmail.com", "abc");

console.log(sanket.password);