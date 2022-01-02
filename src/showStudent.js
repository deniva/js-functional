const { db, elementId } = require("./db");

function showStudent(ssn) {
  var student = db.find(ssn);
  if (student !== null) {
    console.log(
      `#${elementId}`,
      `${student.ssn}, ${student.firstname}, ${student.lastname}`
    );
  } else {
    throw new Error("Student not found!");
  }
}

module.exports = showStudent;
