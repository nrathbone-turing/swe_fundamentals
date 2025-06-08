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
        return "Error: Cannot divide by zero."
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
        console.log("No calculations yet.");
    } else {
        for (let i = 0; i < history.length; i++) {
            const entry = history[i]; // Get the current object from the `history` array at position `i`
            console.log(`${entry.operand1} ${entry.operator} ${entry.operand2} = ${entry.result}`); // Prints a formatted string using values from the current entry
        }
    }
}