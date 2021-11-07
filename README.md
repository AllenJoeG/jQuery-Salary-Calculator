# Project Name

--- JQuery Salary Calculator ---

This project challenges the aspiring software developer to integrate HTML, CSS, Javascript, and jQuery into a cohesive, dynamic product that accepts user input data and dynamically renders it to the DOM.

## Description

Duration: Weekend homework project.

This app accepts five pieces of user input data to create new employee objects. It displays the employee object data in a dynamically rendered table, and keeps a running total at the bottom of the monthly expenditure of paying the salaries of all employees.

The constituent functions are as follows:
submitButton()
  Gathers user input and calls the remaining functions. Clears input boxes upon submission.

addNewEmployeeToArray()
  Accepts five arguments corresponding to the user inputs. Creates a new employee object with that data and pushes to array of employee objects.

renderTableToDOM()
  Clears <tbody>. Then loops through employee array.
  Redraws <tbody> with data from each employee objects. 
  Creates a button in <tr> and calls deleteClickListener() for each employee object.
  Calls calculateMonthly() to update monthly Expenditure on DOM.

deleteClickListener()
  Listens for click, calls deleteButton() functionality.

deleteButton()
  Deletes <tr> that matches employee ID. 
  Deletes matching employee object.
  Calls calculateMonthly() to update DOM. 

calculateMonthly()
  Loops through array of employee object. Adds up salaries, then divides them by 12 for monthly Expenditure. 
  Updates DOM with monthly Expenditure. If the expenditure is greater than $20,000/mo, highlights in red.


--- Screen Shot ---

![Wireframe](salary-calc-wireframe.png)
Wireframe reflects features, but not this styled product.

--- Prerequisites ---

No installation required. Open index.html in browser of your choice.

--- Usage ---

To be used as a referral template for further coding implementation. A great source example for porting functionality to other languages, frameworks, or libraries.

--- Built With ---

HTML, CSS, Javascript, jQuery, VSCode

--- Acknowledgement ---

Thanks to Prime Digital Academy for the education and inspiration of this assignment. Shout-out to Gemini cohort for bandying different tips, tricks, and approaches in Slack.

--- Support ---
If you have suggestions or issues, please email me at: 
allen.joeG@gmail.com


Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
