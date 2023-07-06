//Соответствующий код проекта находится в архиве code.zip.
//
//
//
// Файл script.js содержит следующие данные:
//
// users - массив пользователей системы.
// roles — объект, представляющий роли пользователей.
// градация - объект с диапазоном оценок.
//
//
// Что нужно сделать, так это отобразить соответствующий блок для каждого пользователя из массива пользователей.
//
// Для каждого пользователя в блоке выводим:
//
// Изображение пользователя — свойство img.
// Имя пользователя - свойство имени.
// Возраст пользователя — свойство age.
// Роль пользователя - свойство роли.
//
//
// Если у пользователя есть свойство курсов, мы показываем список пройденных курсов.
//
// Создайте основной класс с именем User, который будет иметь методы render и renderCourses.
//
// Для каждой роли создайте отдельный класс: Student, Lector и Admin, которые наследуются от класса User.
//
//
//
// В классах Lector и Admin переопределите метод renderCourses для отображения списка курсов в нужном формате.
//
// Вы можете изменить предоставленную HTML-разметку и классы CSS для каждого блока по своему усмотрению. Основная цель — визуально отобразить его так, как показано на изображении.

const roles = {
    admin: "https://www.flaticon.com/svg/static/icons/svg/1424/1424453.svg",
    student: "https://www.flaticon.com/svg/static/icons/svg/1424/1424424.svg",
    lector: "https://www.flaticon.com/svg/static/icons/svg/1424/1424450.svg"
};

const gradation = {
    20: "satisfactory",
    55: "good",
    85: "very-good",
    100: "excellent"
};

const users = [
    {
        name: "Jack Smith",
        age: 23,
        img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922522.svg",
        role: "student",
        courses: [
            {
                "title": "Front-end Pro",
                "mark": 20
            },
            {
                "title": "Java Enterprise",
                "mark": 100
            }
        ]
    },
    {
        name: "Amal Smith",
        age: 20,
        img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922656.svg",
        role: "student"
    },
    {
        name: "Noah Smith",
        age: 43,
        img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922616.svg",
        role: "student",
        courses: [
            {
                "title": "Front-end Pro",
                "mark": 50
            }
        ]
    },
    {
        name: "Charlie Smith",
        age: 18,
        img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922688.svg",
        role: "student",
        courses: [
            {
                "title": "Front-end Pro",
                "mark": 75
            },
            {
                "title": "Java Enterprise",
                "mark": 23
            }]
    },
    {
        name: "Emily Smith",
        age: 30,
        img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922565.svg",
        role: "admin",
        courses: [
            {
                "title": "Front-end Pro",
                "score": 10,
                "lector": "Leo Smith"
            },
            {
                "title": "Java Enterprise",
                "score": 50,
                "lector": "David Smith"
            },
            {
                "title": "QA",
                "score": 75,
                "lector": "Emilie Smith"
            }]
    },
    {
        name: "Leo Smith",
        age: 253,
        img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922719.svg",
        role: "lector",
        courses: [
            {
                "title": "Front-end Pro",
                "score": 78,
                "studentsScore": 79
            },
            {
                "title": "Java Enterprise",
                "score": 85,
                "studentsScore": 85
            }
        ]
    }
]

class User {
    constructor(name, age, img, role) {
        this.name = name;
        this.age = age;
        this.img = img;
        this.role = role;
    }

    render() {
        const userBlock = document.createElement('div');
        userBlock.classList.add('user');

        const img = document.createElement('img');
        img.src = this.img;
        userBlock.appendChild(img);

        const name = document.createElement('p');
        name.textContent = `Name: ${this.name}`;
        userBlock.appendChild(name);

        const age = document.createElement('p');
        age.textContent = `Age: ${this.age}`;
        userBlock.appendChild(age);

        const role = document.createElement('p');
        role.textContent = `Role: ${this.role}`;
        userBlock.appendChild(role);

        return userBlock;
    }
}

class Student extends User {
    constructor(name, age, img, role, courses) {
        super(name, age, img, role);
        this.courses = courses;
    }

    render() {
        const studentBlock = super.render();

        if (this.courses) {
            const coursesList = document.createElement('ul');
            coursesList.classList.add('courses');

            for (const course of this.courses) {
                const courseItem = document.createElement('li');
                courseItem.textContent = `${course.title}: ${course.mark}`;
                coursesList.appendChild(courseItem);
            }

            studentBlock.appendChild(coursesList);
        }

        return studentBlock;
    }
}

class Lector extends User {
    constructor(name, age, img, role, courses) {
        super(name, age, img, role);
        this.courses = courses;
    }

    renderCourses() {
        const coursesList = document.createElement('ul');
        coursesList.classList.add('courses');

        for (const course of this.courses) {
            const courseItem = document.createElement('li');
            courseItem.textContent = `${course.title}: ${course.score} (Students score: ${course.studentsScore})`;
            coursesList.appendChild(courseItem);
        }

        return coursesList;
    }
}

class Admin extends User {
    constructor(name, age, img, role, courses) {
        super(name, age, img, role);
        this.courses = courses;
    }

    renderCourses() {
        const coursesList = document.createElement('ul');
        coursesList.classList.add('courses');

        for (const course of this.courses) {
            const courseItem = document.createElement('li');
            courseItem.textContent = `${course.title}: ${course.score} (Lector: ${course.lector})`;
            coursesList.appendChild(courseItem);
        }

        return coursesList;
    }
}

function renderUsers() {
    const usersContainer = document.getElementById('users');

    for (const user of users) {
        let userBlock;

        if (user.role === 'student') {
            userBlock = new Student(user.name, user.age, user.img, user.role, user.courses);
        } else if (user.role === 'lector') {
            userBlock = new Lector(user.name, user.age, user.img, user.role, user.courses);
        } else if (user.role === 'admin') {
            userBlock = new Admin(user.name, user.age, user.img, user.role, user.courses);
        }

        usersContainer.appendChild(userBlock.render());
    }
}

renderUsers();