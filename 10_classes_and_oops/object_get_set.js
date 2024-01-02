const User = {
    _email: 'test@gmailS.com',
    _password: '123',

    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    }
}

const test = Object.create(User)
console.log(test.email);