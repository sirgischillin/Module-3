// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let employeesArray = [];

let confirmQuery = true;
// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  while (confirmQuery === true) {
    const employee = {
      "firstName": "",
      "lastName": "",
      "salary": ""
    }
    employee.firstName = prompt('Please enter employee first name:');
    employee.lastName = prompt('Please enter employee last name:');
    employee.salary = prompt('Please enter employee salary:');
    if (isNaN(employee.salary) === true) {
      employee.salary = 0;
    }
    employeesArray.push(employee);
    confirmQuery = confirm('Would you like to add another employee?');
  }
}

console.log(employeesArray);

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  // TODO: Calculate and display the average salary
  for (i = 0; i <employeesArray.length; i++) {
    totalSalary += employeesArray.salary[i];
  }
  let averageSalary = totalSalary / employeesArray.length;
}

console.log("The average salary for all employees entered is ${averageSalary} and there are ${employeesArray.length} entered into the sysetem.");


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
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