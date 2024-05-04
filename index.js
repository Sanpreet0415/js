function subtract(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 - num2;
    } else {
        return "Both parameters must be numbers.";
    }
}

// Example Invocation:
console.log(subtract(10, 5)); // Output: 5
function greet(firstName, lastName, age) {
    if (typeof age === 'undefined') {
        return `Hello, ${firstName} ${lastName}.`;
    } else {
        return `${firstName} ${lastName}'s age is ${age}.`;
    }
}

// Example Invocation:
console.log(greet("John", "Doe", 30)); // Output: "John Doe's age is 30."
console.log(greet("Jane", "Smith")); // Output: "Hello, Jane Smith."
function interpolate(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        const sum = num1 + num2;
        return `${num1} + ${num2} = ${sum}`;
    } else {
        return "Both parameters must be numbers.";
    }
}

// Example Invocation:
console.log(interpolate(5, 3)); 
