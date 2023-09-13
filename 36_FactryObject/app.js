// constructor function
function student (name ,age ,course) {
    this.name = name;
    this.age = age;
	this.course=course;
}

// create an object
const Student = new student("rahul",12,"Adca");
//console .log(Student);
console .log(Student.name);
console.log(Student.age);
 console.log(Student.course);