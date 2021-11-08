console.log('jscript.js SCV ready')
$(document).ready(readyFunction);

function readyFunction(){
  console.log('jQuery.js Battlecruiser Operational')
  renderTableToDOM(employeeArray);
  calculateMonthly(employeeArray);
  $('#submitButton').on('click', submitButton);
};

// array of employee objects []
const employeeArray = [
  {
    firstName: 'Joe',
    lastName: 'Allen',
    idNumber: 1234,
    jobTitle: 'Spreadsheet Creator',
    salary: 82000,
  },
  {
    firstName: 'Kelly',
    lastName: 'Danger',
    idNumber: 1423,
    jobTitle: 'Test Employee',
    salary: 82000,
  }
];

// Main Function
function submitButton(){
  //get Input values
  let firstNameIn = $('#firstNameInput').val();
  let lastNameIn = $('#lastNameInput').val();
  let idNumIn = $('#idNumberInput').val();
  let titleIn = $('#jobTitleInput').val();
  let salaryIn = $('#salaryInput').val();
  //push values into new employee object
  addNewEmployeeToArray(firstNameIn, lastNameIn, Number(idNumIn), titleIn, Number(salaryIn));
  //empty #tableBody and redraw rows and deleteButton, and load clickListener
  renderTableToDOM(employeeArray);
  //Loop through employeeArray, add up .salary, divide by 12, render to DOM.
  calculateMonthly(employeeArray);

  //clear input values
  $('#firstNameInput').val('');
  $('#lastNameInput').val('');
  $('#idNumberInput').val('');
  $('#jobTitleInput').val('');
  $('#salaryInput').val('');
}; // end submitButton()

// Required Feature - creates new employee object ()
function addNewEmployeeToArray(first, last, id, title, salary){
  let newEmployeeObject = {
    firstName: first,
    lastName: last,
    idNumber: id,
    jobTitle: title,
    salary: salary,
  };

  employeeArray.push(newEmployeeObject);
}; //end addNewEmployeeToArray()

// Required Feature - render [] to '#tableDiv' on DOM ()
function renderTableToDOM(array){
  //target relevant table Elements 
  let tableBody = $('#tableBody');
  //clear the <tbody> to redraw
  tableBody.empty();

  //Render the table, button, and clickListener for each employee object in employeeArray
  for (let employee of array) {
    let newTableRow = `
      <tr id="row${employee.idNumber}">
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNumber}</td>
        <td>${employee.jobTitle}</td>
        <td>${employee.salary}</td>
        <td><button id="${employee.idNumber}"">Delete Employee</button></td>
      </tr>
      `;
      //render newTableRow
      tableBody.append(newTableRow);
      //Load Click Listener for delete button
      let selectButtonID = '#' + employee.idNumber;
      let selectRowID = '#row' + employee.idNumber;
      deleteClickListener(selectRowID, selectButtonID, employee.idNumber);
  }
}; //end renderTableToDOM()

//Required Feature - Function Loads Click Listener to delete buttons
function deleteClickListener(rowID, buttonID, idNumber){
  $(buttonID).on('click', function(){
    //Call deleteButton to remove HTML and object
    deleteButton(rowID, idNumber, employeeArray);
  });
}; //end deleteClickListener()

//Required Feature - Function Deletes table row HTML and employee Object
function deleteButton(rowID, idNumber, array){
  //remove row HTML by fed rowID
  $(rowID).remove();
  //remove employee Object by fed idNumber  
  for (let i in array){
    if (array[i].idNumber === idNumber ){
      array.splice(i, 1);
    };
  };
  //refresh Expenditure display
  calculateMonthly(array);
  // array.filter(function(el) { return el.idNumber === id; });
  //Gave this a try, will return and examine
}; //end deleteButton()

// Required Feature - calculate cumulative salary and render to DOM ()
function calculateMonthly(array){
  let annualSalaryTotal = 0;
  let monthlySalaryExpense = 0;
  const monthlySalaryMax = 20000;

  for (let employee of array){
    annualSalaryTotal += employee.salary;
  };

  monthlySalaryExpense = Math.floor(annualSalaryTotal / 12);

  //add total to salary total output
  $('#monthlyTotal').text(`${monthlySalaryExpense}`);

  if(monthlySalaryExpense > 20000){
    $('.expenditureDiv').addClass('redBackground');
  } else if (monthlySalaryExpense < 20000 && $('.expenditureDiv').hasClass('redBackground')){
    $('.expenditureDiv').removeClass('redBackground');

  }
}; //end calculateMonthly()