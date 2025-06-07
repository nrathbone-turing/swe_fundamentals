// Scenario: Imagine you are working as a junior developer at a software company that specializes in creating financial applications. 
// Your task is to create a function that calculates the total amount of interest earned on a savings account based on the principal amount, annual interest rate, and number of years. 
// This function will help the company provide accurate financial projections for their clients.

// Practice Objective: Create a function that calculates the total interest earned over a specified number of years.
// This practice will help you understand how to define and use functions to perform calculations based on multiple inputs.


// Identify the Task: The function should calculate the total interest earned.

// Choose a Function Name: calculateInterest

// Determine Parameters: 
// The function takes three parameters: principal (number), rate (number), and years (number).
// Use a formula to calculate the interest: interest = principal * rate * year
// Return the calculated interest.

// Write the Code Block:

// functions_practice.js
function calculateInterest(principal, rate, years) {
  // Calculate the interest
  let interest = principal * rate * years;

  // Return the calculated interest
  return interest;
}
// Call the function with the required values
let totalInterest = calculateInterest(1000, 0.05, 3);

// Print the total interest earned to the console
console.log("Total interest earned:", totalInterest);

// Call the function with these values as arguments. 1000 for the principal, 0.05 for the rate and 3 for the years
// Store the returned interest amount in a variable.

let totalInterest = calculateInterest(1000, 0.05, 3);

// Print the total interest earned to the console.
// Run node functions_practice.js in the terminal to see your console log.

console.log("Total interest earned:", totalInterest);