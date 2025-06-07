// Selection Statements examples

// Selection statements using `if`

let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote.");
}

// Selection statements using `if-else`

let age = 16;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// Selection statements using `else-if`

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Repetition statements using `while` loops
let count = 0;

while (count < 5) {
  console.log("Count is: " + count);
  count++;
}

// Repetition statements using `for` loops

for (let i = 0; i < 5; i++) {

  console.log("Iteration: " + i);

}