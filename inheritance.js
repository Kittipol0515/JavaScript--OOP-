class User {
    // property private # _protect
    _name
    #password
    //parameter constructor
    constructor(name, password) {
        this._name = name
        this.#password = password
        // this.showDetails(); // in class
    }

    // method
    showDetails() {
        console.log(`User ${this._name} has ${this.#password}`);
    }
    //setter
    set Name(newName) {
        this._name = newName;

    }
    //getter
    get Name() { 
        return this._name
    }
    set Password(newPassword) {
        this.#password = newPassword;
    }
    get Password() {
        return this.#password;
    }

}


class Teacher extends User{
    #course
    constructor(name, password,course){
        super(name, password);// main constructor
        this.#course = course;
         
    }
    showDetails(){
        console.log(`Im a Teacher : ${this._name} teach course: ${this.#course} `);
    }

}

class Student extends User{
    #score
    constructor(name, password,score){
        super(name, password);
        this.#score = score;
        console.log(this.#score);    
    }
    showDetails(){
        console.log(`Im a Student : ${this._name} get score: ${this.#score} `);
    }
}

const user1=new Teacher("lion",456,"program");
// user1.Name="Teacher";
// user1.Password=4561
user1.showDetails();
const user2=new Student("catty",45555,100);
// user2.Name="Student";
// user2.Password=789564654
user2.showDetails();

