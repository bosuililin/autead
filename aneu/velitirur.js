class Student {
    constructor(name, major) {
        this.name = name;
        this.major = major;
        this.changeCount = 0;
    }

    changeMajor(newMajor) {
        this.major = newMajor;
        this.changeCount++;
        console.log(`${this.name} has changed their major to ${this.major}.`);
        console.log(`Total changes made: ${this.changeCount}`);
    }
}

// Create a new student
let student1 = new Student("Alice", "Computer Science");

// Change the major
student1.changeMajor("Mathematics"); // Alice has changed their major to Mathematics. Total changes made: 1

// Change the major again
student1.changeMajor("Physics"); // Alice has changed their major to Physics. Total changes made: 2
