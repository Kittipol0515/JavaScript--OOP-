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
    setName(newName) {
        this.#name = newName;

    }
    //getter
    getName() {
        return this.#name
    }
    setPassword(newPassword) {
        this.#password = newPassword;
    }
    getPassword() {
        return this.#password;
    }
}


// create object
const user1 = new User("Koi ui", 1234);
user1.setName("hugodsad");
user1.setPassword(789456);
user1.showDetails();
user1.getName();
console.log(user1.getName());
user1.getPassword();
console.log(user1.getPassword());

