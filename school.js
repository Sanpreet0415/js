function countCalculation(school) {
    const { math: { teachers: mathTeachersCount, students: mathStudentsCount }, 
            history: { teachers: historyTeachersCount, students: historyStudentsCount } } = school.departments;

    return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
}

console.log(countCalculation(school));
function findTopStudent(school, courseName) {
    let topStudent = school.students[0];
    
    for (const student of school.students) {
        if (student.scores[courseName] > topStudent.scores[courseName]) {
            topStudent = student;
        }
    }

    return topStudent;
}

console.log(findTopStudent(school, 'math'));
function addNewDept(school, newDepartment) {
    const updatedDepartments = { ...school.departments, ...newDepartment };
    return { ...school, departments: updatedDepartments };
}

const newDepartment = {
    art: { teachers: 2, students: 50 }
};

console.log(addNewDept(school, newDepartment));
function highestStudentCountDepartment(school) {
    let highestCount = 0;
    let highestCountDept = '';

    for (const dept in school.departments) {
        const { students } = school.departments[dept];
        if (students > highestCount) {
            highestCount = students;
            highestCountDept = dept;
        }
    }

    return highestCountDept;
}

console.log(highestStudentCountDepartment(school));
function generateGreeting(name, language = 'English') {
    const greetings = {
        English: `Hello, ${name}!`,
        Spanish: `¡Hola, ${name}!`,
        French: `Bonjour, ${name}!`
    };

    return greetings[language];
}

console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob", "Spanish"));
console.log(generateGreeting("Charlie", "French"));
