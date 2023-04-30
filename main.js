class Student {
    constructor(firstName, lastName, birthYear, grades = []) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.grades = grades;
      this.attendance = new Array(25).fill(null);
    }
  
    getAge() {
      const now = new Date();
      const birthDate = new Date(this.birthYear, 0);
      const age = now.getFullYear() - birthDate.getFullYear();
      const months = now.getMonth() - birthDate.getMonth();
      if (months < 0 || (months === 0 && now.getDate() < birthDate.getDate())) {
        return age - 1;
      }
      return age;
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) {
        return null;
      }
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    }
  
    present() {
      const index = this.attendance.findIndex((value) => value === null);
      if (index !== -1) {
        this.attendance[index] = true;
      }
    }
  
    absent() {
      const index = this.attendance.findIndex((value) => value === null);
      if (index !== -1) {
        this.attendance[index] = false;
      }
    }
  
    getAttendance() {
      const presentCount = this.attendance.filter((value) => value === true).length;
      const totalCount = this.attendance.filter((value) => value !== null).length;
      return presentCount / totalCount;
    }
  
    summary() {
      const averageGrade = this.getAverageGrade();
      const attendancePercentage = this.getAttendance();
      if (averageGrade >= 90 && attendancePercentage >= 0.9) {
        return 'Молодець!';
      } else if (averageGrade >= 60 && attendancePercentage >= 0.6) {
        return 'Добре, але можна краще';
      } else {
        return 'Редиска!';
      }
    }
  }
  
  const student1 = new Student('Sveta', 'Yuzyk', 1999, [80, 90, 95, 85]);
  const student2 = new Student('Stas', 'Kympanov', 2000);
  const student3 = new Student('Oleksandr', 'Vanzar', 2000, [70, 75, 80]);
  
  console.log(student1.getAge()); 
  console.log(student2.getAge());
  console.log(student3.getAge());
  
  student1.present();
  student1.present();
  student1.absent();
  console.log(student1.getAttendance()); 
  
  console.log(student1.summary()); 
  console.log(student2.summary()); 
  console.log(student3.summary()); 
