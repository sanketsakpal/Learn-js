


class User {
    constructor(username, email, password) {
        this.email = email,
            this.username = username,
            this.password = password
    }





    encryptPassword() {
        return `${this.password}abc`
    }
    changeUsername = function(){
        return `${this.username.toUpperCase()}`
    }


}

const test = new User("test", ' test@gmail.com', "123");


console.log(test.encryptPassword());


// behind the scene

function User1(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());