function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log(username);
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const useCase = new createUser("test", "test@fb.com", "123")
console.log(useCase);