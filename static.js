class User {
    // property private #
    #name
    #password
    static type="User in system"
    static database = [];
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
    static showType() {
        console.log("showType")
    }
    static addUser(newUser) {
        this.database.push(newUser)
    }
}


// create object
const user1= new User("Koi ui",1234);
const user2= new User("Huigo",14564);
const user3= new User("fluufy",456132);
// static create
User.showType()
console.log(User.type)
// Math
console.log(Math.PI)
console.log(Math.floor(Math.random()));
console.log(Math.max(10,20,30));
// create user in static database
User.addUser(user1);
User.addUser(user2);
User.addUser(user3);
// user view do with for each
User.database.forEach((user) => {
    user.showDetails();
})

// for(user of User.database) {
//     user.showDetails();
// }
