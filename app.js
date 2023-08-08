const student1 = new Student("Іван", "Петров", 1998);
const student2 = new Student("Марія", "Коваль", 1999);
const student3 = new Student("Петро", "Сидоров", 2000);

function presentStudent(student) {
  student.present();
  updateStudentInfo(student);
}

function absentStudent(student) {
  student.absent();
  updateStudentInfo(student);
}

function addGradeStudent(student, grade) {
    student.addGrade(grade);
    updateStudentInfo(student);
  }

function updateStudentInfo(student) {
  const studentId = student === student1 ? "1" : student === student2 ? "2" : "3";
  document.getElementById(`student${studentId}FirstName`).innerText = student.firstName;
  document.getElementById(`student${studentId}LastName`).innerText = student.lastName;
  document.getElementById(`student${studentId}BirthYear`).innerText = student.birthYear;
  document.getElementById(`student${studentId}AverageGrade`).innerText = student.getAverageGrade().toFixed(2);
  document.getElementById(`student${studentId}AttendancePercentage`).innerText = (student.getAttendancePercentage() * 100).toFixed(2) + "%";
  document.getElementById(`student${studentId}Summary`).innerText = student.summary();
}

// Оновлення інформації про студентів при завантаженні сторінки
updateStudentInfo(student1);
updateStudentInfo(student2);
updateStudentInfo(student3);

// Додаємо обробник подій для кнопок студентів
document.getElementById("presentStudent1").addEventListener("click", function () {
  presentStudent(student1);
});

document.getElementById("absentStudent1").addEventListener("click", function () {
  absentStudent(student1);
});

document.getElementById("addGradeStudent1").addEventListener("click", function () {
    const grade = prompt("Введіть оцінку (0-100):");
    addGradeStudent(student1, parseInt(grade));
  });

document.getElementById("presentStudent2").addEventListener("click", function () {
  presentStudent(student2);
});

document.getElementById("absentStudent2").addEventListener("click", function () {
  absentStudent(student2);
});

document.getElementById("addGradeStudent2").addEventListener("click", function () {
    const grade = prompt("Введіть оцінку (0-100):");
    addGradeStudent(student2, parseInt(grade));
  });


document.getElementById("presentStudent3").addEventListener("click", function () {
  presentStudent(student3);
});

document.getElementById("absentStudent3").addEventListener("click", function () {
  absentStudent(student3);
});

document.getElementById("addGradeStudent3").addEventListener("click", function () {
    const grade = prompt("Введіть оцінку (0-100):");
    addGradeStudent(student3, parseInt(grade));
  });
