class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log("Hi, My name is " + this.name);
    }
}
// const peter = new Person ("Peter", 102)
// peter.sayHi();

class Teacher extends Person {
    constructor(name, age, subject, rootNumber, teacherGrade) {
        super(name, age)
        this.subject = subject;
        this.rootNumber = rootNumber;
        this.teacherGrade = teacherGrade
        // push assignments to empty array
        this.assignmentsToGrade = []
    }
    teach() {
        console.log("I'm teaching!")
    }
    addStudent(student, classroom) {
        classroom.addStudentToClass(student, this.name)
    }
    addassignments(assignment, studentName) {
        this.assignmentsToGrade.push({
            assignmentName: assignment, studentName
        })
    }
}

class Student extends Person {
    constructor(name, age, grade, favoriteSubject) {
        super(name, age)
        this.grade = grade;
        this.favoriteSubject = favoriteSubject;
    }
    learn() {
        console.log("Look, I'm Learning")
    }
    handInAssignment(teacher, assignment) {
        teacher.addassignments(assignment, this.name)
    }

}

class Classroom {
    constructor(rootNumber, floor) {
        this.rootNumber = rootNumber;
        this.floor = floor;
        this.studentCount = 0;
        this.studentList = []
    }
    showStudentCount() {
        console.log("There are " + this.studentCount + " students in here ")
    }

    addStudentToClass(student, teacher) {
        student.teacher = teacher;
        this.studentList.push(student)
        this.studentCount++;
    }

}
// person class
class Doctor extends Person {
    constructor(name, age, roomNumber, specialty,) {
        super(name, age)
        this.roomNumber = roomNumber
        this.specialty = specialty;
    }
    greet() {
        console.log("Hello, I'm Dr. " + this.name + ". I'm the " + this.specialty + " for the school " + ". Welcome to room " + this.roomNumber + ", before I can help you, I'm going to need the room number your from. " )
    }

    addPatient(patient, doctor) {
        doctor.addPatientToOffice(patient, this.name)

    }
}
// person class
class Patient extends Person {
    constructor(name, age, roomNumber, symptoms,) {
        super(name, age)
        this.roomNumber = roomNumber;
        this.symptoms = symptoms;
        // this.diagnosis = diagnosis;
    }
    help() {
        console.log("Hi...  " + "My name is " + this.name + ". I'm " + this.age + " years old. " + " I'm from room " + this.roomNumber +", I have " + this.symptoms)
    }

}


// new class
class Office {
    constructor(roomNumber, entranceMethod) {
        this.roomNumber = roomNumber;
        this.entranceMethod = entranceMethod;
        // not 100% sure what this really does 
        this.patientsSick = 0
        this.patientList = []
    }
    showPatientsSick() {
        console.log("There are " + this.patientsSick + " patient for now")
    }

    addPatientToOffice(patient, doctor) {
        patient.doctor = doctor
        this.patientList.push(patient)
        this.patientsSick++

    }

}


// Instances
const drPepper = new Doctor("Pepper", 45, 432, "Pediatrician")
const drAtchoo = new Doctor("Atchoo", 50, 396, "Therapist")

const nStark = new Patient("Ned Stark", 10, 220, "Headache")
const rBaratheon = new Patient("Robert Baratheon", 9, 310, "stress")

const Office432 = new Office(432, "kicked Open")
const Office396 = new Office(396, "opens before knocking")

drPepper.addPatient(nStark, Office432)
drAtchoo.addPatient(rBaratheon, Office396)


console.log(Office432.patientList)
console.log(Office396.patientList)
Office432.showPatientsSick();


drPepper.greet();
nStark.help();

drAtchoo.greet();
rBaratheon.help();



// how to add name of doctor to patients dialogue


// const mrJones = new Teacher("Jones", 47, "Math", 313, 4)

// const msDragon = new Teacher( "Dragon", 41, "History", 987, 3)

// const mariMedusa = new Student( "Mari Medusa", 7, 3, "gym")

// const nedNarc = new Student( "Ned Narc", 6, 3, "Home Economics")

// const rickJames = new Student("Rick James", 9, 4, "music")

// const dollyParton = new Student("Dolly Parton", 8, 4, "lunch")

// const jimHopper = new Student("Jim Hopper", 9, 4, "forensics")



// const room105 = new Classroom(105, 1)
// const room109 = new Classroom(109, 2)

// mrJones.addStudent(rickJames, room105);
// mrJones.addStudent(jimHopper, room105)

// msDragon.addStudent(mariMedusa, room109);
// msDragon.addStudent(nedNarc, room109);

// room105.showStudentCount();
// // console.log(room105.studentList)

// room109.showStudentCount();
// console.log(room109.studentList)

// mrJones.addassignments("math practice 1-5", dollyParton);

// console.log(mrJones.assignmentsToGrade)

// mariMedusa.handInAssignment(msDragon, "Dodgeball Skills")
// console.log(msDragon.assignmentsToGrade)

// nedNarc.handInAssignment(msDragon, "Suagr Cookies")
// console.log(msDragon.assignmentsToGrade)

// extend 2 more people classes from the person class as well as an environment for this class objects to interact in
// ex. nurse/chef/patient/chef/waiter/restaurant or whatever we can come up with
// 02 user-forum, for reading 