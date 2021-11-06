console.log('jscript.js SCV ready')
$(document).ready(readyFunction);

function readyFunction(){
  console.log('jQuery.js Battlecruiser Operational')
  $('#submitButton').on('click', submitButton);

};

// array of employee objects []
const employeeArray = [];

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

// push user values to new employee object ()
function submitButton(){
  //get Input values
  let firstNameIn = $('#firstNameInput').val();
  let lastNameIn = $('#lastNameInput').val();
  let idNumIn = $('#idNumberInput').val();
  let titleIn = $('#jobTitleInput').val();
  let salaryIn = $('#salaryInput').val();

  addNewEmployeeToArray(firstNameIn, lastNameIn, idNumIn, titleIn, salaryIn);
  console.log(employeeArray);

  renderTableToDOM(employeeArray);

  calculateValue(employeeArray);

  //clear input values
  $('#firstNameInput').val('');
  $('#lastNameInput').val('');
  $('#idNumberInput').val('');
  $('#jobTitleInput').val('');
  $('#salaryInput').val('');
};

// render [] to '#tableDiv' on DOM ()
function renderTableToDOM(array){
  //target relevant table Elements 
  let tableBody = $('#tableBody');
  //clear the <tbody> to redraw
  tableBody.empty();

  for (let employee of array) {
    let newTableRow = `
      <tr id="${employee.idNumber}">
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNumber}</td>
        <td>${employee.jobTitle}</td>
        <td>${employee.salary}</td>
      </tr>
      `
      console.log(newTableRow);
      tableBody.append(newTableRow);
  }
};

// calculate cumulative salary and render to DOM ()
function calculateValue(array){
  let salaryTotal = 0;
  for (let employee in array){
    salaryTotal += employee.salary
  }
  //add total to salary total output
  $('#salaryTotal').text(salaryTotal);
};

// Delete ()