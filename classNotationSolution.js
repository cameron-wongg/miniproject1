/**
 * Define the Course and Assignment concepts using the class notations
 */

// create the objects using the classes
class Course{ //course class created using class keyword
    constructor(courseName, instructor, creditHours, assignments){ //constructor method to give attributes to object created from class
        this.courseName = courseName;
        this.instructor = instructor;
        this.creditHours = creditHours;
        this.assignments = assignments || [];
    }
    courseInfo(){
        console.log('Course: ' + this.courseName +  //use same format as plainObjects.js
            ' | Instructor: ' + this.instructor + 
            ' | Credit Hours: ' + this.creditHours);
        console.log('Assignments >>>');
    for (let a of this.assignments)
        a.printAssignment(); //use same format as plainObjects.js
    }
}

class Assignment{ //assignment class created using class keyword
    constructor(title, dueDate){ //constructor method to give attributes to object created from class
        this.title = title;
        this.dueDate = dueDate;
    }
    printAssignment(){ //create print assignment function 
        console.log('   Title: ' + this.title + ' | Due Date: ' + this.dueDate); //use same format as plainObjects.js
    }
}

//use class to create 2 objects, integrating a1-4 into arrays as arguments in course objects; values remain the same as in plainObjects.js
//use class to create 4 objects, using variables a1-a4 like plainObjects.js for use in course constructor; values remain the same as in plainObjects.js
let a1 = new Assignment ("Project Proposal", "Jan 15");
let a2 = new Assignment ("Midterm Report", "Feb 20");
let a3 = new Assignment('Final Report', 'Mar 30');
let a4 = new Assignment('Presentation', 'Apr 10');
let c1 = new Course ("Software Engineering", "Dr. Pepper", 3, [a1, a2]);;
let c2 = new Course ("Data Science", "Dr. Evil", 6, [a3, a4]);

//method call
c1.courseInfo();
c2.courseInfo();
