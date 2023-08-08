class Student {
    constructor(firstName, lastName, birthYear) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.grades = [];
      this.attendance = new Array(25).fill(null);
    }
  

    addGrade(grade) {
    if (typeof grade === "number" && grade >= 0 && grade <= 100) {
      this.grades.push(grade);
    } else {
      console.log("Некоректна оцінка! Введіть число від 0 до 100.");
    }
  }



    getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      return sum / this.grades.length;
    }
  
    present() {
      if (!this.isAttendanceFull()) {
        const emptySlotIndex = this.attendance.indexOf(null);
        this.attendance[emptySlotIndex] = true;
      } else {
        console.log("Відвідуваність вже заповнена!");
      }
    }
  
    absent() {
      if (!this.isAttendanceFull()) {
        const emptySlotIndex = this.attendance.indexOf(null);
        this.attendance[emptySlotIndex] = false;
      } else {
        console.log("Відвідуваність вже заповнена!");
      }
    }
  
    isAttendanceFull() {
      return !this.attendance.includes(null);
    }
  
    summary() {
      const averageGrade = this.getAverageGrade();
      const attendancePercentage = this.getAttendancePercentage();
      if (averageGrade > 90 && attendancePercentage > 0.9) {
        return "Молодець!";
      } else if (averageGrade > 90 || attendancePercentage > 0.9) {
        return "Добре, але можна краще";
      } else {
        return "Редиска!";
      }
    }
  
    getAttendancePercentage() {
      const totalClasses = this.attendance.length;
      const presentClasses = this.attendance.filter((attendance) => attendance === true).length;
      return presentClasses / totalClasses;
    }
  }