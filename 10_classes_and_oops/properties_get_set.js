function User(email, password){
    this._email = email;
    this._password = password

Object.defineProperty(this ,'email',{
    get: function () {
        return this._email.toUpperCase();
    },
    set: function (value) {
        this._email= value
    }
})

}

const test =new User('Test@gmail.com',123);
console.log(test.email);
