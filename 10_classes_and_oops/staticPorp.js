class User {
    constructor(username , password){
this.username = username
    }

    logMe(){
        console.log(`UserName ${this.username}`);
    }
  static  createId(){
        return `123`;
    }
}

const test = new User('test');

// console.log(test.createId());


class Teacher extends User{
   
    constructor(username,email){
        super(username),
        this.email = email
    }


}

const tt = new Teacher('tt','tt@gmail.com');

tt.logMe();

console.log(tt.createId);