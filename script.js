// Do not edit the below code
const stringResult = document.getElementById('string-result');
const numberResult = document.getElementById('number-result');
const booleanResult = document.getElementById('boolean-result');
const nullResult = document.getElementById('null-result');
const undefinedResult = document.getElementById('undefined-result');
const check = document.getElementById('check');

// Instructions for this lab: After completing every challenge click on the check button to check the status of completion. If your code for a respective challenge is correct then the status will be changed to "completed".

// Challenge 1: Assign a string value to the below variable.
// Your code goes here
var stringData = "Aaryan";

// Challenge 2: Assign a number value to the below variable.
// Your code goes here
var numbersData = 19;

// Challenge 3: Assign a boolean value to the below variable.
// Your code goes here
var booleanData = true;

// Challenge 4: Assign a null value to the below variable.
// Your code goes here
var nullData = null;

// Challenge 5: Assign an undefined value to the below variable.
// Your code goes here
var undefinedData;


// Do not edit the below code

check.onclick = () => {
  if (typeof stringData === 'string') {
    stringResult.innerHTML = 'Completed';
  }
  if (typeof numbersData === 'number') {
    numberResult.innerHTML = 'Completed';
  }
  if (typeof booleanData === 'boolean') {
    booleanResult.innerHTML = 'Completed';
  }
  if (typeof nullData === 'object') {
    nullResult.innerHTML = 'Completed';
  }
  if (typeof undefinedData === 'undefined') {
    undefinedResult.innerHTML = 'Completed';
  }
};
