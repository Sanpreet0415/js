const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

function highestPaid(employees){
    const sal=employees.length;
    let max=employees[0];
    for(let i=0;i<employees.length;i++){
        const ce=employees[i];
        if(ce.salary>max.salary){
            max=ce;
        }
    }
    return max;
}

console.log(highestPaid(employees)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }


function destructuringToSwap(employees){
    
    const temp = employees[0];

    employees[0] = employees[employees.length - 1];
    employees[employees.length - 1] = temp;

    return employees;
}


console.log(destructuringToSwap(employees)); // Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }, { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 }, { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ]
