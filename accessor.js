class User {
    // property private #
    #name
    #password

    //parameter constructor
    constructor(name, password) {
        this.#name = name
        this.#password = password
        // this.showDetails(); // in class
    }

    // method
    showDetails() {
        console.log(`User ${this.#name} has ${this.#password}`);
    }
    //setter
    set Name(newName) {
        this.#name = newName;

    }
    //getter
    get Name() { 
        return this.#name
    }
    set Password(newPassword) {
        this.#password = newPassword;
    }
    get Password() {
        return this.#password;
    }
}


// create object
const user1 = new User("Koi ui", 1234);
user1.Name = "koiyui";
console.log(user1.Name);
console.log(user1.Password);
