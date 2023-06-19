//Вам потрібно зробити конструктор сутності "Студент".

// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – ​​методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

function Student(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);

    this.getAge = function() {
        return new Date().getFullYear() - this.birthYear;
    };

    this.getAverageGrade = function() {
        if (this.grades.length === 0) {
            return null;
        }
        const sum = this.grades.reduce((total, grade) => total + grade);
        return sum / this.grades.length;
    };

    this.present = function() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
            return true;
        }
        return false;
    };

    this.absent = function() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
            return true;
        }
        return false;
    };

    this.summary = function() {
        const averageGrade = this.getAverageGrade();
        const attendanceCount = this.attendance.filter(item => item !== null).length;
        const attendanceRate = attendanceCount / this.attendance.length;
        if (averageGrade >= 90 && attendanceRate >= 0.9) {
            return "Молодець!";
        } else if (averageGrade >= 90 || attendanceRate >= 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    };
}

const student1 = new Student('Masha', 'Titova', 1999);
const student2 = new Student('Aleksandr', 'Titov', 1996);
const student3 = new Student('Anton', 'Titov', 1998);

student1.grades.push(100, 100, 100);
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();


student2.grades.push(100, 100, 95, 99);
student2.absent();
student2.absent();
student2.absent();

student3.grades.push(80, 85, 70, 85);
student3.present();
student3.present();
student3.present();


console.log(`${student1.name} ${student1.surname},
вік ${student1.getAge()},
середній бал: ${student1.getAverageGrade()},
відвідало занять: ${student1.attendance.filter(item => item).length},
${student1.summary()}`);

console.log(`${student2.name} ${student2.surname},
вік ${student2.getAge()},
середній бал: ${student2.getAverageGrade()},
відвідало занять: ${student2.attendance.filter(item => item).length},
${student2.summary()}`);

console.log(`${student3.name} ${student3.surname},
вік ${student3.getAge()},
середній бал: ${student3.getAverageGrade()},
відвідало занять: ${student3.attendance.filter(item => item).length},
${student3.summary()}`);