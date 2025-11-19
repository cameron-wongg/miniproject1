/**
 * Define the Course and Assignment concepts using the constructor functions
 */


// create the objects using the constructor functions
//create assignment constructor function
function Assignment (title, dueDate){
    this.title = title;
    this.dueDate = dueDate;
}
//create print assignment function 
Assignment.prototype.printAssignment = function(){
    console.log('   Title: ' + this.title + ' | Due Date: ' + this.dueDate); //use same format as plainObjects.js
}
//create course constructor function
function Course (courseName, instructor, creditHours, assignments){ //use same variable names as plainObjects.js
    this.courseName = courseName;
    this.instructor = instructor;
    this.creditHours = creditHours;
    this.assignments = assignments || [];
}
//create courseInfo function 
Course.prototype.courseInfo = function(){
    console.log('Course: ' + this.courseName +  //use same format as plainObjects.js
                ' | Instructor: ' + this.instructor + 
                ' | Credit Hours: ' + this.creditHours);
    console.log('Assignments >>>');
    for (let a of this.assignments)
        a.printAssignment(); //use same format as plainObjects.js
}

//use assignment constructors using variables a1-a4 like plainObjects.js for use in course constructor; values remain the same as in plainObjects.js
let a1 = new Assignment ("Project Proposal", "Jan 15");
let a2 = new Assignment ("Midterm Report", "Feb 20");
let a3 = new Assignment('Final Report', 'Mar 30');
let a4 = new Assignment('Presentation', 'Apr 10');

//use course constructors, integrating a1-4 into arrays as arguments in course objects; values remain the same as in plainObjects.js
let c1 = new Course ("Software Engineering", "Dr. Pepper", 3, [a1, a2]);
let c2 = new Course ("Data Science", "Dr. Evil", 6, [a3, a4]);

//method call
c1.courseInfo();
c2.courseInfo();

