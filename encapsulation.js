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
}


// create object
const user1= new User("Koi ui",1234);
user1.showDetails(); 



