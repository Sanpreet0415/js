const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];

function combiningArrays(fruits, vegetables) {
    return [...fruits, ...vegetables];
}



console.log(combiningArrays(fruits, vegetables)); // Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]

// Merging Objects Function
function mergingObjects(student, course) {
    return { ...student, ...course };
}

// Example Invocation:
const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
console.log(mergingObjects(student, course)); // Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }

const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
  ];

function combiningNestedArrays(array1, array2) {
    return [...array1, ...array2];
}

// Example Invocation:

console.log(combiningNestedArrays(array1, array2)); // Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]
