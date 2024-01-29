import React from "react";

function FilterButtons({ initialStudents, setFilteredStudents }) {
  const filterByAge = (minAge) => {
    const filteredByAge = initialStudents.filter(
      (student) => student.age >= minAge
    );
    setFilteredStudents(filteredByAge);
  };
  const filterByGrade = (grade) => {
    const filteredByGrade = initialStudents.filter(
      (student) => student.grade === grade
    );
    setFilteredStudents(filteredByGrade);
  };
  const resetFilter = () => {
    setFilteredStudents(initialStudents);
  };

  return (
    <div>
      <button onClick={() => filterByAge(18)}>18세 이상</button>
      <button onClick={() => filterByGrade("A")}>A등급</button>
      <button onClick={resetFilter}>필터 초기화</button>
    </div>
  );
}

export default FilterButtons;
