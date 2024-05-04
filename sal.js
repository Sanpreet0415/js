
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];

  function employeeInformation(employees){
    const emp=employees[1];

    return `secondEmployeename ${emp.name} secondemployeedepartment ${emp.department}`
  }
  
  console.log(employeeInformation(employees)); // { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }


  function averageSalary(employees) {
    let totalSalary = 0;

    for (let i = 0; i < employees.length; i++) {
        const { salary } = employees[i];
        totalSalary += salary;
    }

    return totalSalary / employees.length;
} console.log(averageSalary(employees)); // Output: 60000
 

  

function thirdEmployeeInfo(employees){
    const emp=employees[2];
    
    const bonus=emp.salary*0.1;
    return `Employee: ${emp.name}, Age: ${emp.age}, Salary: ${emp.salary}, Bonus: ${bonus}`;
  }
  console.log(thirdEmployeeInfo(employees));
