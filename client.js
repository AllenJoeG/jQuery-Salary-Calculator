console.log('jscript.js SCV ready')
$(document).ready(readyFunction);

function readyFunction(){
  console.log('jQuery.js Battlecruiser Operational')
  $('#submitButton').on('click', submitButton);
};

// array of employee objects []
const employeeArray = [];

// push user values to new employee object ()
function submitButton(){
  //get Input values
  let firstNameIn = $('#firstNameInput').val();
  let lastNameIn = $('#lastNameInput').val();
  let idNumIn = $('#idNumberInput').val();
  let titleIn = $('#jobTitleInput').val();
  let salaryIn = $('#salaryInput').val();

  addNewEmployeeToArray(firstNameIn, lastNameIn, Number(idNumIn), titleIn, Number(salaryIn));

  renderTableToDOM(employeeArray);

  calculateMonthly(employeeArray);

  //clear input values
  $('#firstNameInput').val('');
  $('#lastNameInput').val('');
  $('#idNumberInput').val('');
  $('#jobTitleInput').val('');
  $('#salaryInput').val('');
};

// Required Feature - creates new employee object ()
function addNewEmployeeToArray(first, last, id, title, salary){
  let newEmployeeObject = {
    firstName: first,
    lastName: last,
    idNumber: id,
    jobTitle: title,
    salary: salary,
  }

  employeeArray.push(newEmployeeObject);
}

// Required Feature - render [] to '#tableDiv' on DOM ()
function renderTableToDOM(array){
  //target relevant table Elements 
  let tableBody = $('#tableBody');
  //clear the <tbody> to redraw
  tableBody.empty();

  for (let employee of array) {
    let newTableRow = `
      <tr id="row${employee.idNumber}">
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNumber}</td>
        <td>${employee.jobTitle}</td>
        <td>${employee.salary}</td>
        <button class="deleteButton" id="delete${employee.idNumber}>Delete</button>
      </tr>
      `
      console.log(newTableRow);
      tableBody.append(newTableRow);
  }
};

// Required Feature - calculate cumulative salary and render to DOM ()
function calculateMonthly(array){
  let annualSalaryTotal = 0;
  let monthlySalaryExpense = 0;
  const monthlySalaryMax = 20000;

  console.log(array);
  for (let employee of array){
    annualSalaryTotal = employee.salary;
  };

  monthlySalaryExpense = Math.floor(annualSalaryTotal / 12);

  //add total to salary total output
  $('#monthlyTotal').text(`${monthlySalaryExpense}`);
};

// Delete ()