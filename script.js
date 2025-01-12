// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let employeesArray = [];
  let confirmQuery = true;
  // TODO: Get user input to create and return an array of employee objects
  while (confirmQuery === true) {
    const employee = {
      firstName: "",
      lastName: "",
      salary: ""
    }
    employee.firstName = prompt('Please enter employee first name:');
    employee.lastName = prompt('Please enter employee last name:');
    employee.salary = prompt('Please enter employee salary:');
    if (isNaN(employee.salary) === true) {
      employee.salary = 0;
    }
    employee.salary = Number(employee.salary);
    employeesArray.push(employee);
    confirmQuery = confirm('Would you like to add another employee?');
  }
  return employeesArray;
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  if (employeesArray.length === 0)
    {
      return 0;
    }
    let totalSalary = 0;
    let averageSalary = 0;
    for (let i = 0; i < employeesArray.length; i++) {
      totalSalary = totalSalary + employeesArray[i].salary;
    }
    averageSalary = totalSalary / employeesArray.length;
    console.log(`The average employee salary between our ${employeesArray.length} employees is ${averageSalary}`);
  }


  // Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomChoice = Math.floor(Math.random(employeesArray) * employeesArray.length);
  console.log(`Congratulations to ${employeesArray[randomChoice].firstName} ${employeesArray[randomChoice].lastName}, our random drawing winner!`);
}

/*
====================
STARTER CODE
Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');
  
  // Clear the employee table
  employeeTable.innerHTML = '';
  
  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
    
    const newTableRow = document.createElement("tr");
    
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);
    
    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);
    
    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });
    
    newTableRow.append(salaryCell);
    
    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();
  
  console.table(employees);
  
  displayAverageSalary(employees);
  
  console.log('==============================');
  
  getRandomEmployee(employees);
  
  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });
  
  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
