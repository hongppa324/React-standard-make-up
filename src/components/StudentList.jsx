import React from "react";

function StudentList({ filteredStudents }) {
  return (
    <ul>
      {filteredStudents.map((student, index) => (
        <li key={index}>
          {student.name} ({student.age}) - {student.grade}등급
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
