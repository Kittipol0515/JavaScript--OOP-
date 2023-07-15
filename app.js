// create class for study

// create class
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
// const user2= new User("Huigo",14564);
// user2.name="poplty"
// user2.password=456115
// const user3= new User("jully",7894);


// console.log(user1);
// console.log(user2);
// console.log(user3.name);
// console.log(user3.password);