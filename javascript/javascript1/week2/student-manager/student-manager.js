const class07Students = [];

function addStudentToClass(studentName) {
  if (class07Students.length >= 6 && studentName !=="Queen") {
    console.log("Cannot add more students to class 07");
    return;
  }

  if (studentName === "") {
    console.log("Student name cannot be empty");
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log(`${studentName} is already in the class`);
    return;
  }

  if (studentName.toLowerCase() === "queen") {
    class07Students.push(studentName);
    console.log("Her magesty Queen has been added to the class 07");
    return;
  }

  class07Students.push(studentName);
  console.log(`${studentName} has been added to the class`);
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Sofia");
addStudentToClass("Henrry");
addStudentToClass("");
addStudentToClass("John");
addStudentToClass("Andreas");
addStudentToClass("Mary");
addStudentToClass("Sofia");
addStudentToClass("Niels");
addStudentToClass("Queen");

console.log(getNumberOfStudents());