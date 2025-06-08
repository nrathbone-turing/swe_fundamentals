## Define the Variables

Create an empty array called `history` to store past calculations.

## Create Operation Functions

**Create a function add(a, b):**
* Calculate a + b
* Store the result and info in the history array
* Return the result

**Create a function subtract(a, b):**
* Calculate a - b
* Store the result and info in the history array
* Return the result

**Create a function multiply(a, b):**
* Calculate a * b
* Store the result and info in the history array
* Return the result

**Create a function divide(a, b):**
* Check if b === 0 → return an error or message if true
* Otherwise, calculate a / b
* Store the result and info in the history array
* Return the result

## Create History Functions

function `logCalculation(a, b, operator, result)`:

Push an object with keys:
* `operand1` (number)
* `operand2` (number)
* `operator` (string: '+', '-', '*', or '/') // Making these as strings to not confuse with the actual maths operators
* `result` (of the calc)
Then add that object to history

function `displayHistory()`:

If `history` is empty:
* Print: "No calculations yet."

Else:
* Loop through each item in `history` and log it formatted like: `3 + 2 = 5`