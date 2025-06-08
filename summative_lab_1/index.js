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


