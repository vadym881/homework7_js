const students = [
  { name: "Alice", age: 20, grade: 4.5 },
  { name: "Bob", age: 21, grade: 3.9 },
  { name: "Charlie", age: 19, grade: 4.8 },
];

console.log(calculateAverageGrade(students)); // 4.4

const output3 = document.getElementById("output3");
output3.textContent = (
  calculateAverageGrade(students) * students.length
).toFixed(1);

function calculateAverageGrade(array) {
  const grades = [];
  for (const student of array) {
    grades.push(student.grade);
  }
  let sumGrades = 0;
  for (const grade of grades) {
    sumGrades += grade;
  }
  const averageGrade = sumGrades / grades.length;

  return averageGrade.toFixed(1);
}
