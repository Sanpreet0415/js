// Object Factory Function
function objectFactory(fname, age) {
    return { [fname]: Number(age) };
}

// Example Invocation:
console.log(objectFactory("John", "25")); // Output: { John: 25 }

// Grade Classifier Function
function gradeClassifier(score) {
    if (typeof score !== 'number' || score < 0 || score > 100) {
        return "Invalid input. Please provide a score between 0 and 100.";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Example Invocation:
console.log(gradeClassifier(85)); // Output: "B"

// String Manipulator Function
function stringManipulator(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return "Both inputs must be strings.";
    }

    if (str1 === '' && str2 === '') {
        return "Both strings are empty.";
    } else if (str1 === '') {
        return str2;
    } else if (str2 === '') {
        return str1;
    } else if (str1.length === str2.length) {
        return str1 + str2;
    } else {
        return str1.length > str2.length ? str1 + str2 : str2 + str1;
    }
}

// Example Invocation:
console.log(stringManipulator("hello", "world")); // Output: "helloworld"
