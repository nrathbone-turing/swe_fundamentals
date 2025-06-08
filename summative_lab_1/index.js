// Define the Variables

let history = [] // Creates an empty array

// Create Operation Functions

function add(a, b) {
    const result = a + b;
    logCalculation(a, b, '+', result);
    return result;
}

function subtract(a, b) {
    const result = a - b;
    logCalculation(a, b, '-', result);
    return result;
}

function multiply(a, b) {
    const result = a * b;
    logCalculation(a, b, '*', result);
    return result;
}

function divide(a, b) {
    if (b === 0) {
        logCalculation(a, b, '/', "Error: Cannot divide by zero");
        return "Error: Cannot divide by zero.";
    } else {
        const result = a / b;
        logCalculation(a, b, '/', result);
        return result;
    }
}

// Create History Functions

function logCalculation(a, b, operator, result) {
    history.push({ // Push an object with keys
        operand1: a,
        operand2: b,
        operator: operator,
        result: result
    });
}

function displayHistory() {
    if (history.length === 0) { // Check to see if the `history` array is empty
        console.log("===========================");
        console.log("No calculations yet.");
        console.log("===========================");
    } else {
        console.log("===========================");
        console.log("=== Calculation History ===");
        for (let i = 0; i < history.length; i++) {
            const entry = history[i]; // Get the current object from the `history` array at position `i`
            console.log(`${entry.operand1} ${entry.operator} ${entry.operand2} = ${entry.result}`); // Prints a formatted string using values from the current entry
        }
        console.log("===========================");
    }
}

// Test and Refine

// First test: no history yet, empty array
history = [];
displayHistory(); // This should log: "No calculations yet."

// Second test: one operation and a log of the history array
history = [];
add(4, 5);
displayHistory(); // Now this should now log the history array because it's not empty

/*
=== Calculation History ===
4 + 5 = 9
===========================
*/

// Third test: multiple operations and a log of each of them

// Example arguments to test the calculator functions
add(4, 5);         // This should log: 4 + 5 = 9
subtract(10, 3);   // This should log: 10 - 3 = 7
multiply(6, 7);    // This should log: 6 * 7 = 42
divide(20, 5);     // This should log: 20 / 5 = 4
divide(5, 0);      // This should return and log "Error: Cannot divide by zero."
displayHistory(); //// This should log the history of all the previous logs

/*
=== Calculation History ===
4 + 5 = 9
10 - 3 = 7
6 * 7 = 42
20 / 5 = 4
8 / 0 = Error: Cannot divide by zero
===========================
*/